document.addEventListener("DOMContentLoaded", () => {
    const logoWrapper = document.getElementById("logo-wrapper");
    const logoImage = document.getElementById("main-logo");
  
    // Set logo path from JS
    logoImage.src = "assets/LOGO.png";
  
    // Optional: add cursor style
    logoWrapper.style.cursor = "pointer";
  
    // Smooth scroll on click
    logoWrapper.addEventListener("click", () => {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    });
  });
  
//header LOGO PATH
  document.addEventListener("DOMContentLoaded", () => {
    const headerLogo = document.getElementById("header-logo");
    headerLogo.src = "assets/LOGO.png"; // path hidden from HTML
  });
  