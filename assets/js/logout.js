import { recreateNode } from './functions.js';
import { closeSidenav } from './sidenav.js';
import { removeDataLogin } from './login.js';

const logout = (loadPage) => {
    removeAllClick();
    const clickActions = [].slice.call(document.querySelectorAll('.click-logout'));
    clickActions.map((clickAction) => {
        clickAction.addEventListener('click', function (event) {
            event.preventDefault();
            closeSidenav();
            removeDataLogin();
            loadPage('login');
        });
    });
}

const removeAllClick = () => {
    const clickExits = [].slice.call(document.querySelectorAll('.click-logout'));
    clickExits.map((clickExit) => {
        recreateNode(clickExit);
    });
}

export default logout;