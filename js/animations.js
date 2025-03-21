document.addEventListener("DOMContentLoaded", function() {
    const bookItems = document.querySelectorAll('.book-item');

    function revealItems() {
        const windowHeight = window.innerHeight;

        bookItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealItems);
    revealItems(); // Initial check
});
