document.addEventListener("DOMContentLoaded", function() {
    // Пример данных о книге
    const bookData = {
        title: "Пример книги",
        author: "Автор Пример",
        genre: "Художественная литература",
        publishDate: "2023-03-10",
        isbn: "123-456-789",
        rating: 4.5,
        description: "Это пример описания книги.",
        cover: "images/book-cover.jpg",
        reviews: [
            { user: "Анна", text: "Отличная книга! Очень понравилась!" },
            { user: "Иван", text: "Неплохое произведение, но ожидал большего." },
            { user: "Мария", text: "Рекомендую к прочтению! Захватывающий сюжет." }
        ]
    };

    // Заполнение информации о книге
    document.getElementById("book-title").textContent = bookData.title;
    document.getElementById("book-author").textContent = `Автор: ${bookData.author}`;
    document.getElementById("book-genre").textContent = `Жанр: ${bookData.genre}`;
    document.getElementById("book-publish-date").textContent = `Дата публикации: ${bookData.publishDate}`;
    document.getElementById("book-isbn").textContent = `ISBN: ${bookData.isbn}`;
    document.getElementById("book-cover").src = bookData.cover;
    document.getElementById("book-description-text").textContent = bookData.description;

    // Обработка рейтинга
    const ratingStars = document.getElementById("book-rating");
    ratingStars.textContent = `Рейтинг: ${bookData.rating} звезд`;

    // Добавление отзывов
    const reviewList = document.getElementById("review-list");
    bookData.reviews.forEach(review => {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        reviewItem.innerHTML = `<strong>${review.user}:</strong> <p>${review.text}</p>`;
        reviewList.appendChild(reviewItem);
    });
});
