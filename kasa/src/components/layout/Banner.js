import React from 'react';

const Banner = ({showTxt}) => {

	return (
		<section className={showTxt ? 'banner banner__about' : 'banner banner__hero'}>
			{!showTxt && <h1>Chez vous, <br/>partout et ailleurs</h1>}
		</section>
	)
}
export default Banner;