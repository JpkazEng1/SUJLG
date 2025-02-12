
let isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
  document.body.classList.add('dark-mode');
}
