import { showUserData, getStorage, saveStorage } from './storage.js';
import config from './config.js';
import { toastSuccess } from './toast.js';
import { notificationError } from './notification.js';

export const showAvatar = () => {
    const avatar = document.getElementById('change-avatar');
    if (avatar) {
        const premium = getStorage('premium');
        const avatarName = getStorage('avatarName');
        let values = [1, 2, 3];
        if (premium === 'true') {
            values = [1, 2, 3, 4, 5];
        }
        let print = '';
        values.map(value => {
            print += `
            <div class="col s12 m4">
                <label>
                    <img src="../assets/img/avatar/${avatarName}/${value}.png" class="c-pointer" width="150px" alt="Avatar" />
                    <div>
                        <input class="with-gap" name="group4" type="radio" value="${value}" required>
                        <span></span>
                    </div>
                </label>
            </div>
        `;
        });

        avatar.innerHTML = print;

        const groupAvatar = document.querySelector(`input[name="group4"][value="${getStorage('avatarImage')}"]`);
        if (groupAvatar) {
            groupAvatar.checked = true;
        }
    }
}

export const addChangeAvatarSubmit = () => {
    const submit = document.getElementById('form-change-avatar');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            changeAvatar();
        });
    }
}

const changeAvatar = () => {
    const radioAvatar = document.querySelector('input[name="group4"]:checked').value;

    if (radioAvatar === getStorage('avatarImage')) {
        return notificationError('O novo avatar não deve ser o mesmo do atual.');
    }

    disableButton();

    fetch(config.apiBack + config.changeAvatar, {
        // method: 'patch',
        // body: JSON.stringify({
        //     radioAvatar
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                saveStorage('avatarImage', radioAvatar);
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
    const submit = document.querySelector('#form-change-avatar input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-avatar input[type="submit"]');
    submit.value = 'Salvar';
    submit.removeAttribute('disabled');
}