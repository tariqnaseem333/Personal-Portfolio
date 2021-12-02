document.addEventListener('scroll', () => {
    var scoll_position = window.scrollY;
    if (scroll_position > 250) {
        navbar.style.backgroundColor = "#29323c";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
})
