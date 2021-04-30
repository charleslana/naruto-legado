export const showStyleNinja = (getStorage) => {
    const styleNinja = document.querySelector(`input[name="group1"][value="${getStorage('styleNinja')}"]`);
    if (styleNinja) {
        styleNinja.checked = true;
    }
}