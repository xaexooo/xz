document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fadeInOnScroll');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            
            // Проверяем, попал ли элемент в область видимости
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add('visible'); // Добавляем класс, чтобы анимировать
            }
        });
    }

    // Проверка видимости при прокрутке и при загрузке страницы
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Вызов сразу после загрузки для обработки элементов, которые уже видны
});
