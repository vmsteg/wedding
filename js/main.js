document.addEventListener('DOMContentLoaded', function() {
    // вызов функций
    if (typeof renderServices === 'function') {
        renderServices();
    }
    if (typeof renderPortfolio === 'function') {
        renderPortfolio();
    }
    if (typeof renderReviews === 'function') {
        renderReviews();
    }
    if (typeof initFilters === 'function') {
        initFilters();
    }
    console.log('Сайт wedding загружен');
});