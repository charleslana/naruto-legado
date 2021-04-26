import config from './config.js';
import { notificationError } from './notification.js';

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
    const submit = document.querySelector('#form-login input[type="submit"]');
    submit.value = 'AGUARDE';
    submit.setAttribute('disabled', true);
    notificationError('Algum erro');

    fetch(config.apiBack + config.login)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {

            }

            if (data.error) {
                
            }
        })
        .catch(error => {
            notificationError(error.message);
        });
}

export default login;