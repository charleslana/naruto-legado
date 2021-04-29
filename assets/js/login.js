import config from './config.js';
import { notificationError } from './notification.js';
import loadPage from './loadPage.js';

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
    const selectServer = document.getElementById('server').value;

    if (selectServer < 1) {
        return notificationError('Por favor selecione o server.');
    }

    disableButton();

    fetch(config.apiBack + config.login, {
        // method: 'post',
        // body: JSON.stringify({
        //     inputEmail,
        //     inputPassword,
        //     selectServer
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                saveLogin(inputEmail, inputPassword, selectServer);
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
    submit.value = 'AGUARDE';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-login input[type="submit"]');
    submit.value = 'ENTRAR';
    submit.removeAttribute('disabled');
}

const saveLogin = (inputEmail, inputPassword, selectServer) => {
    if (document.getElementById('save-login').checked) {
        localStorage.setItem('email', inputEmail);
        localStorage.setItem('password', inputPassword);
        localStorage.setItem('server', selectServer);
        return;
    }
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('server');
}

export const showLogin = () => {
    const checkLogin = document.getElementById('save-login');
    if (checkLogin) {
        const storageEmail = localStorage.getItem('email');
        const storagePassword = localStorage.getItem('password');
        const storageServer = localStorage.getItem('server');
        if (storageEmail) {
            document.getElementById('email').value = storageEmail;
            document.getElementById('password').value = storagePassword;
            document.getElementById('server').value = storageServer;
            checkLogin.setAttribute('checked', true);
            M.updateTextFields();
        }
    }
}