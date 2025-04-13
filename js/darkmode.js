const toggleDesktop = document.getElementById('theme-toggle');
const toggleMobile = document.getElementById('mobile-theme-toggle');

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
  document.body.classList.add('transition'); // 🔄 Add transition class

  document.body.classList.toggle('light');
  updateIcons();

  // 🔄 Remove transition after animation completes
  setTimeout(() => {
    document.body.classList.remove('transition');
  }, 500); // Match with CSS transition duration
}

if (toggleDesktop) toggleDesktop.addEventListener('click', toggleTheme);
if (toggleMobile) toggleMobile.addEventListener('click', toggleTheme);

// Apply correct icon on initial load
document.addEventListener('DOMContentLoaded', updateIcons);
