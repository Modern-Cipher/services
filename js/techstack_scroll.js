function setupAutoScrollLeft(wrapperSelector, speed = 0.5) {
  const wrapper = document.querySelector(wrapperSelector);
  const row = wrapper.querySelector('.scroll-row');

  // Clone the icons inside, not the row container itself
  const items = Array.from(row.children);
  for (let i = 0; i < 2; i++) {
    items.forEach((item) => {
      row.appendChild(item.cloneNode(true));
    });
  }

  let scroll = 0;
  function animate() {
    scroll += speed;
    if (scroll >= row.scrollWidth / 3) scroll = 0;
    wrapper.scrollLeft = scroll;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
  setupAutoScrollLeft('.tech-row-wrapper', 0.6);
});
