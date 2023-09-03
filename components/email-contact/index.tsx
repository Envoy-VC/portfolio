import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const EmailContactCover = () => {
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
			className='fixed bottom-0 right-0 z-[101] hidden md:flex'
			initial='hidden'
			animate='visible'
			variants={container}
		>
			<div className='flex w-fit flex-col items-center gap-6 px-16'>
				<Link
					className='absolute bottom-52 rotate-90 text-textSecondary transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-primary'
					href='mailto:vedantchainani1084@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					vedantchainani1084@gmail.com
				</Link>
				<div className='h-20 border-r-[1px] border-textSecondary' />
			</div>
		</motion.div>
	);
};

export default EmailContactCover;
