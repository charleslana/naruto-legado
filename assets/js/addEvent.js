import { login, showLogin } from './login.js';
import carousel from './carousel.js';
import { listCharacters, listVillages, register } from './register.js';
import logout from './logout.js';
import { navDetails, navMenu, navChat } from './nav.js';

export const addEvent = (loadPage) => {
    login();
    showLogin();

    listCharacters();
    carousel();
    listVillages();
    register();

    logout(loadPage);
}

export const preEvent = () => {
    navDetails();
    navMenu();
    navChat();
}