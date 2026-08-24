// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');

    // Toggle book open/closed on click
    book.addEventListener('click', () => {
        book.classList.toggle('open');
    });

    // Optional: Close when clicking outside (optional enhancement)
    document.addEventListener('click', (e) => {
        if (!book.contains(e.target) && !e.target.closest('.book-wrapper')) {
            book.classList.remove('open');
        }
    });
});