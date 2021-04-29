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
        icon: 'warning',
        title: 'Você confirma a ação?',
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