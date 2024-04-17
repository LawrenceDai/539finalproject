const showOnPx = 50;
const backToTopButton = document.querySelector(".back-to-top");

window.onscroll = function() {
    scrollFunction();
}
function scrollFunction () {
    if (document.documentElement.scrollTop > showOnPx || document.body.scrollTop > showOnPx) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
}

function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
backToTopButton.addEventListener('click', topFunction);