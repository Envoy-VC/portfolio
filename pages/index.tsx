import React from 'react';

import { Navbar } from '@/components';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const Home = () => {
	return (
		<div className={``}>
			<Navbar />
		</div>
	);
};

export default Home;
