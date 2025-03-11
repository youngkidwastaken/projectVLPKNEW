// main.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const bookList = document.getElementById('book-list');  // Пример

    // Прослушиваем клик по кнопке поиска
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert('Поиск: ' + query);
            // Реализовать логику поиска
            // Например, отправка запроса на сервер с query и обновление bookList
        } else {
            alert('Введите название книги для поиска');
        }
    });

    // Можно добавить прослушиватель для ввода текста и показать подсказки по мере набора
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim();
        if (query.length > 2) {
            // Покажем результаты поиска в реальном времени
            console.log('Поиск по ключевому слову:', query);
        }
    });
});
