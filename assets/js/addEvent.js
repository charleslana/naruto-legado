import { login, showLogin } from './login.js';
import carousel from './carousel.js';
import { listCharacters, listVillages, register } from './register.js';
import logout from './logout.js';
import { navDetails, navMenu, navChat } from './nav.js';
import { modalDailyReward } from './modal.js';

export const addEvent = (loadPage) => {
    login();
    showLogin();

    listCharacters();
    carousel();
    listVillages();
    register();

    logout(loadPage);

    modalDailyReward();

    //remove
    const goToPage = document.getElementById('go-to-page');
    if (goToPage) {
        goToPage.addEventListener('click', () => {
            loadPage('config');
        });
    }
}

export const preEvent = () => {
    navDetails();
    navMenu();
    navChat();
}