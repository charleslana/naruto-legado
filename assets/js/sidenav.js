export const sidenav = () => {
    sidenavDetails();
    sidenavMenu();
    sidenavChat();
}

const sidenavDetails = () => {
    const elements = document.querySelector('.sidenav-details');
    if (elements) {
        M.Sidenav.init(elements, {
            edge: 'right'
        });
    }
}

const sidenavMenu = () => {
    const elements = document.querySelector('.sidenav-menu');
    if (elements) {
        M.Sidenav.init(elements, {
            edge: 'left'
        });
    }
}

const sidenavChat = () => {
    const elements = document.querySelector('.sidenav-chat');
    if (elements) {
        M.Sidenav.init(elements, {
            edge: 'right'
        });
    }
}

export const closeSidenav = () => {
    const elementsDetails = document.querySelector('.sidenav-details');
    if (elementsDetails) {
        const instanceDetails = M.Sidenav.init(elementsDetails);
        instanceDetails.close();
    }

    const elementsMenu = document.querySelector('.sidenav-menu');
    if (elementsMenu) {
        const instanceMenu = M.Sidenav.init(elementsMenu);
        instanceMenu.close();
    }
}