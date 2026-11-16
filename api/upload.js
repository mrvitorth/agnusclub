import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: false, // Necessário para receber o arquivo de imagem puro
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Valida a senha antes de permitir upload
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  const filename = req.query.filename || `camiseta-${Date.now()}.jpg`;

  try {
    const blob = await put(filename, req, {
      access: 'public',
    });
    return res.status(200).json(blob);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}