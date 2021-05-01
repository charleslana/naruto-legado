import { showUserData, getStorage, saveStorage } from './storage.js';
import config from './config.js';
import { toastSuccess } from './toast.js';
import { notificationError } from './notification.js';

export const showMural = () => {
    const mural = document.getElementById('mural');
    if (mural) {
        mural.value = getStorage('mural');
    }
}

export const addChangeMuralSubmit = () => {
    const submit = document.getElementById('form-change-mural');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            changeMural();
        });
    }
}

const changeMural = () => {
    const mural = document.getElementById('mural').value;

    if (mural === getStorage('mural')) {
        return notificationError('O novo mural não deve ser o mesmo do atual.');
    }

    disableButton();

    fetch(config.apiBack + config.changeMural, {
        // method: 'patch',
        // body: JSON.stringify({
        //     mural
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                saveStorage('mural', mural);
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
    const submit = document.querySelector('#form-change-mural input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-mural input[type="submit"]');
    submit.value = 'Salvar';
    submit.removeAttribute('disabled');
}