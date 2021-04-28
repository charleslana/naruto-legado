import config from './config.js';
import click from './click.js';
import ninjasOnline from './ninjasOnline.js';
import eventsActive from './eventsActive.js';
import addEvent from './addEvent.js';
import sidenav from './sidenav.js';
import tab from './tab.js';
import tooltip from './tooltip.js';

const loadPage = (page = 'home') => {

    if (page === 'home' || page === 'login' || page === 'register') {
        return loadPageMain(page);
    }

    loadPageLogged(page);
}

const loadPageMain = (page) => {
    preloaderMain();
    const main = document.querySelector('main');

    fetch(`${config.apiFront}/pages/${page}.html`)
        .then(response => {
            if (!response.ok) {
                return main.innerHTML = notFound();
            }
            return response.text();
        })
        .then(data => {
            main.innerHTML = data;
            main.setAttribute('page-now', page);
            click(loadPageMain);
            fetchPageContent(page);
            addEvent();
        })
        .catch(error => {
            console.error(error.message);
        });
}

const preloaderMain = () => {
    document.querySelector('main').innerHTML = `
    <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
    `;
}

const fetchPageContent = (page) => {
    if (page === 'login') {
        ninjasOnline();
        eventsActive();
    }
}

const notFound = () => {
    return `
    <div class="container">
        <div class="content">
            <h3 class="center">Pagina inválida</h3>
            <img src="../assets/img/help/1.png" alt="Help" class="left" height="320" />
            <p>A página solicitada não existe, por favor tente novamente voltando para a página inicial</p>
        </div>
    </div>
    `;
}

const loadPageLogged = (page) => {
    preloaderSector();
    const sector = document.querySelector('sector');

    fetch(`${config.apiFront}/logged.html`)
        .then(response => {
            if (!response.ok) {
                return sector.innerHTML = notFound();
            }
            return response.text();
        })
        .then(data => {
            sector.innerHTML = data;
            click(loadPageMain);
            sidenav();
            tab();
            tooltip();
            loadPageMain(page);
        })
        .catch(error => {
            console.error(error.message);
        });
}

const preloaderSector = () => {
    document.querySelector('sector').innerHTML = `
    <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
    `;
}

export default loadPage;