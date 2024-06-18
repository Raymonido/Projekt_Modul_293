  /* Disclaimer: Der unten stehende Code wurde teilweise mit ChatGPT generiert. Die Logik, in welcher sich der Header beim Scrollen verändert, wurde selbst gemacht. 
  Die Logik, dass sich diese Funktion aus und abschalten lässt, wurde von ChatGPT generiert. Der Code wurde allerdings verstanden und analysiert.*/ 
  
  document.addEventListener('DOMContentLoaded', function () {
            const header = document.getElementById('header');
            const menubutton = document.getElementById("menubutton");
            const menubutton2 = document.getElementById("menubutton2");
            const toggleButton = document.getElementById('togglebutton');
                
            let scrollEventActive = false;
            let scrollListener;

            function addScrollListener() {
                scrollListener = function () {
                    if (window.scrollY > 0) {
                        header.classList.add('small');
                        menubutton.classList.remove("menubutton-hidden");
                        menubutton2.classList.remove("menubutton2-hidden");
                    } else {
                        header.classList.remove('small');
                        menubutton.classList.add("menubutton-hidden");
                        menubutton2.classList.add("menubutton2-hidden");
                    }
                };
                window.addEventListener('scroll', scrollListener);
                scrollEventActive = true;
                toggleButton.textContent = "✖️";
            }

            function removeScrollListener() {
                if (scrollListener) {
                    window.removeEventListener('scroll', scrollListener);
                }
                scrollEventActive = false;
                toggleButton.textContent = "✔️";
            }

            toggleButton.addEventListener('click', function () {
                if (scrollEventActive) {
                    removeScrollListener();
                } else {
                    addScrollListener();
                }
            });

            header.classList.add("small");
        });
 /*     //////////////////////////////////////////////////////////////////////////////////////                */ 

function openmenu() {
    const navmenu = document.getElementById("navbar-hidden");
    navmenu.classList.toggle("navbar-hidden");
}

function toggleheader() {

    document.getElementById("togglebutton").classList.toggle("togglebutton-background")
}

function triggeranim() {
    document.getElementById("menubutton").classList.toggle("menubutton-anim")
}

function togglecover(id) {
    cover = document.getElementById(id);
    cover.classList.toggle("freizeit-cover-hidden");

} 

function togglerotation(id) {
    document.getElementById(id).classList.toggle("skill-meter-rotate");
}