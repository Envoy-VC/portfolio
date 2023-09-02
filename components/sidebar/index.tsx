import React from 'react';
import { SidebarContext } from '@/pages';
import { AnimatePresence, motion } from 'framer-motion';

// Hooks
import { useOnClickOutside, useEventListener } from 'usehooks-ts';

// Components
import HamburgerButton from './hamburger-button';

const Sidebar = () => {
	const { menuOpen, setMenuOpen } = React.useContext(SidebarContext);

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			case 'Escape':
				setMenuOpen(false);
				break;

			default: {
				break;
			}
		}
	};

	useEventListener('keydown', onKeyDown);

	const wrapperRef = React.useRef<HTMLDivElement>(null);
	useOnClickOutside(wrapperRef, () => setMenuOpen(false));

	return (
		<div className='flex sm:hidden' ref={wrapperRef}>
			<AnimatePresence>
				{menuOpen && (
					<motion.aside
						initial={{ x: '100%' }}
						animate={{
							x: 0,
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.4,
							},
						}}
						exit={{
							x: '100%',
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.4,
							},
						}}
						className='fixed right-0 top-0 z-[11] h-screen w-full max-w-xs bg-[#112240]'
					></motion.aside>
				)}
			</AnimatePresence>
			<HamburgerButton
				isOpen={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
			/>
		</div>
	);
};

export default Sidebar;
