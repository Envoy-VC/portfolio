import React from 'react';
import { motion, Variants } from 'framer-motion';
import Typewriter from 'typewriter-effect';

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
		<section className='mx-auto my-64 max-w-screen-sm px-8 lg:max-w-screen-md xl:max-w-screen-lg xl:px-0'>
			<motion.div
				className='flex h-full flex-col justify-center gap-6'
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
						id='typewriter'
					>
						<Typewriter
							options={{
								strings: HeroSectionDetails.tagline,
								autoStart: true,
								loop: true,
							}}
						/>
					</motion.h2>
				</div>
				<motion.p
					className='max-w-lg font-calibreMedium text-[20px] text-textSecondary '
					variants={item}
				>
					{HeroSectionDetails.bio}
				</motion.p>
			</motion.div>
		</section>
	);
};

export default Hero;
