// social-register.js
document.addEventListener('DOMContentLoaded', function() {
    const facebookButton = document.querySelector('.social-button.facebook');
    const googleButton = document.querySelector('.social-button.google');
    const twitterButton = document.querySelector('.social-button.twitter');

    // Имитируем процесс авторизации через социальные сети
    facebookButton.addEventListener('click', function() {
        alert('Регистрация через Facebook');
        // Здесь можно добавить логику авторизации через API соцсетей
    });

    googleButton.addEventListener('click', function() {
        alert('Регистрация через Google');
    });

    twitterButton.addEventListener('click', function() {
        alert('Регистрация через Twitter');
    });
});
