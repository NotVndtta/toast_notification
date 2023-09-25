let toastBox = document.getElementById('toastBox');
let successMsg = 'Successfuly submited';
let errorMsg = 'Error';
let invalidMsg = 'You invalid';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
}