This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.






Helios-Fintec/
│── .gitignore
│── components.json
│── jsconfig.json
│── next.config.mjs
│── package-lock.json
│── package.json
│── postcss.config.mjs
│── README.md
│
│── public/
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── placeholder.svg
│   ├── vercel.svg
│   ├── window.svg
│   │
│   └── img/
│       └── icon/
│           ├── app-store.png
│           ├── apple.png
│           └── play-store.png
│
│── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   │
│   │   ├── auth/
│   │   │   └── login/
│   │   │       └── page.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── layout.jsx
│   │   │   ├── page.jsx
│   │   │   │
│   │   │   ├── credit-cards/
│   │   │   │   └── page.jsx
│   │   │   ├── insurance/
│   │   │   │   └── page.jsx
│   │   │   ├── investments/
│   │   │   │   └── page.jsx
│   │   │   ├── loans/
│   │   │   │   └── page.jsx
│   │   │   ├── mutual-fund/
│   │   │   │   ├── page.jsx
│   │   │   │   └── sip/
│   │   │   │       └── page.jsx
│   │   │   └── settings/
│   │   │       └── page.jsx
│   │   │
│   │   ├── mutual-fund/
│   │   │   ├── page.jsx
│   │   │   └── sip/
│   │   │       └── page.jsx
│   │   │
│   │   ├── onboarding/
│   │   │   └── page.jsx
│   │   └── register/
│   │       └── page.jsx
│   │
│   ├── components/
│   │   ├── chart/
│   │   │   ├── candle-stick-chart.jsx
│   │   │   ├── loan-repayment-chart.jsx
│   │   │   ├── mutual-fund-performance-chart.jsx
│   │   │   ├── portfolio-allocation-chart.jsx
│   │   │   └── stock-chart.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── dashboard.jsx
│   │   │   │
│   │   │   ├── CreditCards/
│   │   │   │   └── CreditCards.jsx
│   │   │   ├── Insurance/
│   │   │   │   └── Insurance.jsx
│   │   │   ├── Investments/
│   │   │   │   └── Investments.jsx
│   │   │   ├── Loans/
│   │   │   │   └── Loans.jsx
│   │   │   ├── MutualFund/
│   │   │   │   ├── MutualFund.jsx
│   │   │   │   └── SIP/
│   │   │   │       └── Sip.jsx
│   │   │   └── Settings/
│   │   │       └── Settings.jsx
│   │   │
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Layout/
│   │   │   └── DashboardLayout.jsx
│   │   ├── login/
│   │   │   └── Login.jsx
│   │   ├── Navbar/
│   │   │   └── HomeNav.jsx
│   │   ├── Onboarding/
│   │   │   ├── FewMoreDetails.jsx
│   │   │   ├── Kyc.jsx
│   │   │   └── Pan.jsx
│   │   ├── Register/
│   │   │   ├── OtpModal.jsx
│   │   │   └── Register.jsx
│   │   └── ui/
│   │       ├── avatar.jsx
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── calendar.jsx
│   │       ├── card.jsx
│   │       ├── checkbox.jsx
│   │       ├── dialog.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── pagination.jsx
│   │       ├── popover.jsx
│   │       ├── progress.jsx
│   │       ├── radio-group.jsx
│   │       ├── select.jsx
│   │       ├── separator.jsx
│   │       ├── sheet.jsx
│   │       ├── switch.jsx
│   │       ├── tabs.jsx
│   │       └── tooltip.jsx
│   │
│   ├── lib/
│   │   ├── apiClient.js
│   │   └── utils.js
│   │
│   └── store/
│       ├── ReduxProvider.jsx
│       ├── store.js
│       └── features/
│           ├── auth-slice.js
│           └── mutualFund-slice.js
