import React from 'react';
import { SidebarContext } from './_app';
import {
	Navbar,
	SocialLinksCover,
	EmailContactCover,
	Sidebar,
} from '@/components';
import { Hero, About } from '@/sections';

const Home = () => {
	const { menuOpen } = React.useContext(SidebarContext);
	return (
		<>
			<Sidebar />
			<SocialLinksCover />
			<EmailContactCover />
			<div className={`${menuOpen ? 'blur-sm' : 'blur-none'}`}>
				<Navbar />
				<Hero />
				<About />
			</div>
		</>
	);
};

export default Home;
