document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".projects-scroll-wrapper");
    const dots = document.querySelectorAll("#projects-indicators .project-dot");
  
    if (!wrapper || dots.length === 0) return;
  
    const card = wrapper.querySelector(".project-row-card");
    const cardStyle = getComputedStyle(card);
    const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight || 15); // safer gap calculation
    const totalCards = wrapper.querySelectorAll(".project-row-card").length;
    const totalDots = dots.length;
  
    const totalScrollableWidth = cardWidth * totalCards - wrapper.offsetWidth;
    const sectionWidth = totalScrollableWidth / totalDots;
  
    function updateDotFixed() {
      const scrollLeft = wrapper.scrollLeft;
      let index = Math.round(scrollLeft / sectionWidth);
      if (index >= totalDots) index = totalDots - 1;
  
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }
  
    wrapper.addEventListener("scroll", updateDotFixed);
    updateDotFixed(); // Trigger once on load
  });
  