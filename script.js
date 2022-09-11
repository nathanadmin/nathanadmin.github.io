let navlink = document.querySelector('.header .navlink');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navlink.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active'); 
}

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active'); 
}


window.onscroll = () =>{
    navlink.classList.remove('active')
}