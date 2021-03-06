import click from './click.js';
import loadPage from './loadPage.js';
import toTop from './toTop.js';
import './prototype.js';

document.addEventListener('DOMContentLoaded', () => {
    toTop();
    click(loadPage);
    loadPage();
});