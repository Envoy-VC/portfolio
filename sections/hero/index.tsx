import React from 'react';
import { motion, Variants } from 'framer-motion';

// Data
import { HeroSectionDetails } from '@/data';

const Hero = () => {
	const container: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 1,
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

	return (
		<section
			className='mx-auto h-[70vh] max-w-screen-lg px-8 sm:px-0'
			id='#'
		>
			<motion.div
				className='flex h-full flex-col justify-center gap-5'
				variants={container}
				initial='hidden'
				animate='visible'
			>
				<motion.span
					className='font-sfMono font-medium text-primary'
					variants={item}
				>
					Hi, my name is
				</motion.span>
				<div className='flex flex-col font-calibreMedium text-[48px] sm:text-[80px]'>
					<motion.h1
						className='font-black leading-[1.1] text-textPrimary'
						variants={item}
					>
						{HeroSectionDetails.name}
					</motion.h1>
					<motion.h2
						className='font-black leading-[1.1] text-textSecondary'
						variants={item}
					>
						{HeroSectionDetails.tagline.at(0)}
					</motion.h2>
				</div>
				<motion.p
					className='max-w-lg font-calibreMedium text-lg text-textSecondary '
					variants={item}
				>
					{HeroSectionDetails.bio}
				</motion.p>
			</motion.div>
		</section>
	);
};

export default Hero;
