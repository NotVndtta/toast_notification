let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfuly submited';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> You invalid';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
 
    if(msg.includes('Error')) {
        toast.classList.add('error'); 
    } 
    if(msg.includes('invalid')) {
        toast.classList.add('invalid'); 
    } 

    setTimeout(()=>{
        toast.remove();
    }, 6000);
}