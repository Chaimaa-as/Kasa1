import '../../scss/styles.scss';
import React from 'react';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

const Error = () => {
    return (
        <div>
            
            <Header/>
            <h1>404</h1>
            <br/>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <br/>
            <p>Retourner sur la page d’accueil</p>
            <Footer/>
        </div>
    );
};

export default Error;