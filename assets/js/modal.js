export const modalDailyReward = () => {
    const elements = document.getElementById('modal-daily-reward');
    if (elements) {
        const instance = M.Modal.init(elements, {
            endingTop: '13%'
        });
        instance.open();
    }
}