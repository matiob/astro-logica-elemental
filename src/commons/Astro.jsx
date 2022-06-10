import React from 'react';
import { FormattedMessage } from 'react-intl';

const Astro = () => {
  return (
    <section id="caracteristicas">
      <div class="container">
        <div class="img-container"></div>
        <div class="texto">
          <h2><span class="color-acento"><FormattedMessage id='astro' defaultMessage="Astrology" /> </span> <FormattedMessage id='astro2' defaultMessage="" /></h2>
          <p>
            <FormattedMessage id='astroTexto' defaultMessage="description" />
            <br/>
            <span class="color-acento">Andrés</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Astro;