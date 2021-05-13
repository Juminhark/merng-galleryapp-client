import Head from 'next/head';
import ClientOnly from '../components/ClientOnly';
import Users from '../components/Users';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
				<ClientOnly>
					<Users />
				</ClientOnly>
			</main>
		</div>
	);
}
