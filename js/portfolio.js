// Текущая категория фильтра (по умолчанию показываем всё)
let currentCategory = 'all';
// Отображение портфолио с учётом фильтра
function renderPortfolio() {
    const container = document.getElementById('portfolio-list');
    if (!container) return;
    // Фильтрация массива портфолио
    let filtered = [];
    if (currentCategory === 'all') {
        filtered = portfolio;
    } else {
        for (let i = 0; i < portfolio.length; i++) {
            if (portfolio[i].category === currentCategory) {
                filtered.push(portfolio[i]);
            }
        }
    }
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center;">Нет работ в этой категории</p>';
        return;
    }
    // Отображение карточки
    container.innerHTML = '';
    for (let i = 0; i < filtered.length; i++) {
        const item = filtered[i];
        container.innerHTML += `
            <div class="portfolio-item" data-img="${item.fullImg}">
                <img src="${item.img}" alt="${item.title}">
            </div>
        `;
    }
    // Добавление обработчиков клика для открытия модального окна
    const items = document.querySelectorAll('.portfolio-item');
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            const imgUrl = this.getAttribute('data-img');
            if (typeof openModal === 'function') {
                openModal(imgUrl);
            }
        };
    }
}
// Настройка кнопок фильтрации
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (!buttons.length) return;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            // Убираем активный класс у всех кнопок
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active');
            }
            // Добавление активного класса на нажатую кнопку
            this.classList.add('active');
            currentCategory = this.getAttribute('data-cat');
            renderPortfolio();
        };
    }
}