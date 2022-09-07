window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById('nav-change').style.backgroundColor = "white";
        document.getElementById('nav-text').style.color = "black";
    } else {

        document.getElementById('nav-change').style.backgroundColor = "transparent";
        document.getElementById('nav-text').style.color = "white";
    }
}