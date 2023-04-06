document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100 && !header.classList.contains("hidden")) {
            header.classList.add("hidden");
        } else if (window.pageYOffset <= 100 && header.classList.contains("hidden")) {
            header.classList.remove("hidden");
        }

        if (window.pageYOffset < 100 && header.classList.contains("hidden")) {
            header.classList.remove("hidden");
        }
    });
});
