// Mobile Navigation Hamburger Menu
var navigationList = document.getElementById('nav-bar');
var navigationToggle = document.getElementById('toggle-icon');


function mobileNavigationToggle() {

    if (navigationList.style.display === "block") {
        navigationList.style.display = "none";
        navigationToggle.classList.remove('fa-times');
        navigationToggle.classList.add('fa-bars');
    } else {
        navigationList.style.display = "block";
        navigationToggle.classList.remove('fa-bars');
        navigationToggle.classList.add('fa-times');
    }
}
