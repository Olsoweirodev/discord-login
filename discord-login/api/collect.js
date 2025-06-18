export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Konsola yaz (test için)
    console.log(`E-posta: ${email}, Şifre: ${password}`);

    // Bilgileri döndür (gerçek sistemde veritabanına kaydet veya e-posta gönder)
    res.status(200).json({ status: 'success', message: 'Bilgiler alındı' });
  } else {
    res.status(405).json({ status: 'error', message: 'Yalnızca POST istekleri destekleniyor' });
  }
}