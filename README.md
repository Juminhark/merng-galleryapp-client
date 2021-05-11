# merng-galleryapp-client

## Creating project

```sh
> npx create-next-app my-project
> cd my-project
```

## Setting up Tailwind CSS

```sh
> npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
> npx tailwindcss init -p
```

```js
// tailwind.config.js
module.exports = {
	mode: 'jit', //: just in time
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

// postcss.config.js
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};
```

## Include Tailwind in your CSS

```js
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
