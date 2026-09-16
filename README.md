# FGDLaw

Next.js website for **The Law Firm of Frederick G. Dedace** (FGDLaw), converted from the firm’s professional site concept. The live practice is in San Miguel, Manila.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static-exportable App Router site for Turbify (PHP mail) or Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — homepage matching the professional concept
- `/about` — firm history and values
- `/practice-areas` and `/practice-areas/[slug]` — six practice desks
- `/team` and `/team/[slug]` — counsel biographies
- `/contact` — office details and inquiry form
- `/careers` — how to send an application

The inquiry form validates submissions in the browser, including checks that reject HTML and script injection. It posts to `/inquiry.php`. The submit button locks after a click, and a second send is blocked for 15 minutes.

## Turbify static deploy

Turbify cannot run Next.js Server Actions. Build static files and let PHP send mail through Turbify’s Sendmail:

```bash
npm run build:static
```

Upload the contents of `out/` (including `inquiry.php` and `.htaccess`) to the hosting document root. The PHP script emails **info@fgdlaw.net** and sets `From` / `Reply-To` on the firm domain, which Turbify requires.

Local `npm run dev` rewrites `/inquiry.php` to `/api/inquiry`. Set `INQUIRY_MAIL_DRIVER=log` for a dry run, or SMTP / `RESEND_API_KEY` to send from Node.

## Scripts

```bash
npm run dev
npm run build
npm run build:static
npm run start
npm run lint
```
