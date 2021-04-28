const sidenav = () => {
    sidenavDetails();
    sidenavMenu();
    sidenavChat();
}

const sidenavDetails = () => {
    const elements = document.querySelector('.sidenav-details');
    M.Sidenav.init(elements, {
        edge: 'right'
    });
}

const sidenavMenu = () => {
    const elements = document.querySelector('.sidenav-menu');
    M.Sidenav.init(elements, {
        edge: 'left'
    });
}

const sidenavChat = () => {
    const elements = document.querySelector('.sidenav-chat');
    M.Sidenav.init(elements, {
        edge: 'right'
    });
}

export default sidenav;