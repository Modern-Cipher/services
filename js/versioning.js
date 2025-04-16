// ✅ Auto Versioning Script with try-catch for safety
(function () {
    try {
      const version = Date.now(); // dynamic version per refresh
  
      const applyVersioning = (selector, attr) => {
        document.querySelectorAll(selector).forEach(el => {
          const original = el.getAttribute(attr);
          if (original && !original.includes('?v=')) {
            el.setAttribute(attr, `${original}?v=${version}`);
          }
        });
      };
  
      // ✅ CSS & JS files (exclude this script)
      applyVersioning('link[rel="stylesheet"]', 'href');
      applyVersioning('script[src]:not([src*="versioning.js"])', 'src');
  
      // ✅ Optional: images (logo, bg, etc)
      applyVersioning('img[src]', 'src');
  
      // ✅ Optional: add fonts, video, or other static assets if needed
      // applyVersioning('source[src]', 'src');
      // applyVersioning('video[src]', 'src');
      // applyVersioning('audio[src]', 'src');
  
    } catch (error) {
      console.warn('🔁 Versioning script error:', error);
    }
  })();
  