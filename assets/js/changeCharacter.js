import characters from '../../static/characters.js';
import { showUserData, getStorage, saveStorage } from './storage.js';
import config from './config.js';
import { toastSuccess } from './toast.js';
import { notificationError } from './notification.js';
import { showAvatar } from './changeAvatar.js';

export const showCharacter = () => {
    const checkCharacter = document.getElementById('change-character');
    if (checkCharacter) {
        const premium = getStorage('premium');
        if (premium === 'true') {
            let print = '';
            characters.map(character => {
                print += `
                <div class="col s6 m2">
                    <label>
                        <img src="../assets/img/avatar/${character.name}/${character.image}.png" class="c-pointer" width="80px" alt="${character.name}" />
                        <div>
                            <input class="with-gap" name="group2" type="radio" value="${character.value}" data-name="${character.name}" required>
                            <span></span>
                        </div>
                    </label>
                </div>
            `;
            });

            print += '<input type="submit" class="btn" value="Salvar" />';

            checkCharacter.innerHTML = print;

            const groupCharacter = document.querySelector(`input[name="group2"][value="${getStorage('character')}"]`);
            if (groupCharacter) {
                groupCharacter.checked = true;
            }
        }
    }
}

export const addChangeCharacterSubmit = () => {
    const submit = document.getElementById('form-change-character');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            changeCharacter();
        });
    }
}

const changeCharacter = () => {
    const radioCharacter = document.querySelector('input[name="group2"]:checked');

    if (radioCharacter.value === getStorage('character')) {
        return notificationError('O novo personagem não deve ser o mesmo do atual.');
    }

    disableButton();

    fetch(config.apiBack + config.changeCharacter, {
        // method: 'patch',
        // body: JSON.stringify({
        //     radioCharacter.value
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                saveStorage('character', radioCharacter.value);
                saveStorage('avatarName', radioCharacter.getAttribute('data-name'));
                showAvatar();
                showUserData();
                toastSuccess(data.success.message);
            }

            if (data.error) {
                notificationError(data.error.message);
            }

            enableButton();
        })
        .catch(error => {
            enableButton();
            notificationError(error.message);
        });
}

const disableButton = () => {
    const submit = document.querySelector('#form-change-character input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-character input[type="submit"]');
    submit.value = 'Salvar';
    submit.removeAttribute('disabled');
}