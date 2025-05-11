const toggle = document.getElementById('toggleDarkMode');
const body = document.querySelector('body');

// Check localStorage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggle.classList.remove('fa-sun');
    toggle.classList.add('fa-moon');
}

toggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    toggle.classList.toggle('fa-sun', !isDarkMode);
    toggle.classList.toggle('fa-moon', isDarkMode);

    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});