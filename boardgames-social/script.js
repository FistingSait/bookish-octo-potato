// Показ модального окна помощи
function showHelp() {
    document.getElementById('helpModal').style.display = 'block';
}

// Скрытие модального окна
function hideHelp() {
    document.getElementById('helpModal').style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('helpModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Увеличение текста при двойном клике
document.addEventListener('dblclick', function() {
    const currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 2) + 'px';
});
