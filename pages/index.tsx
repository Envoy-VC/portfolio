import React from 'react';

import { Navbar } from '@/components';

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
			<Navbar />
			<div>aaaaaaaaaaaaaaaaa</div>
		</SidebarContext.Provider>
	);
};

export default Home;
