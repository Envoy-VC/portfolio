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
			<div className='relative w-full'>
				<Navbar />
				<div className={`${menuOpen && 'blur-sm'} h-[100rem]`}>
					aaaaaaaaaaaaaaaaa
				</div>
			</div>
		</SidebarContext.Provider>
	);
};

export default Home;
