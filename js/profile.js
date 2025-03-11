// Функция для обновления аватара
document.getElementById('change-avatar').addEventListener('click', function() {
    alert('Функция изменения аватара в разработке');
});

// Пример функции сохранения изменений профиля
document.getElementById('user-info-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const fullName = document.getElementById('full-name').value;
    const birthDate = document.getElementById('birth-date').value;
    const favoriteGenre = document.getElementById('favorite-genre').value;

    // Место для отправки данных на сервер
    console.log('Данные профиля сохранены:', { username, email, fullName, birthDate, favoriteGenre });
    alert('Изменения профиля сохранены');
});

// Пример функции для изменения пароля
document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Пароли не совпадают');
    } else {
        console.log('Пароль изменен');
        alert('Пароль изменен');
    }
});
