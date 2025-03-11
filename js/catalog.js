document.addEventListener("DOMContentLoaded", function() {
    const books = [
        { title: "Книга 1", author: "Автор 1", cover: "images/book1.jpg" },
        { title: "Книга 2", author: "Автор 2", cover: "images/book2.jpg" },
        { title: "Книга 3", author: "Автор 3", cover: "images/book3.jpg" },
        { title: "Книга 4", author: "Автор 4", cover: "images/book4.jpg" },
        { title: "Книга 5", author: "Автор 5", cover: "images/book5.jpg" },
        { title: "Книга 6", author: "Автор 6", cover: "images/book6.jpg" }
    ];
    
    const bookGrid = document.querySelector(".book-grid");

    // Функция для отображения книг
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

    // Отображаем все книги по умолчанию
    displayBooks(books);

    // Фильтрация книг по жанрам
    const filterForm = document.querySelector("#filter-form");
    filterForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const genre = document.querySelector("#genre").value;
        const sort = document.querySelector("#sort").value;

        let filteredBooks = books;

        // Фильтрация по жанру
        if (genre) {
            filteredBooks = books.filter(book => book.genre === genre);
        }

        // Сортировка
        if (sort) {
            filteredBooks = filteredBooks.sort((a, b) => {
                if (sort === 'popularity') return b.popularity - a.popularity;
                if (sort === 'title') return a.title.localeCompare(b.title);
                if (sort === 'author') return a.author.localeCompare(b.author);
                if (sort === 'date') return new Date(b.date) - new Date(a.date);
            });
        }

        // Отображаем отфильтрованные книги
        displayBooks(filteredBooks);
    });
});
