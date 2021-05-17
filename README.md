# merng-galleryapp-client

## Creating project

```sh
> npx create-next-app my-project
> cd my-project
```

## Setting up Tailwind CSS && Include Tailwind in your CSS

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

/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## apollo-graphql client

```js
// apollo-client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache(),
});

export default client;
```

```js
// _app.js
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
```
