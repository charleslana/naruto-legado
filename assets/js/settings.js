import addChangeNameSubmit from './changeName.js';
import { showAvatar, addChangeAvatarSubmit } from './changeAvatar.js';
import { showCharacter } from './changeCharacter.js';
import { addChangeMural } from './mural.js';
import { showSound } from './sound.js';
import addChangePasswordSubmit from './changePassword.js';
import { getStorage } from './storage.js';
import { showNinjaStyle, addChangeNinjaStyleSubmit } from './changeNinjaStyle.js';
import { showVillage, addChangeVillageSubmit } from './changeVillage.js';

const settings = () => {
    showSound();

    addChangePasswordSubmit();

    addChangeNameSubmit();

    myEmail();

    showNinjaStyle();
    addChangeNinjaStyleSubmit();

    showVillage();
    addChangeVillageSubmit();

    showAvatar();
    addChangeAvatarSubmit();

    showCharacter();

    addChangeMural();
}

const myEmail = () => {
    const email = document.getElementById('myEmail');
    if (email) {
        email.value = getStorage('email');
    }
}

export default settings;