import { login, showLogin } from './login.js';
import carousel from './carousel.js';
import { listCharacters, listVillages, register } from './register.js';
import logout from './logout.js';

const addEvent = (loadPage) => {
    login();
    showLogin();

    listCharacters();
    carousel();
    listVillages();
    register();

    logout(loadPage);
}

export default addEvent;