// toolsstack.js
function setupAutoScrollToolsLeft(wrapperSelector, speed = 0.5) {
  const wrapper = document.querySelector(wrapperSelector);
  const row = wrapper.querySelector('.tools-scroll');

  for (let i = 0; i < 2; i++) {
    const clone = row.cloneNode(true);
    wrapper.appendChild(clone);
  }

  let scroll = 0;
  function animate() {
    scroll += speed;
    const scrollLimit = row.scrollWidth;

    if (scroll >= scrollLimit) scroll = 0;

    wrapper.scrollLeft = scroll;
    requestAnimationFrame(animate);
  }

  if (row.scrollWidth > wrapper.clientWidth) {
    requestAnimationFrame(animate);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupAutoScrollToolsLeft('.tools-row-wrapper', 0.6);
});
