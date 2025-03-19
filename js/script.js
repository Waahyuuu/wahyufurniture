let closer = document.querySelector('#closer');

closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle('active');
}

let contact = document.querySelector('#contact-btn');
let call = document.querySelector('#call-btn');

document.querySelector('#contact-btn').onclick = () => {
    let phoneNumber = "6285706751095";
    let message = "Halo, Saya perlu bantuan anda.";
    let contact = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(contact, "_blank");
}

document.querySelector('#call-btn').onclick = () => {
    let phoneNumber = "6285340012806";
    let message = "Halo, saya ingin bertanya tentang produk Anda.";
    let contact = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(contact, "_blank");
}

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}



