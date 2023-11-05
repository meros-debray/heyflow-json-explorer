This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Explanations

This application displays a correctly formatted JSON object. The user can select the keys from this JSON object to return the key’s path and value.

## How does it work?

The JSON object is loaded in `page.tsx` and passed to `DisplayJson.tsx` to be displayed.

The component `DisplayJson.tsx` loops through the JSON object with the function `formatJson()` and, if enconters an object (or an array), loops througs this object with a recursive call to the function `formatJson()`, until a simple value (string, number, boolean or null) is found.

When a simple value is found, The value is displayed thanks to the componnent `JsonElement.tsx`. The key of this value is clickable and displays the path and the value of the key in the `DisplayProperty.tsx` component.
