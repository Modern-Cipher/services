document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for topbar logo
  const logoWrapper = document.getElementById("logo-wrapper");
  const logoImage = document.getElementById("main-logo");

  logoImage.src = "https://lh3.googleusercontent.com/pw/AP1GczPFhqhjqYx1JKW60iupGzytGjQjv9lXcq8xkU7supp-wEBwoCjI26RrUH9Nh4cLS3xwhT9NCe053RmDEapdKNuwz1-HqhssTCh_EE8ya3stnFB1G0QokruhI6fB9RC9gWE5LfUEl6EfBmSILEaxifQ=w200-h200-s-no-gm?authuser=0";
  logoWrapper.style.cursor = "pointer";

  logoWrapper.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });

  // Spinner for header logo
  const headerLogoWrapper = document.getElementById("header-logo-wrapper");
  const headerLogoImg = document.getElementById("header-logo-img");

  headerLogoImg.src = "https://lh3.googleusercontent.com/pw/AP1GczN59ZF_Jhj9qIyIcxpBU_fQKbPaOb7sgQ8OSLC9-wfAfsU96rCXebT5uV4sjWDtTE6QYL22LcBIFyoMGNadDWX6KSLe1H_IId8ZSIs09FbgZPvp8tkycmb4tYsujEwwT2kzcojdB9IquQ4PM7mH0_M=w945-h945-s-no-gm?authuser=0";

  // Hide spinner after image loads
  headerLogoImg.addEventListener("load", () => {
    headerLogoImg.classList.add("loaded");
    headerLogoWrapper.classList.add("loaded"); // disables spinner
  });

  headerLogoImg.addEventListener("error", () => {
    console.warn("Header logo failed to load.");
    headerLogoWrapper.classList.add("loaded"); // stop spinner even if failed
  });
});
