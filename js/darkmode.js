const toggleDesktop = document.getElementById('theme-toggle');
const toggleMobile = document.getElementById('mobile-theme-toggle');

// 🟢 Apply theme before DOMContentLoaded to prevent flashing
(function preloadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light'); // <html>
    document.body.classList.add('light');            // <body>
  }
})();

function updateIcons() {
  const isLight = document.body.classList.contains('light');
  const iconClass = isLight ? 'fas fa-moon' : 'fas fa-sun';

  if (toggleDesktop) {
    const desktopIcon = toggleDesktop.querySelector('i');
    if (desktopIcon) desktopIcon.className = iconClass;
  }

  if (toggleMobile) {
    const mobileIcon = toggleMobile.querySelector('i');
    if (mobileIcon) mobileIcon.className = iconClass;
  }
}

function toggleTheme() {
  document.body.classList.add('transition');
  document.body.classList.toggle('light');
  document.documentElement.classList.toggle('light'); // Also toggle on <html>

  const currentTheme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);

  updateIcons();

  setTimeout(() => {
    document.body.classList.remove('transition');
  }, 500);
}

// ✅ Apply icons after page load
document.addEventListener('DOMContentLoaded', updateIcons);

if (toggleDesktop) toggleDesktop.addEventListener('click', toggleTheme);
if (toggleMobile) toggleMobile.addEventListener('click', toggleTheme);
