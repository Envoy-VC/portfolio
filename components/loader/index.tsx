import React from 'react';
import { motion, Variants } from 'framer-motion';

const Loader = () => {
	const hexagon: Variants = {
		hidden: {
			pathLength: 0,
		},
		visible: {
			pathLength: 1,
			transition: { duration: 2, ease: 'easeInOut' },
		},
	};

	const text: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 1,
			},
		},
	};
	return (
		<div className='flex h-screen items-center justify-center'>
			<motion.svg
				width='348'
				height='100'
				viewBox='0 0 348 400'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<motion.path
					d='M230.032 136.956L228.268 155.184H143.4V193.796H204.16L202.592 212.024H143.4V253.576H229.836L228.072 272H123.8V136.956H230.032Z'
					fill='#64FFDA'
					variants={text}
					initial='hidden'
					animate='visible'
				/>
				<motion.path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M347.205 100L174 0L0.794922 100V300L174 400L347.205 300V100ZM331.617 109L174 18L16.3834 109V291L174 382L331.617 291V109Z'
					fill='#64FFDA'
					variants={hexagon}
				/>
			</motion.svg>
		</div>
	);
};

export default Loader;
