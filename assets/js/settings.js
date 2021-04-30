import addChangeNameSubmit from './changeName.js';
import { showAvatar } from './changeAvatar.js';
import { showCharacter } from './changeCharacter.js';

const settings = () => {
    addChangeNameSubmit();

    showAvatar();

    showCharacter();
}

export default settings;