document.addEventListener("DOMContentLoaded", function() {
    const bookGrid = document.querySelector(".book-grid");
    const filterForm = document.getElementById("filter-form");
    let allBooks = []; // Массив для хранения всех загруженных книг

    async function fetchBooks() {
        try {
            const response = await fetch('https://openlibrary.org/subjects/love.json?limit=50');
            const data = await response.json();
            allBooks = data.works.map(book => ({
                title: book.title,
                author: book.authors.map(author => author.name).join(', '),
                cover: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : 'images/default-cover.jpg',
                genre: 'love' // Добавьте жанр, если он известен
            }));
            displayBooks(allBooks); // Отображаем все книги
        } catch (error) {
            console.error("Ошибка при загрузке книг:", error);
        }
    }

    function displayBooks(bookList) {
        bookGrid.innerHTML = '';
        bookList.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");
            bookItem.innerHTML = `
                <img src="${book.cover}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            `;
            bookGrid.appendChild(bookItem);
        });
    }

    // Обработка отправки формы
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        const genre = document.getElementById('genre').value;
        const sort = document.getElementById('sort').value;

        // Фильтрация книг
        let filteredBooks = allBooks;
        if (genre) {
            filteredBooks = filteredBooks.filter(book => book.genre === genre);
        }

        // Сортировка книг (по названию в данном примере)
        if (sort === 'title') {
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
        }

        displayBooks(filteredBooks); // Отображаем отфильтрованные книги
    });

    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    window.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    });

    fetchBooks();
});
