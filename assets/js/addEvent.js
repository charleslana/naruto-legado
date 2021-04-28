import login from './login.js';
import carousel from './carousel.js';
import { listCharacters, listVillages } from './register.js';

const addEvent = () => {
    login();
    listCharacters();
    carousel();
    listVillages();
}

export default addEvent;