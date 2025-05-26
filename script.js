const showToastBtn = document.querySelector('#show-toast');
const horizontalPosition = document.querySelector('#horizontal-position');
const verticalPosition = document.querySelector('#vertical-position');
const toastsContainer = document.querySelector('.toasts-container');
const toastType = document.querySelector('#type');
const toastMessage = document.querySelector('#message');


showToastBtn.addEventListener('click', () => {
    const newToast = document.createElement('div')
    newToast.classList.add('toast');

    console.log(toastType.value);

    if (toastType.value === 'success') {
        newToast.innerText = `✓ ${toastMessage.value}!`
    } else if (toastType.value === 'warning') {
        newToast.innerText = `ⓘ ${toastMessage.value}!`
    }

    toastsContainer.append('newToast')


    if (horizontalPosition.value === 'right') {
        toastsContainer.classList.add('right')
    } else {
        toastsContainer.classList.remove('right')
    }


    if (verticalPosition.value === 'bottom') {
        toastsContainer.classList.add('bottom')
    } else {
        toastsContainer.classList.remove('bottom')
    }

});
