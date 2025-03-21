document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("click", function() {
        document.getElementById("mission").scrollIntoView({ behavior: "smooth" });
    });

    // Анимация для секций при загрузке
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in');
        }, index * 200); // Задержка для каждой секции
    });
});
