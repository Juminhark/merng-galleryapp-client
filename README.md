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

## [tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

```sh
> yarn add @heroicons/react
```

## [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide)

```sh
> yarn add tailwind-scrollbar-hide
```

```js
// tailwind.config.js
plugins: [require('tailwind-scrollbar-hide')];

// Nav.js

import requests from '../utils/requests';

function Nav() {
	return (
		<nav>
			<div className="scrollbar-hide">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2 key={key}>{title}</h2>
				))}
			</div>
		</nav>
	);
}

export default Nav;
```

## [horizontally scroll](https://tailwindcss.com/docs/overflow#scroll-horizontally-if-needed)

- 움직일때는 shift 누르고 마우스 scroll

```js
<div class="overflow-x-scroll ...">QrLmmW69vMQD...</div>
```
