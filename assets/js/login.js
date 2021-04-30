import config from './config.js';
import { notificationError } from './notification.js';
import loadPage from './loadPage.js';
import { formatYens, formatCredits } from './functions.js';

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
                saveDataLogin(data);
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

const saveDataLogin = (data) => {
    localStorage.setItem('name', data.user.name);
    localStorage.setItem('level', data.user.level);
    localStorage.setItem('minExperience', data.user.minExperience);
    localStorage.setItem('maxExperience', data.user.maxExperience);
    localStorage.setItem('minLife', data.user.minLife);
    localStorage.setItem('maxLife', data.user.maxLife);
    localStorage.setItem('minChakra', data.user.minChakra);
    localStorage.setItem('maxChakra', data.user.maxChakra);
    localStorage.setItem('minYing', data.user.minYing);
    localStorage.setItem('maxYing', data.user.maxYing);
    localStorage.setItem('minYang', data.user.minYang);
    localStorage.setItem('maxYang', data.user.maxYang);
    localStorage.setItem('yens', data.user.yens);
    localStorage.setItem('credits', data.user.credits);
    localStorage.setItem('avatarName', data.user.avatarName);
    localStorage.setItem('avatarImage', data.user.avatarImage);
    localStorage.setItem('premium', data.user.premium);
}

export const removeDataLogin = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('level');
    localStorage.removeItem('minExperience');
    localStorage.removeItem('maxExperience');
    localStorage.removeItem('minLife');
    localStorage.removeItem('maxLife');
    localStorage.removeItem('minChakra');
    localStorage.removeItem('maxChakra');
    localStorage.removeItem('minYing');
    localStorage.removeItem('maxYing');
    localStorage.removeItem('minYang');
    localStorage.removeItem('maxYang');
    localStorage.removeItem('yens');
    localStorage.removeItem('credits');
    localStorage.removeItem('avatarName');
    localStorage.removeItem('avatarImage');
}

export const showDataLogin = () => {
    const name = localStorage.getItem('name');
    const level = localStorage.getItem('level');
    const minExperience = localStorage.getItem('minExperience');
    const maxExperience = localStorage.getItem('maxExperience');
    const minLife = localStorage.getItem('minLife');
    const maxLife = localStorage.getItem('maxLife');
    const minChakra = localStorage.getItem('minChakra');
    const maxChakra = localStorage.getItem('maxChakra');
    const minYing = localStorage.getItem('minYing');
    const maxYing = localStorage.getItem('maxYing');
    const minYang = localStorage.getItem('minYang');
    const maxYang = localStorage.getItem('maxYang');
    const yens = localStorage.getItem('yens');
    const credits = localStorage.getItem('credits');
    const avatarName = localStorage.getItem('avatarName');
    const avatarImage = localStorage.getItem('avatarImage');
    if (name) {
        const detailsName = [].slice.call(document.querySelectorAll('.details-name'));
        const detailsLevel = [].slice.call(document.querySelectorAll('.details-level'));
        const detailsExperience = [].slice.call(document.querySelectorAll('.details-experience'));
        const detailsLife = [].slice.call(document.querySelectorAll('.details-life'));
        const detailsChakra = [].slice.call(document.querySelectorAll('.details-chakra'));
        const detailsYing = [].slice.call(document.querySelectorAll('.details-ying'));
        const detailsYang = [].slice.call(document.querySelectorAll('.details-yang'));
        const detailsYens = [].slice.call(document.querySelectorAll('.details-yens'));
        const detailsCredits = [].slice.call(document.querySelectorAll('.details-credits'));
        const menuAvatar = [].slice.call(document.querySelectorAll('.menu-avatar'));
        if (detailsName) {
            detailsName.map(detail => {
                detail.innerHTML = name;
            });

            detailsLevel.map(detail => {
                detail.innerHTML = `Level: ${level}`;
            });

            detailsExperience.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/xp.png" alt="Experience" />: ${minExperience}/${maxExperience}`;
            });

            detailsLife.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/hp.png" alt="Life" />: ${minLife}/${maxLife}`;
            });

            detailsChakra.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/chakra.png" alt="Chakra" />: ${minChakra}/${maxChakra}`;
            });

            detailsYing.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/ying.png" alt="Ying" />: ${minYing}/${maxYing}`;
            });

            detailsYang.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/yang.png" alt="Yang" />: ${minYang}/${maxYang}`;
            });

            detailsYens.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/yens.png" alt="Yens" />: ${formatYens(yens)}`;
            });

            detailsCredits.map(detail => {
                detail.innerHTML = `<img src="assets/img/icons/credits.png" alt="Credits" />: ${formatCredits(credits)}`;
            });

            menuAvatar.map(menu => {
                menu.src = `assets/img/avatar/${avatarName}/${avatarImage}.png`;
            });
        }
    }
}