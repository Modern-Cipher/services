// ✅ Safe Redirect Script with fallback to 404
(function () {
    const target = './views/main'; // or "./views/maintenance.html"
    const fallback = '404';      // fallback page
  
    fetch(target, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          window.location.href = target;
        } else {
          window.location.href = fallback;
        }
      })
      .catch(() => {
        window.location.href = fallback;
      });
  })();
  