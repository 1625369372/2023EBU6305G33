document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const scrollDown = document.querySelector(".scroll-down");
    const downArrow = document.querySelector(".down-arrow");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100 && !header.classList.contains("hidden")) {
            header.classList.add("hidden");
            scrollDown.style.opacity = "0";
            downArrow.style.opacity = "0";
        } else if (window.pageYOffset <= 100 && header.classList.contains("hidden")) {
            header.classList.remove("hidden");
            scrollDown.style.opacity = "1";
            downArrow.style.opacity = "1";
        }

        if (window.pageYOffset < 100 && header.classList.contains("hidden")) {
            header.classList.remove("hidden");
            scrollDown.style.opacity = "1";
            downArrow.style.opacity = "1";
        }
    });
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

setInterval(changeSlide, 5000); // 更改间隔时间，单位为毫秒，这里设置为 5000 毫秒（5 秒）

