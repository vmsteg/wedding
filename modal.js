const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
// Функция открытия модального окна
function openModal(imgUrl) {
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imgUrl;
    }
}
// Закрытие по крестику
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
}
// Закрытие по клику вне изображения
window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};
