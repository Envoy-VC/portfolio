import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	useScroll,
	motion,
	Variants,
	useMotionValueEvent,
} from 'framer-motion';

// Components
import Sidebar from '../sidebar';

// Assets
import Hexagon from '@/public/hexagon.png';
import Logo from '@/public/logo.png';

// Types
interface NavbarLink {
	title: string;
	href: string;
}

const Navbar = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = React.useState<boolean>(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > 100 && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const variants: Variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: '-100%' },
	};

	return (
		<motion.nav
			className='sticky top-0 flex w-full flex-row items-center justify-between px-8 py-7 sm:px-12 bg-overlay'
			variants={variants}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ ease: 'easeInOut', duration: 0.4 }}
		>
			<Link
				className='group relative flex select-none items-center justify-center'
				href='/'
			>
				<Image
					src={Hexagon}
					width={48}
					height={48}
					alt='hexagon'
					className='transition-all duration-300 ease-in-out group-hover:scale-[96%]'
				/>
				<Image
					src={Logo}
					width={48}
					height={48}
					alt='logo'
					className='absolute transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'
				/>
			</Link>
			<div className='hidden flex-row items-center gap-8 font-sfMono sm:flex'>
				{NavbarLinks.map((link, index) => (
					<div
						className='group flex flex-row  items-center gap-1 text-sm decoration-primary'
						key={index}
					>
						<span className='text-primary'>{`0${index + 1}.`}</span>
						<Link
							className='text-textPrimary transition-all duration-300 ease-in-out group-hover:text-primary'
							href={link.href}
						>
							{link.title}
						</Link>
					</div>
				))}
				<div className='group rounded-sm bg-primary'>
					<button className='rounded-sm border-[1px] border-primary bg-[#0a192f] p-2 px-4 text-sm text-primary transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'>
						Resume
					</button>
				</div>
			</div>
			<Sidebar />
		</motion.nav>
	);
};

const NavbarLinks: NavbarLink[] = [
	{
		title: 'About',
		href: '#about',
	},
	{
		title: 'Blog',
		href: '#blog',
	},
	{
		title: 'Work',
		href: '#work',
	},
	{
		title: 'Contact',
		href: '#contact',
	},
];

export default Navbar;
