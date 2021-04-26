export const notificationError = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: message
    });
}

export const notificationSuccess = (message) => {
    Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: message
    });
}