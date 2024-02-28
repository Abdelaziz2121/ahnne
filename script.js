/*============================================ Toggle icon Navbar ==========================================*/


let nemuIcone = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

/*============================================ scroll section active link ==========================================*/

let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply( links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList,add('active');

            });
        };

    });
}

/*============================================ scroll section active link ==========================================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*============================================ scroll section active link ==========================================*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

/*============================================ typed js ==========================================*/
const typed = new typed('.multiple-text',{
    Strings: ['Fachinformatiker systemintegration machen', 'Web Designer'],
    typeSpeed: 70,
    backSpeed:70,
    backDeplay: 1000,
    loop: true,
});