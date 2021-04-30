import addChangeNameSubmit from './changeName.js';
import { showAvatar } from './changeAvatar.js';
import { showCharacter } from './changeCharacter.js';
import { addChangeMural } from './mural.js';
import { showSound } from './sound.js';
import addChangePasswordSubmit from './changePassword.js';
import { getStorage } from './storage.js';
import { showNinjaStyle, addChangeNinjaStyleSubmit } from './changeNinjaStyle.js';

const settings = () => {
    showSound();

    addChangePasswordSubmit();

    addChangeNameSubmit();

    showAvatar();

    showCharacter();

    addChangeMural();

    myEmail();

    showNinjaStyle();
    addChangeNinjaStyleSubmit();
}

const myEmail = () => {
    const email = document.getElementById('myEmail');
    if (email) {
        email.value = getStorage('email');
    }
}

export default settings;