import React from 'react';
import tierra from "../assets/tierra.jpg";
import agua from "../assets/agua.jpg";
import fuego from "../assets/fuego.jpg";
import aire from "../assets/aire.webp";
import {FormattedMessage} from 'react-intl';

const Card = () => {
    return (
        <section id="elementos">
            <h2><FormattedMessage id='elementTitle' defaultMessage="Elements"/></h2>
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src={tierra} alt="tierra" />
                    <div className="card-body">
                        <h5 className="card-title"><FormattedMessage id='tierra' defaultMessage="Earth"/></h5>
                        <p className="card-text"><FormattedMessage id='tierraTexto' defaultMessage="description"/></p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><FormattedMessage id='tierraFrase' defaultMessage="body and matter"/></small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={agua} alt="agua" />
                    <div className="card-body">
                        <h5 className="card-title"><FormattedMessage id='agua' defaultMessage="Water"/></h5>
                        <p className="card-text"><FormattedMessage id='aguaTexto' defaultMessage="description"/></p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><FormattedMessage id='aguaFrase' defaultMessage="emotionality"/></small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={fuego} alt="fuego" />
                    <div className="card-body">
                        <h5 className="card-title"><FormattedMessage id='fuego' defaultMessage="Fire"/></h5>
                        <p className="card-text"><FormattedMessage id='fuegoTexto' defaultMessage="description"/></p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><FormattedMessage id='fuegoFrase' defaultMessage="spirit and intuition"/></small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={aire} alt="aire" />
                    <div className="card-body">
                        <h5 className="card-title"><FormattedMessage id='aire' defaultMessage="Air"/></h5>
                        <p className="card-text"><FormattedMessage id='aireTexto' defaultMessage="description"/></p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><FormattedMessage id='aireFrase' defaultMessage="mind and intellect"/></small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;