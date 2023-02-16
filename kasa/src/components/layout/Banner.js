import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Banner = () => {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
	}, [])

	return (
		<section className={aboutPage ? 'banner banner__about' : 'banner banner__hero'}>
			{!aboutPage && <h1>Chez vous, partout et ailleurs</h1>}
		</section>
	)
}
export default Banner;