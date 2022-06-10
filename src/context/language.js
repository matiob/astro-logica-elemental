import React, {useState} from 'react';
import english from '../language/english.json';
import spanish from '../language/spanish.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
	let localeDefault;
	let messageDefault;
	const lang = localStorage.getItem('lang');

	if(lang){
		localeDefault = lang

		if(lang === 'spanish'){
			messageDefault = spanish;
		} else if(lang === 'english'){
			messageDefault = english
		} else {
			localeDefault = 'english'
			messageDefault = english
		}
	}

	const [mensajes, setMensajes] = useState(messageDefault);
	const [locale, setLocale] = useState(localeDefault);

	const setLanguage  = (lenguaje) => {
		switch (lenguaje){
			case 'spanish':
				setMensajes(spanish);
				setLocale('spanish');
				localStorage.setItem('lang', 'spanish');
				break;
			case 'english':
				setMensajes(english);
				setLocale('english');
				localStorage.setItem('lang', 'english');
				break;
			default:
				setMensajes(english);
				setLocale('english');
				localStorage.setItem('lang', 'english');
		}
	}

	return (
		<langContext.Provider value={{setLanguage : setLanguage }}>
			<IntlProvider locale={locale} messages={mensajes}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
 
export {LangProvider, langContext};