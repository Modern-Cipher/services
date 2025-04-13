// Disable text copy shortcut globally
document.addEventListener('keydown', function (e) {
    const tag = document.activeElement.tagName;
    const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  
    if (!isInput && (e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x' || e.key === 'a')) {
      e.preventDefault();
    }
  });
  
  // Disable right-click globally EXCEPT on modal or service cards
  document.addEventListener('contextmenu', function (e) {
    if (
      e.target.closest('.service-box') ||
      e.target.closest('#service-modal')
    ) {
      // Allow right-click
      return;
    }
  
    e.preventDefault();
  });
  