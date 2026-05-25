// Отображение услуг на странице
function renderServices() {
    const container = document.getElementById('services-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < services.length; i++) {
        const service = services[i];
        container.innerHTML += `
            <div class="service-card">
                <i class="fas ${service.icon}"></i>
                <h3>${service.name}</h3>
                <p>${service.desc}</p>
            </div>
        `;
    }
}
