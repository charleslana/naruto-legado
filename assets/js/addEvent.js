import { login, showLogin } from './login.js';
import carousel from './carousel.js';
import { listCharacters, listVillages, register } from './register.js';
import logout from './logout.js';
import { navDetails, navMenu, navChat } from './nav.js';
import { modalDailyReward } from './modal.js';
import settings from './settings.js';
import { showUserData } from './storage.js';
import news from './news.js';
import language from '../../language/index.js';

export const addEvent = (loadPage) => {
    language();
    login();
    showLogin();

    listCharacters();
    carousel();
    listVillages();
    register();

    showUserData();
    logout(loadPage);
    
    news();
    modalDailyReward();

    settings();

    M.updateTextFields();

    //remove
    const goToPage = document.getElementById('go-to-page');
    if (goToPage) {
        goToPage.addEventListener('click', () => {
            loadPage('settings');
        });
    }
}

export const preEvent = () => {
    navDetails();
    navMenu();
    navChat();
}