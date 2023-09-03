import '@/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';

import { Loader } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = React.useState<boolean>(false);

	React.useEffect(() => {
		setTimeout(() => {
			setIsMounted(true);
		}, 2000);
	}, [isMounted]);

	return isMounted ? <Component {...pageProps} /> : <Loader />;
}
