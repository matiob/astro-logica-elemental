import React from 'react';
import {FormattedMessage} from 'react-intl';

const Hero = () => {
    return (
        <section id="hero">
            <h1><FormattedMessage id='hero1' defaultMessage="Astro Logica"/><br /><FormattedMessage id='hero2' defaultMessage="Elemental"/></h1>
        </section>
    )
}

export default Hero;