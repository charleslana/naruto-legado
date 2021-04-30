import { confirmDialog, notificationError } from './notification.js';
import config from './config.js';
import { toastSuccess } from './toast.js';
import price from '../../static/prices.js';
import { showUserData, getStorage, saveStorage } from './storage.js';

export const showNinjaStyle = () => {
    const ninjaStyle = document.querySelector(`input[name="group1"][value="${getStorage('styleNinja')}"]`);
    if (ninjaStyle) {
        ninjaStyle.checked = true;
    }
}

export const addChangeNinjaStyleSubmit = () => {
    const submit = document.getElementById('form-change-ninja-style');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            confirmChangeNinjaStyle();
        });
    }
}

const confirmChangeNinjaStyle = async () => {
    const checkConfirmDialog = await confirmDialog();

    if (checkConfirmDialog) {
        changeNinjaStyle();
    }
}

const changeNinjaStyle = () => {
    const credits = getStorage('credits');
    const radioStyleNinja = document.querySelector('input[name="group1"]:checked').value;

    if (radioStyleNinja === getStorage('styleNinja')) {
        return notificationError('O estilo ninja não deve ser o mesmo do atual');
    }

    if (credits < price.changeNinjaStyle) {
        return notificationError('Você não tem créditos suficiente.');
    }

    disableButton();

    fetch(config.apiBack + config.changeNinjaStyle, {
        // method: 'patch',
        // body: JSON.stringify({
        //     radioStyleNinja
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                saveStorage('styleNinja', radioStyleNinja);
                saveStorage('credits', parseInt(credits - price.changeNinjaStyle));
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
    const submit = document.querySelector('#form-change-ninja-style input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-change-ninja-style input[type="submit"]');
    submit.value = 'Trocar estilo';
    submit.removeAttribute('disabled');
}