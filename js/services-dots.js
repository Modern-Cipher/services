document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".services-scroll-wrapper");
    const dots = document.querySelectorAll("#services-indicators .dot");
    const totalDots = dots.length;
  
    if (!wrapper || !dots.length) return;
  
    const cardWidth = 200 + 15; // width + gap
    const cardCount = document.querySelectorAll(".service-box").length;
  
    const totalScrollableWidth = cardWidth * cardCount - wrapper.offsetWidth;
    const sectionWidth = totalScrollableWidth / totalDots;
  
    function updateDotFixed() {
      const scrollLeft = wrapper.scrollLeft;
      let index = Math.floor(scrollLeft / sectionWidth);
      if (index >= totalDots) index = totalDots - 1;
  
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }
  
    wrapper.addEventListener("scroll", updateDotFixed);
    updateDotFixed(); // initial state
  });
  