# FGDLaw

Next.js website for **The Law Firm of Frederick G. Dedace** (FGDLaw), converted from the firm’s professional site concept. The live practice is in San Miguel, Manila.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Server Action for the consultation inquiry form

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

The inquiry form validates submissions on the client and server, including checks that reject HTML and script injection. Successful inquiries are emailed to **info@fgdlaw.net**. Set `RESEND_API_KEY` (and optionally `INQUIRY_FROM_EMAIL`) for transactional delivery; otherwise the form uses FormSubmit. The submit button locks after a click, and a second send is blocked for 15 minutes.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
