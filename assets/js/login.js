import config from './config.js';
import { notificationError } from './notification.js';
import loadPage from './loadPage.js';
import { saveStorage, getStorage, removeStorage, saveUserData } from './storage.js';

export const login = () => {
    const buttonLogin = document.getElementById('form-login');
    if (buttonLogin) {
        buttonLogin.addEventListener('submit', function (event) {
            event.preventDefault();
            doLogin();
        });
    }
}

const doLogin = () => {
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;

    disableButton();

    fetch(config.apiBack + config.login, {
        // method: 'post',
        // body: JSON.stringify({
        //     inputEmail,
        //     inputPassword
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                saveLogin(inputEmail, inputPassword);
                saveUserData(data);
                loadPage('news');
            }

            if (data.error) {
                enableButton();
                notificationError(data.error.message);
            }
        })
        .catch(error => {
            enableButton();
            notificationError(error.message);
        });
}

const disableButton = () => {
    const submit = document.querySelector('#form-login input[type="submit"]');
    submit.value = 'Aguarde';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-login input[type="submit"]');
    submit.value = 'Entrar';
    submit.removeAttribute('disabled');
}

const saveLogin = (inputEmail, inputPassword) => {
    if (document.getElementById('save-login').checked) {
        saveStorage('loginEmail', inputEmail);
        saveStorage('loginPassword', inputPassword);
        return;
    }
    removeStorage('loginEmail');
    removeStorage('loginPassword');
}

export const showLogin = () => {
    const checkLogin = document.getElementById('save-login');
    if (checkLogin) {
        const storageEmail = getStorage('loginEmail');
        const storagePassword = getStorage('loginPassword');

        if (storageEmail) {
            document.getElementById('email').value = storageEmail;
            document.getElementById('password').value = storagePassword;
            checkLogin.setAttribute('checked', true);
        }
    }
}