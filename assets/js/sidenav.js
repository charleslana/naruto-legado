const sidenav = () => {
    const elements = document.querySelector('.sidenav-details');
    M.Sidenav.init(elements, {
        edge: 'right'
    });
}

export default sidenav;