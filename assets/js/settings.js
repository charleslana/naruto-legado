import addChangeNameSubmit from './changeName.js';
import { showAvatar } from './changeAvatar.js';
import { showCharacter } from './changeCharacter.js';
import { addChangeMural } from './mural.js';
import { showSound } from './sound.js';
import addChangePasswordSubmit from './changePassword.js';

const settings = () => {
    showSound();

    addChangePasswordSubmit();

    addChangeNameSubmit();

    showAvatar();

    showCharacter();

    addChangeMural();
}

export default settings;