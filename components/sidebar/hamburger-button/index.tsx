import React from 'react';
import { motion, Variants, SVGMotionProps } from 'framer-motion';

interface Props {
	isOpen?: boolean;
	onClick?: () => void;
}

const HamburgerButton = ({ isOpen = false, onClick }: Props) => {
	const variant = isOpen ? 'opened' : 'closed';
	const top: Variants = {
		closed: {
			rotate: 0,
			translateY: 0,
			width: 36,
			x: 0,
			y: 0,
		},
		opened: {
			width: 34,
			rotate: 225,
			translateY: 11,
			x: -2,
		},
	};
	const center: Variants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};
	const bottom: Variants = {
		closed: {
			rotate: 0,
			translateY: 0,
			width: 26,
			x: 18,
			y: 20,
		},
		opened: {
			rotate: -225,
			translateY: -11,
			width: 35,
			x: 3,
			y: 20,
		},
	};

	const rectProps: SVGMotionProps<any> = {
		vectorEffect: 'non-scaling-stroke',
		initial: 'closed',
		animate: variant,
		transition: { ease: 'easeOut', duration: 0.3 },
	};

	return (
		<div onClick={onClick} className='z-[100]'>
			<motion.svg
				width='36'
				height='22'
				viewBox='0 0 36 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='my-2 ml-2'
			>
				<motion.rect
					width='36'
					height='2'
					rx='1'
					fill='#64FFDA'
					variants={top}
					{...rectProps}
				/>
				<motion.rect
					x='8'
					y='10'
					width='28'
					height='2'
					rx='1'
					fill='#64FFDA'
					variants={center}
					{...rectProps}
				/>
				<motion.rect
					height='2'
					rx='1'
					fill='#64FFDA'
					variants={bottom}
					{...rectProps}
				/>
			</motion.svg>
		</div>
	);
};
export default HamburgerButton;
