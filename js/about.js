document.addEventListener("DOMContentLoaded", function() {
    // Можно добавить анимации или другие эффекты для элементов, например:
    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("click", function() {
        document.getElementById("mission").scrollIntoView({ behavior: "smooth" });
    });
});
