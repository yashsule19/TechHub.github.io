const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 50);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ( ) => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};
window.onscroll = ( ) => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const sr = ScrollReveal({
	distance: '40px',
	duration: 2500,
	reset: false,
});

sr.reveal('.logo',{delay: 200, origin: 'left'});
sr.reveal('.navlist',{delay: 400, origin: 'top'});
sr.reveal('.nav-right',{delay: 520, origin: 'right'});

sr.reveal('.home-text h5',{delay: 600, origin: 'top'});
sr.reveal('.home-text h1',{delay: 680, origin: 'left'});
sr.reveal('.home-text p',{delay: 700, origin: 'right'});

sr.reveal('.btn',{delay: 710, origin: 'bottom'});
sr.reveal('.home-img',{delay: 800, origin: 'right'});

sr.reveal('.crafts-box img',{delay: 350, origin: 'top'})
sr.reveal('.crafts-box h6',{delay: 450, origin: 'right'})
sr.reveal('.crafts-box h3',{delay: 500, origin: 'left'})

