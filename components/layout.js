import Head from 'next/head';
import Header from './Header';
import Link from 'next/link';
import { useLayoutEffect } from 'react';

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
