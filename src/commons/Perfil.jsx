import React from 'react';
import {FormattedMessage} from 'react-intl';

const Perfil = () => {
    return (
        <section id="perfil">
            <div className="container">
                <div className="img-container"></div>
                <div className="texto">
                    <h2><FormattedMessage id='perfil' defaultMessage="About me"/> <span className="color-acento">Andrés</span></h2>
                    <p className='aboutMe'><FormattedMessage id='aboutMe' defaultMessage="My name is Andres, I'm from Argentina and I love to help you through astrology"/></p>
                </div>
            </div>
        </section>
    )
}

export default Perfil;