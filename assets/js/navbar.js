function addScrolledClass() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    addScrolledClass()
});

document.addEventListener("scroll", function () {
    addScrolledClass()
});