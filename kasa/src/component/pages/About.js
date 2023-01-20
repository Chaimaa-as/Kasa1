import React from 'react';
import Logo from '../layout/Logo'
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';

const About = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Header/>
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