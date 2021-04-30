import addChangeNameSubmit from './changeName.js';
import { showAvatar } from './changeAvatar.js';
import { showCharacter } from './changeCharacter.js';
import { addChangeMural } from './mural.js';

const settings = () => {
    addChangeNameSubmit();

    showAvatar();

    showCharacter();

    addChangeMural();
}

export default settings;