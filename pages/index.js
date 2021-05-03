import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Gallery</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Lets build Hulu 2.0</h1>

			{/* Header */}
			<Header />
			{/* Nav */}

			{/* Results */}
		</div>
	);
}
