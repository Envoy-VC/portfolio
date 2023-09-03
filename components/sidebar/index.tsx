import React from 'react';
import { useRouter } from 'next/router';
import { SidebarContext } from '@/pages/_app';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import HamburgerButton from './hamburger-button';

// Hooks
import { useOnClickOutside, useEventListener } from 'usehooks-ts';

// Data
import { NavbarLinks } from '@/data';

const Sidebar = () => {
	const router = useRouter();
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

	const container: Variants = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item: Variants = {
		hidden: { y: -30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				bounce: 0.4,
			},
		},
	};

	React.useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [menuOpen]);

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
								delay: 0.5,
							},
						}}
						className='fixed right-0 top-0 z-[11] h-screen w-full max-w-[284px] bg-[#112240]'
					>
						<>
							<div className='flex justify-end px-8 py-7 sm:px-12'>
								<HamburgerButton
									isOpen={menuOpen}
									onClick={() => setMenuOpen(!menuOpen)}
								/>
							</div>
							<motion.div
								className='flex h-full flex-col items-center justify-center gap-6'
								variants={container}
								initial='hidden'
								animate='visible'
							>
								{NavbarLinks.map((link, index) => (
									<motion.div
										key={index}
										className='flex flex-col items-center gap-2 font-sfMono text-[1rem]'
										onClick={() => {
											setMenuOpen(false);
											setTimeout(() => {
												router.push(link.href);
											}, 500);
										}}
										variants={item}
										exit={{
											y: -30 + index * 5,
											opacity: 0,
											transition: {
												delay: 0.1 * index,
												duration: 0.1,
											},
										}}
									>
										<div className=' text-primary'>{`0${
											index + 1
										}.`}</div>
										<div className='text-lg text-textPrimary'>
											{link.title}
										</div>
									</motion.div>
								))}
								<motion.div
									className='group my-8 rounded-md bg-primary'
									variants={item}
									exit={{
										y: -50,
										opacity: 0,
										transition: {
											delay: 0.4,
											duration: 0.1,
										},
									}}
								>
									<button className='rounded-sm border-[1px] border-primary bg-[#112240] p-3 px-10 text-[1rem] text-primary transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'>
										Resume
									</button>
								</motion.div>
							</motion.div>
						</>
					</motion.aside>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Sidebar;
