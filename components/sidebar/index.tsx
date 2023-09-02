import React from 'react';

const Sidebar = () => {
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

    return <div className='flex sm:hidden'>
        <button></button>
    </div>;
};

export default Sidebar;
