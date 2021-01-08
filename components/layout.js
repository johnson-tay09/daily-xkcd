import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Daily XKCD</title>
			</Head>

			<Header />

			<main>{children}</main>
		</div>
	);
}
