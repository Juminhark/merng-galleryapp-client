# merng-galleryapp-client

- [nextjs](https://nextjs.org/)
- [tailwindcss](https://tailwindcss.com/)

## Getting Started

```sh
> yarn create next-app
```

## [Setting up Tailwind CSS in a Next.js project](https://tailwindcss.com/docs/guides/nextjs)

```sh
> yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

> npx tailwindcss init -p
```

```js
// tailwind.config.js
mode: 'jit', //: just in time
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
