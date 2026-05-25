// Отображение отзывов на странице
function renderReviews() {
    const container = document.getElementById('reviews-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        container.innerHTML += `
            <div class="review-card">
                <p class="review-text">"${review.text}"</p>
                <p class="review-author">${review.name}</p>
            </div>
        `;
    }
}
Ы