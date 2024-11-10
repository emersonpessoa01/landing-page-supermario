document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close-btn");
    const loginForm = document.getElementById("loginForm");
    const successMessage = document.getElementById("successMessage");

    loginBtn.addEventListener("click", () => {
      loginModal.style.display = "flex";
      loginForm.classList.remove("hidden");
      successMessage.style.display = "none";
    });

    closeBtn.addEventListener("click", () => {
      loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginForm.classList.add("hidden");
      successMessage.style.display = "block";
      loginForm.reset();
    });
  });