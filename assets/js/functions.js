export const recreateNode = (element, withChildren) => {
    if (withChildren) {
        element.parentNode.replaceChild(element.cloneNode(true), element);
    }
    else {
        var newElement = element.cloneNode(false);
        while (element.hasChildNodes()) newElement.appendChild(element.firstChild);
        element.parentNode.replaceChild(newElement, element);
    }
}

export const randomString = () => {
    return Math.random().toString(36).substring(2);
}