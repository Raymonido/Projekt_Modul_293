document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const menubutton = document.getElementById("menubutton");

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('small');
            menubutton.classList.remove("menubutton-hidden");
            
        } else {
            header.classList.remove('small');
            menubutton.classList.add("menubutton-hidden");
        }
    });
});

function openmenu () {
    const navmenu = document.getElementById("navbar-hidden");

    navmenu.classList.toggle("navbar-hidden");
}