import translateEnglish from './english.js';
import translatePortuguese from './portuguese.js';
import { getStorage } from '../assets/js/storage.js';

const getTranslations = getStorage('language');

const translate = getTranslations === 'pt' || !getTranslations ? translatePortuguese : translateEnglish

const language = () => {
    home();
}

const home = () => {
    const homeWelcome = document.querySelector('main[page-now="home"] > div > div > h3');
    if (homeWelcome) {
        homeWelcome.innerText = translate.HOME_WELCOME;
    }
}

export default language;