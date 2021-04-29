import { confirmDialog } from './notification.js';

const addChangeNameSubmit = () => {
    const submit = document.getElementById('form-change-name');
    if (submit) {
        submit.addEventListener('submit', (event) => {
            event.preventDefault();
            changeName();
        });
    }
}

const changeName = async () => {
    const checkConfirmDialog = await confirmDialog();

    if (checkConfirmDialog) {
        alert();
    }
}

export default addChangeNameSubmit;