import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
	return (
		<div className='px-8 py-7 sm:px-12'>
			<div className='flex flex-row items-center justify-between'>
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
				<div className='font-sfMono hidden flex-row items-center gap-8 sm:flex'>
					{NavbarLinks.map((link, index) => (
						<div
							className='decoration-primary group flex  flex-row items-center gap-1 text-sm'
							key={index}
						>
							<span className='text-primary'>{`0${index + 1}.`}</span>
							<Link
								className='text-textPrimary group-hover:text-primary transition-all duration-300 ease-in-out'
								href={link.href}
							>
								{link.title}
							</Link>
						</div>
					))}
					<div className='bg-primary group rounded-sm'>
						<button className='border-primary text-primary rounded-sm border-[1px] bg-[#0a192f] p-2 px-4 text-sm transition-all duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1'>
							Resume
						</button>
					</div>
				</div>
				<Sidebar />
			</div>
		</div>
	);
};

export default Navbar;
