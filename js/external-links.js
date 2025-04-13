document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
  
    if (loginBtn) {
      loginBtn.addEventListener("click", function () {
        window.open("#home");
      });
    }
  
    if (signupBtn) {
      signupBtn.addEventListener("click", function () {
        window.open("#home");
      });
    }
  });
  
//https://www.facebook.com/login
//"", "_blank"