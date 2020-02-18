import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const currentLang = localStorage.getItem('i18nextLngCngToken');

if (localStorage.getItem('i18nextLngCngToken') === null) {
    localStorage.setItem('i18nextLngCngToken', 'GB');
}

i18n.use(Backend)

    .use(initReactI18next)

    .init({
        fallbackLng: currentLang || 'GB',
        lng: currentLang || 'GB',
        debug: true,

        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;
