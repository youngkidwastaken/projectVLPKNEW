document.addEventListener('DOMContentLoaded', function () {
    // Управление вкладками
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Отключаем активный класс на всех кнопках и контенте
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Включаем активный класс на выбранной кнопке и контенте
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Пример прогресса чтения
    const progress = document.getElementById('progress-chart').querySelector('div');
    const progressPercentage = 75; // Заменить на реальный процент прогресса
    progress.style.width = progressPercentage + '%';

    // Пример прогресса для чтения
    const challengeProgress = document.getElementById('challenge-progress-bar').querySelector('div');
    const challengeProgressPercentage = 50; // Заменить на реальный процент прогресса
    challengeProgress.style.width = challengeProgressPercentage + '%';
});
