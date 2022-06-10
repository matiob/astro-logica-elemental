import React from 'react';
import {FormattedMessage} from 'react-intl';

const Form = () => {
    return (
        <section id="contact" className="contactForm">
            <div className="formulario">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2><FormattedMessage id='consult' defaultMessage="Consult me"/> </h2>
                            <form action="https://formspree.io/f/mrgjrdwk" method="post" className="form">
                                <label for="nick">
                                    <div className="input-group mb-4">
                                        <span className="input-group-text" id="basic-addon1"><FormattedMessage id='name' defaultMessage="Name"/></span>
                                        <input id="nick" type="text" name="name" className="form-control"
                                            placeholder="nombre completo" aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                </label>

                                <label for="mail">
                                    <div className="input-group mb-4">
                                        <span className="input-group-text" id="basic-addon1"><FormattedMessage id='email' defaultMessage="Email"/></span>
                                        <input id="mail" type="email" name="email" className="form-control" placeholder="email"
                                            aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </label>

                                <br />
                                <label for="floatingTextarea" className='cuerpoMensaje'>
                                    <div className="form-floating">
                                        <span className="input-group-text" id="basic-addon1"><FormattedMessage id='message' defaultMessage="Message"/></span>
                                        <textarea placeholder="Dime como puedo ayudarte" id="floatingTextarea"
                                            name="message" rows="5" cols="96" className='textArea'></textarea>
                                    </div>
                                </label>
                                <div className='submit'>
                                    <button type="submit"><FormattedMessage id='send' defaultMessage="Send" className="buttonForm"/></button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form;