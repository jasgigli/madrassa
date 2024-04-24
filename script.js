document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // You can add your form submission logic here
        alert('پیغام بھیج دیا گیا ہے۔ شکریہ!');
    });
});
function toggleMenu() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}
