document.addEventListener("DOMContentLoaded", function () {
    const slideTrack = document.getElementById("feature-slide-track");
  
    const slides = [
      { img: "assets/features/slides1.png", label: "Fixing Computer" },
      { img: "assets/features/slides2.png", label: "Laptop Repair" },
      { img: "assets/features/slides3.png", label: "Cleaning PC" },
      { img: "assets/features/slides4.png", label: "Install Software" },
      { img: "assets/features/slides5.png", label: "Graphic Design" },
      { img: "assets/features/slides6.png", label: "Marketing Design" },
      { img: "assets/features/slides7.png", label: "Custom Coding" },
      { img: "assets/features/slides8.png", label: "Websites Development" },
      { img: "assets/features/slides9.png", label: "Mobile Wireframes" },
      { img: "assets/features/slides10.png", label: "Mobile Development" },
      { img: "assets/features/slides11.png", label: "Automation Appscript" },
      { img: "assets/features/slides12.png", label: "Dashboard" },
      { img: "assets/features/slides13.png", label: "Network Management" },
      { img: "assets/features/slides14.png", label: "Server Configuration" },
      { img: "assets/features/slides15.png", label: "CCTV Setup" },
      { img: "assets/features/slides16.png", label: "CCTV Installation" },
    ];
  
    slides.forEach((item) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
  
      slide.innerHTML = `
        <img src="${item.img}" alt="${item.label}" />
        <span class="slide-label">${item.label}</span>
      `;
  
      slideTrack.appendChild(slide);
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const slideTrack = document.querySelector(".slide-track");
  
    if (!slideTrack) return;
  
    const slides = Array.from(slideTrack.children); // Original slides
  
    // ✅ Clone all slides 4x for longer seamless scroll
    for (let i = 0; i < 4; i++) {
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
      });
    }
  });
  