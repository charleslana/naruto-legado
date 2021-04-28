import config from './config.js';
import { notificationError } from './notification.js';
import loadPage from './loadPage.js';

const login = () => {
    const buttonLogin = document.getElementById('form-login');
    if (buttonLogin) {
        buttonLogin.addEventListener('submit', function (event) {
            event.preventDefault();
            doLogin();
        });
    }
}

const doLogin = () => {
    const inputLogin = document.getElementById('login').value;
    const inputPassword = document.getElementById('password').value;
    const selectServer = document.getElementById('server').value;

    if (selectServer < 1) {
        return notificationError('Por favor selecione o server.');
    }

    disableButton();

    fetch(config.apiBack + config.login, {
        // method: 'post',
        // body: JSON.stringify({
        //     inputLogin,
        //     inputPassword,
        //     selectServer
        // })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                loadPage('news');
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
    const submit = document.querySelector('#form-login input[type="submit"]');
    submit.value = 'AGUARDE';
    submit.setAttribute('disabled', true);
}

const enableButton = () => {
    const submit = document.querySelector('#form-login input[type="submit"]');
    submit.value = 'ENTRAR';
    submit.removeAttribute('disabled');
}

export default login;