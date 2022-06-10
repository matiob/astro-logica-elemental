import React from 'react';
import {FormattedMessage} from 'react-intl';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <p><FormattedMessage id='frase' defaultMessage=""/></p>
            <p>&copy; matiob 2022</p>
        </div>
    </footer>
  )
}

export default Footer;