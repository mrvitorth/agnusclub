import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  // LISTAR PRODUTOS (Público - Landing Page e Admin)
  if (req.method === 'GET') {
    try {
      const rows = await sql`SELECT * FROM products ORDER BY created_at DESC`;
      // Formata os nomes das colunas para bater com o frontend
      const formatted = rows.map(r => ({
        id: r.id,
        title: r.title,
        color: r.color,
        description: r.description,
        originalPrice: r.original_price,
        price: r.price,
        frontImage: r.front_image,
        backImage: r.back_image,
        imageUrl: r.front_image,
        isLaunch: r.is_launch,
        isFlashSale: r.is_flash_sale,
        tag: r.is_launch ? '1º DROP - DISPONÍVEL' : 'DISPONÍVEL',
        buyLink: `https://wa.me/+5511988431330?text=${encodeURIComponent(`Olá! Tenho interesse na peça: ${r.title}`)}`
      }));
      return res.status(200).json(formatted);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // VALIDAÇÃO DE SENHA PARA QUALQUER ALTERAÇÃO
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Senha de administrador inválida' });
  }

  // CRIAR NOVO PRODUTO
  if (req.method === 'POST') {
    const { title, color, description, originalPrice, price, frontImage, backImage, isLaunch, isFlashSale } = req.body;
    try {
      const [newProduct] = await sql`
        INSERT INTO products (title, color, description, original_price, price, front_image, back_image, is_launch, is_flash_sale)
        VALUES (${title}, ${color}, ${description}, ${originalPrice}, ${price}, ${frontImage}, ${backImage}, ${isLaunch}, ${isFlashSale})
        RETURNING *
      `;
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // ATUALIZAR PRODUTO (Preço, Título ou Selos)
  if (req.method === 'PUT') {
    const { id, title, price, originalPrice, isLaunch, isFlashSale } = req.body;
    try {
      await sql`
        UPDATE products 
        SET 
          title = COALESCE(${title}, title),
          price = COALESCE(${price}, price),
          original_price = COALESCE(${originalPrice}, original_price),
          is_launch = COALESCE(${isLaunch}, is_launch),
          is_flash_sale = COALESCE(${isFlashSale}, is_flash_sale)
        WHERE id = ${id}
      `;
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // EXCLUIR PRODUTO
  if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      await sql`DELETE FROM products WHERE id = ${id}`;
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Método não permitido' });
}