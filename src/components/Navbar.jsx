import React, { useContext } from 'react';
import es from "../assets/spain.png";
import en from "../assets/united-kingdom.png";
import {FormattedMessage} from 'react-intl';
import {langContext} from '../context/language';
import instagram  from '../assets/instagram.svg';

const Navbar = () => {
  const idioma = useContext(langContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#hero"><p className="logo">Astro Logica Elemental</p></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#perfil"><FormattedMessage id='profile' defaultMessage="About me"/></a>
          <a className="nav-item nav-link" href="#elementos"><FormattedMessage id='elements' defaultMessage="Elements"/></a>
          <a className="nav-item nav-link" href="#caracteristicas"><FormattedMessage id='caracteristics' defaultMessage="Astrology"/></a>
          <a className="nav-item nav-link" href="#contact"><FormattedMessage id='contact' defaultMessage="Contact me"/></a>
          <div className="banderas">
            <button onClick={() => idioma.setLanguage('spanish')}><img src={es} alt="spanish" /></button>
            <button onClick={() => idioma.setLanguage('english')}><img src={en} alt="english" /></button>
          </div>
        </div>
      </div>
      <a href="https://www.instagram.com/astro_logica_elemental/">
        instagram <img src={instagram} alt="instagram"/>
      </a>
    </nav>
  )
}

export default Navbar;