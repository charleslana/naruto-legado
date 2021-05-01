import translateEnglish from './english.js';
import translatePortuguese from './portuguese.js';
import { getStorage, saveStorage } from '../assets/js/storage.js';

export const addLanguageSubmit = () => {
    const languagePortuguese = document.getElementById('language-portuguese');
    if (languagePortuguese) {
        languagePortuguese.addEventListener('click', () => {
            saveStorage('language', 'pt');
            language();
        });
    }

    const languageEnglish = document.getElementById('language-english');
    if (languageEnglish) {
        languageEnglish.addEventListener('click', () => {
            saveStorage('language', 'en');
            language();
        });
    }
}

export const language = () => {
    const getTranslations = getStorage('language');
    const translate = getTranslations === 'pt' || !getTranslations ? translatePortuguese : translateEnglish;
    
    const iconLanguage = document.getElementById('icon-language');
    if (iconLanguage && getTranslations) {
        iconLanguage.src = `assets/img/languages/${getTranslations}.png`;
    }

    home(translate);
}

const home = (translate) => {
    const homeWelcome = document.querySelector('main[page-now="home"] > div > div > h3');
    if (homeWelcome) {
        homeWelcome.innerText = translate.HOME_WELCOME;
    }

    const homeDetailsA = document.querySelector('main[page-now="home"] > div > div > div:nth-child(3) > div:nth-child(2) > p:nth-child(1)');
    if (homeDetailsA) {
        homeDetailsA.innerText = translate.HOME_DETAILS_A;
    }

    const homeDetailsB = document.querySelector('main[page-now="home"] > div > div > div:nth-child(3) > div:nth-child(2) > p:nth-child(2)');
    if (homeDetailsB) {
        homeDetailsB.innerText = translate.HOME_DETAILS_B;
    }

    const homeDetailsC = document.querySelector('main[page-now="home"] > div > div > div:nth-child(3) > div:nth-child(2) > p:nth-child(3)');
    if (homeDetailsC) {
        homeDetailsC.innerText = translate.HOME_DETAILS_C;
    }
}