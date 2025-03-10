document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector("#hamburgerIcon");
    const mobileNav = document.querySelector("#mobileNav");

    hamburger.addEventListener("click", function () {
        mobileNav.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const achievements = document.querySelectorAll(".achievement");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85;

        achievements.forEach((achievement) => {
            const achievementTop = achievement.getBoundingClientRect().top;

            if (achievementTop < triggerBottom) {
                achievement.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on page load
});
