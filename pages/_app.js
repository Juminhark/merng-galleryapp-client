// apollo-graphql
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
// tailwind-css
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
