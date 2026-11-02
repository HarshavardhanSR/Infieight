# Infieight

INFIEIGHT is a premium digital services platform for website, software, AI, and design work. This repository contains the Next.js application for the public marketing site, service packages, pricing, contact flow, and Razorpay-ready checkout.

## Features
- Premium landing page and service positioning
- Services and pricing pages
- Project showcase packages with custom quote CTA
- Contact inquiry page
- Checkout flow with Razorpay-ready order creation API
- Responsive Next.js App Router frontend

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Production note
Set the Razorpay environment values before enabling live payments:

```bash
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Tech stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Razorpay
