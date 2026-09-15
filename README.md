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
- `/insights` — general-information notes from practice
- `/contact` — office details and inquiry form
- `/careers` — how to send an application

The inquiry form validates submissions on the server. Wire it to mail delivery before production use.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
