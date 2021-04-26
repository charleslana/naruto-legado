const click = (loadPage) => {
    removeAllClick();
    const clickActions = [].slice.call(document.querySelectorAll('.click-action'));
    clickActions.map((clickAction) => {
        clickAction.addEventListener('click', function (event) {
            event.preventDefault();
            let page = this.href.replace(/^.*\//g, '');
            let pageNow = document.querySelector('main');
            let getAttributePageNow = pageNow.getAttribute('page-now');
            if (page !== getAttributePageNow) {
                loadPage(page);
            }
        });
    });
}

const removeAllClick = () => {
    const clickActions = [].slice.call(document.querySelectorAll('.click-action'));
    clickActions.map((clickAction) => {
        recreateNode(clickAction);
    });
}

const recreateNode = (element, withChildren) => {
    if (withChildren) {
        element.parentNode.replaceChild(element.cloneNode(true), element);
    }
    else {
        var newElement = element.cloneNode(false);
        while (element.hasChildNodes()) newElement.appendChild(element.firstChild);
        element.parentNode.replaceChild(newElement, element);
    }
}

export default click;