import React from 'react';
import { SidebarContext } from './_app';
import {
	Navbar,
	SocialLinksCover,
	EmailContactCover,
	Sidebar,
	Attribution,
} from '@/components';
import { Hero, About, Blog, Work, MoreProjects, Contact } from '@/sections';

const Home = () => {
	const { menuOpen } = React.useContext(SidebarContext);
	const [showBlurEffect, setShowBlurEffect] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
			setShowBlurEffect(true);
		} else {
			document.body.style.overflow = 'unset';
			setTimeout(() => {
				setShowBlurEffect(false);
			}, 500);
		}
	}, [menuOpen]);

	return (
		<>
			<Sidebar />
			<SocialLinksCover />
			<EmailContactCover />
			<div className={`${showBlurEffect ? 'blur-sm' : 'blur-none'}`}>
				<Navbar />
				<Hero />
				<About />
				<Blog />
				<Work />
				<MoreProjects />
				<Contact />
				<Attribution />
			</div>
		</>
	);
};

export default Home;
