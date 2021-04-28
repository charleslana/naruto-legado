import login from './login.js';
import {carousel, listCharacters} from './carousel.js';

const addSubmit = () => {
    login();
    listCharacters();
    carousel();
}

export default addSubmit;