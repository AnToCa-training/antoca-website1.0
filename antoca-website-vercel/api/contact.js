// /api/contact.js
import { Resend } from '@resend/node';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ ok: false, error: 'Missing fields' });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO || 'office@antoca-training.com';

    const text = `Neue Nachricht über das Kontaktformular:

Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
`;

    // Send email
    await resend.emails.send({
      from: 'ANTOCA <mail@antoca-training.com>',
      to: [to],
      subject: 'Neue Anfrage über die Website',
      text
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Server error' });
  }
}
