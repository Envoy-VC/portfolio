import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

// Icons
import { IconType } from 'react-icons';
import {
	PiGithubLogo,
	PiLinkedinLogo,
	PiTwitterLogo,
	PiDiscordLogo,
	PiFileText,
} from 'react-icons/pi';

interface ISocialLinkItem {
	name: string;
	Icon: IconType;
	href: string;
}
const SocialLinks: ISocialLinkItem[] = [
	{
		name: 'Github',
		Icon: PiGithubLogo,
		href: 'https://github.com/Envoy-VC',
	},
	{
		name: 'LinkedIn',
		Icon: PiLinkedinLogo,
		href: 'https://www.linkedin.com/in/vedant-chainani',
	},
	{
		name: 'Twitter',
		Icon: PiTwitterLogo,
		href: 'https://twitter.com/Envoy_1084',
	},
	{
		name: 'Discord',
		Icon: PiDiscordLogo,
		href: 'https://discordapp.com/users/665550588582297622',
	},
	{
		name: 'Blog',
		Icon: PiFileText,
		href: 'https://blog.vedantc.dev',
	},
];

const SocialLinksItem = ({ name, Icon, href }: ISocialLinkItem) => {
	return (
		<Link
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			title={name}
		>
			<Icon
				className='cursor-pointer font-medium text-textSecondary transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-primary'
				size={24}
			/>
		</Link>
	);
};

const SocialLinksCover = () => {
	const container: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 2,
			},
		},
	};

	return (
		<motion.div
			className='fixed bottom-0 z-[101] hidden md:flex'
			initial='hidden'
			animate='visible'
			variants={container}
		>
			<div className='left-0 flex flex-col items-center gap-6 px-16'>
				<div className='flex flex-col items-center gap-5'>
					{SocialLinks.map((link, index) => (
						<SocialLinksItem key={index} {...link} />
					))}
				</div>
				<div className='h-20 border-r-[1px] border-textSecondary' />
			</div>
		</motion.div>
	);
};

export default SocialLinksCover;
