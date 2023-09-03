import React from 'react';

import { Navbar, SocialLinksCover } from '@/components';
import { Hero } from '@/sections';

// Sidebar Context
export const SidebarContext = React.createContext<{
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	menuOpen: false,
	setMenuOpen: () => {},
});

const Home = () => {
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
	return (
		<SidebarContext.Provider value={{ menuOpen, setMenuOpen }}>
			<SocialLinksCover />
			<Navbar />
			<Hero />
		</SidebarContext.Provider>
	);
};

export default Home;
