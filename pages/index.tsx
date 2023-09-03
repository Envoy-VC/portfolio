import React from 'react';

import { SocialLinksCover } from '@/components';
import { Hero, About } from '@/sections';

const Home = () => {
	return (
		<>
			<SocialLinksCover />
			<Hero />
			<About />
		</>
	);
};

export default Home;
