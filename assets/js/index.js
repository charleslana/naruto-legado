import click from './click.js';
import loadPage from './loadPage.js';

document.addEventListener('DOMContentLoaded', () => {
    click(loadPage);
    loadPage();
});