// Disable right-click on images except inside .service-box
document.addEventListener('contextmenu', function (e) {
    const isImage = e.target.tagName === 'IMG';
    const isInService = e.target.closest('.service-box');
  
    if (isImage && !isInService) {
      e.preventDefault();
    }
  });
  
  // Prevent dragging of images globally
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
  });
  