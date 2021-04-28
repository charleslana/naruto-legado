import login from './login.js';
import carousel from './carousel.js';
import { listCharacters, listVillages, register } from './register.js';

const addEvent = () => {
    login();
    
    listCharacters();
    carousel();
    listVillages();
    register();
}

export default addEvent;