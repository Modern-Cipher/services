function setupAutoScrollLeft(wrapperSelector, speed = 2) {
  const wrapper = document.querySelector(wrapperSelector);
  const row = wrapper.querySelector('.scroll-row');

  // Clone the items inside, not the row itself
  const items = Array.from(row.children);
  for (let i = 0; i < 10; i++) {
    items.forEach(item => {
      row.appendChild(item.cloneNode(true));
    });
  }

  let scroll = 0;
  let lastTime = performance.now();

  function animate(time) {
    const delta = time - lastTime;
    lastTime = time;

    scroll += speed * (delta / 16.67); // Normalize to 60fps baseline

    if (scroll >= row.scrollWidth / 3) {
      scroll = 0;
    }

    wrapper.scrollLeft = scroll;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
  setupAutoScrollLeft('.tech-row-wrapper', 1); // Adjust speed here
});
