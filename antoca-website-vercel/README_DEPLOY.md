# ANTOCA Website – Deploy auf Vercel

## Schnellstart
1. Repo erstellen (GitHub) und diesen Ordner pushen.
2. Auf https://vercel.com importieren (New Project).
3. In den Project Settings > Environment Variables setzen:
   - `RESEND_API_KEY` (von https://resend.com)
   - `CONTACT_TO` = office@antoca-training.com (oder Wunschadresse)
4. Deploy. Die API ist unter `/api/contact` erreichbar.

## Domain
- In Vercel Project > Domains: `antoca-training.com` hinzufügen.
- DNS beim Domain-Provider: A/ALIAS auf Vercel-Ziel oder Nameserver auf Vercel umstellen (Assistent in Vercel führt durch).
- Nach Propagation (meist 5–30 Min) ist die Seite live mit HTTPS.

## Formular
- Das Kontaktformular postet per `fetch` an `/api/contact`.
- Absenderadresse (From): `mail@antoca-training.com`. Bei Resend ggf. Domain verifizieren + DNS-Einträge setzen (SPF/DKIM).

## Lokal testen (optional)
- `npm install`
- `vercel dev` (wenn Vercel CLI installiert ist)
