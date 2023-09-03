import React from 'react';
import Image from 'next/image';

// Data
import { AboutMeDetails } from '@/data';

// Images
import Avatar from '@/public/avatar.webp';

const About = () => {
	return (
		<section
			className='mx-auto my-64 max-w-screen-sm px-8 sm:my-96 xl:max-w-[800px] xl:px-0'
			id='#about'
		>
			<div className='flex h-full flex-col justify-center gap-6'>
				<div className='flex flex-row items-center gap-3 font-sfMono'>
					<span className='text-xl text-primary sm:text-2xl'>
						01.
					</span>
					<span className='mt-2 font-calibreSemibold text-2xl  text-textPrimary sm:text-4xl'>
						About me
					</span>
					<div className='ml-4 w-24 border-t-[1px] border-[#233554] sm:w-48' />
				</div>
				<div className='flex flex-col items-center gap-16 sm:items-start xl:flex-row'>
					<p className='max-w-md whitespace-pre-wrap font-calibreRegular text-xl leading-6 text-textSecondary order-1 sm:order-0'>
						{AboutMeDetails.about}
					</p>
					<div className='group h-fit w-fit order-0 sm:order-1 my-8'>
						<div className='rounded-md border-2 border-primary transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2'>
							<div className='w-fit -translate-x-3 -translate-y-3 rounded-md bg-[#42c7a8] transition-all duration-300 ease-in-out group-hover:-translate-x-7 group-hover:-translate-y-7'>
								<Image
									alt='Avatar'
									src={Avatar.src}
									height={288}
									width={300}
									className='max-h-80 rounded-md object-cover opacity-60 grayscale transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:filter-none'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
