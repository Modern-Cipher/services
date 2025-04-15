document.addEventListener("DOMContentLoaded", () => {
    const logoWrapper = document.getElementById("logo-wrapper");
    const logoImage = document.getElementById("main-logo");
  
    // Set logo path from JS
    logoImage.src = "https://lh3.googleusercontent.com/pw/AP1GczPFhqhjqYx1JKW60iupGzytGjQjv9lXcq8xkU7supp-wEBwoCjI26RrUH9Nh4cLS3xwhT9NCe053RmDEapdKNuwz1-HqhssTCh_EE8ya3stnFB1G0QokruhI6fB9RC9gWE5LfUEl6EfBmSILEaxifQ=w200-h200-s-no-gm?authuser=0";
  
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
    headerLogo.src = "https://lh3.googleusercontent.com/pw/AP1GczN59ZF_Jhj9qIyIcxpBU_fQKbPaOb7sgQ8OSLC9-wfAfsU96rCXebT5uV4sjWDtTE6QYL22LcBIFyoMGNadDWX6KSLe1H_IId8ZSIs09FbgZPvp8tkycmb4tYsujEwwT2kzcojdB9IquQ4PM7mH0_M=w945-h945-s-no-gm?authuser=0"; // path hidden from HTML
  });
  