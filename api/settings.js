import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL || process.env.POSTGRES_URL);

  // LER CONFIGURAÇÕES (Público)
  if (req.method === 'GET') {
    try {
      const [row] = await sql`SELECT * FROM settings WHERE id = 1`;
      return res.status(200).json(row || {});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // VALIDAR SENHA PARA ATUALIZAR
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  // SALVAR NOVAS CONFIGURAÇÕES
  if (req.method === 'PUT') {
    const { launch_date, launch_banner, whatsapp, instagram } = req.body;
    try {
      await sql`
        UPDATE settings
        SET 
          launch_date = ${launch_date},
          launch_banner = ${launch_banner},
          whatsapp = ${whatsapp},
          instagram = ${instagram},
          updated_at = CURRENT_TIMESTAMP
        WHERE id = 1
      `;
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Método não permitido' });
}