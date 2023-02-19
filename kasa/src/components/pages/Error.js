import '../../scss/styles.scss';
import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Error = () => {
    return (
        <>
            <Header/>
            <div className='errorSection'>
                <h1>404 </h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <a href="/">Retourner sur la page d’accueil</a>
            </div>
            <Footer/>
        </>
    );
};

export default Error;