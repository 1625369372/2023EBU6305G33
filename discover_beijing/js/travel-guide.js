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
