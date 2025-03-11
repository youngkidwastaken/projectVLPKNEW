// register.js

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register');
    const termsCheckbox = document.getElementById('terms');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Валидация формы при отправке
    registerForm.addEventListener('submit', function(e) {
        // Проверка совпадения паролей
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert('Пароли не совпадают.');
            return;
        }

        // Проверка, что пользователь согласен с условиями
        if (!termsCheckbox.checked) {
            e.preventDefault();
            alert('Вы должны согласиться с условиями использования.');
            return;
        }
    });

    // Пример добавления функции для социальных кнопок
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`Регистрация через ${this.textContent} еще не реализована.`);
        });
    });
});
