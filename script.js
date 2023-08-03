const startbtn= document.querySelector('.start-btn');
const popupInfo= document.querySelector('.popup-info');
const exitbn= document.querySelector('.exit-btn');

startbtn.onclick =() =>{
    popupInfo.classList.add('active');

}
exitbn.onclick =() =>{
    popupInfo.classList.remove('active');

}


