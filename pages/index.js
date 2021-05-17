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

			<h1>Lets build Gallery</h1>
			{/* Header */}

			<main>
				<ClientOnly>
					<Users />
				</ClientOnly>
			</main>
		</div>
	);
}
