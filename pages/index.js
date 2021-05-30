import Head from 'next/head';
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
				<Users />
			</main>
		</div>
	);
}
