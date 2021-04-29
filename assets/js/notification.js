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

export const confirmDialog = async (myFunction) => {
    return await Swal.fire({
        title: 'Você confirma a ação?',
        icon: 'warning',
        text: 'O processo pode ser irreversível.',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            return true;
        }
    })
}