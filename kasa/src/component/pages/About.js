import '../../scss/styles.scss';
import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Banner from '../layout/Banner';

const About = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <h1>A propos</h1>
            <br/>
            <p>Paragraphe1</p>
            <br/>
            <p>Paragraphe2</p>
            <Footer/>
        </div>
    );
};

export default About;