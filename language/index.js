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

    modalTranslate(getTranslations);
    home(translate);
}

const modalTranslate = (getTranslations) => {
    const elements = document.getElementById('modal-language');
    if (elements && !getTranslations) {
        let instance = M.Modal.init(elements, {
            endingTop: '13%',
            dismissible: false
        });
        instance.open();
    }

    const addSubmitModal = document.getElementById('form-change-language');
    if (addSubmitModal) {
        addSubmitModal.addEventListener('submit', (event) => {
            event.preventDefault();
            const chooseLanguage = document.querySelector('input[name="groupLanguage"]:checked').value;
            saveStorage('language', chooseLanguage);
            language();
            let instance = M.Modal.getInstance(elements);
            instance.close();
        });
    }
}

const home = (translate) => {
    let element;

    const links = [].slice.call(document.querySelectorAll('main[page-now="home"] > div > div a'));
    if (links) {
        links.map((link) => {
            link.innerText = translate.HOME_LINK;
        });
    }

    element = document.querySelector('main[page-now="home"] > div > div > h3');
    if (element) {
        element.innerText = translate.HOME_WELCOME;
    }

    element = document.querySelector('main[page-now="home"] > div > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(1)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_A;
    }

    element = document.querySelector('main[page-now="home"] > div > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_B;
    }

    element = document.querySelector('main[page-now="home"] > div > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_C;
    }

    element = document.querySelector('main[page-now="home"] > div > div > p');
    if (element) {
        element.innerText = translate.HOME_DETAILS_D;
    }

    element = document.querySelector('main[page-now="home"] > div > div p:nth-child(6)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_E;
    }

    element = document.querySelector('main[page-now="home"] > div > div p:nth-child(9)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_F;
    }

    element = document.querySelector('main[page-now="home"] > div > div p:nth-child(12)');
    if (element) {
        element.innerText = translate.HOME_DETAILS_G;
    }
}