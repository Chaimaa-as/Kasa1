import '../../scss/styles.scss';
import React from 'react';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

const Error = () => {
    return (
        <div>
            
            <Header/>
            <div className='errorSection'>
                <h1>404 </h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <p><a href="/">Retourner sur la page d’accueil</a></p>
                
            </div>
            <Footer/>
        </div>
    );
};

export default Error;