import { recreateNode } from './functions.js';
import { closeSidenav } from './sidenav.js';

const logout = (loadPage) => {
    removeAllClick();
    const clickActions = [].slice.call(document.querySelectorAll('.click-logout'));
    clickActions.map((clickAction) => {
        clickAction.addEventListener('click', function (event) {
            event.preventDefault();
            closeSidenav();
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