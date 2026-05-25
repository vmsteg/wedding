const form = document.getElementById('feedback-form');
const resultDiv = document.getElementById('form-message-result');
// Функция сохранения заявки в localStorage
function saveRequestToLocalStorage(request) {
    let requests = localStorage.getItem('weddingRequests');
    if (requests) {
        requests = JSON.parse(requests);
    } else {
        requests = [];
    }
    requests.push(request);
    localStorage.setItem('weddingRequests', JSON.stringify(requests));
}
// Обработчик отправки формы
if (form) {
    form.onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const message = document.getElementById('form-message').value;
        // Простая проверка на пустые поля
        if (!name || !email || !message) {
            resultDiv.innerHTML = '<p style="color:red;">Заполните все поля!</p>';
            return;
        }
        const request = {
            id: Date.now(),
            name: name,
            email: email,
            message: message,
            date: new Date().toLocaleString()
        };
        saveRequestToLocalStorage(request);
        resultDiv.innerHTML = '<p style="color:green;">Сообщение отправлено! Мы свяжемся с вами.</p>';
        form.reset();
        setTimeout(() => {
            resultDiv.innerHTML = '';
        }, 3000);
    };
}