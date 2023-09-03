import { NavbarLink } from '@/types';

export const NavbarLinks: NavbarLink[] = [
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

export const HeroSectionDetails = {
	name: 'Vedant Chainani.',
	tagline: ['I build awesome web3 projects.', 'I write technical articles.'],
	bio: `I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.`,
};

export const AboutMeDetails = {
	about: `Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!\n
Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.

Here are a few technologies I've been working with recently:`,
	skills: [
		'Next.js',
		'TypeScript',
		'Tailwind CSS',
		'Web3',
		'Ethereum',
		'GraphQL',
	],
};
