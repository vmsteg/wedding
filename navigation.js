// Бургер-меню для мобильных устройств
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger) {
    burger.onclick = function() {
        nav.classList.toggle('show');
    };
}

// Кнопка "Наверх"
const toTopBtn = document.getElementById('toTop');

window.onscroll = function() {
    if (window.scrollY > 300) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
};

if (toTopBtn) {
    toTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

// Плавная прокрутка для якорных ссылок
const links = document.querySelectorAll('nav a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            
            // Закрываем мобильное меню после клика
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        }
    };
}