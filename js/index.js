window.onscroll = function() {
    stickToTop();
}

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickToTop() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

document.getElementById('whoishpep').style.width = (
    document.getElementById('whoishpe').offsetWidth -
    document.getElementById('hpepartner').offsetWidth - 10
) + "px";