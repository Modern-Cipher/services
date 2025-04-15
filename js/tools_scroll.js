// toolsstack.js
function setupAutoScrollToolsLeft(wrapperSelector, speed = 2) {
  const wrapper = document.querySelector(wrapperSelector);
  const row = wrapper.querySelector('.tools-scroll');

  // Clone the row multiple times to simulate infinite scroll
  for (let i = 0; i < 10; i++) {
    const clone = row.cloneNode(true);
    wrapper.appendChild(clone);
  }

  let scroll = 0;
  let lastTime = performance.now();

  function animate(time) {
    const delta = time - lastTime;
    lastTime = time;

    scroll += speed * (delta / 16.67); // Normalize based on 60fps

    const scrollLimit = row.scrollWidth;
    if (scroll >= scrollLimit) scroll = 0;

    wrapper.scrollLeft = scroll;
    requestAnimationFrame(animate);
  }

  // Start animation only if row is wider than wrapper
  if (row.scrollWidth > wrapper.clientWidth) {
    requestAnimationFrame(animate);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupAutoScrollToolsLeft('.tools-row-wrapper', 1); // Adjust speed here
});
