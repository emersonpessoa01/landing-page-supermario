/* Menu Hamburger */

const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  if (menuBtn.classList.contains("rotated")) {
    menuBtn.style.transform = "rotate(0deg)";
    menuBtn.classList.remove("rotated");
  } else {
    menuBtn.style.transform = "rotate(90deg)";
    menuBtn.classList.add("rotated");
  }
});


// Fechar o menu ao clicar em qualquer link dentro da navbar
navbar.addEventListener("click", function (event) {
  if (event.target.tagName === "A") { // Verifica se clicou em um link
    navbar.classList.remove("show");
    menuBtn.classList.remove("fa-times");
  } else if (navbar.classList.contains("show")) { // Se navbar estiver aberta e clicou fora do link
    navbar.classList.remove("show");
    menuBtn.classList.remove("fa-times");
  }
});

// Fechar o menu ao clicar fora da navbar e do botão de menu
document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && event.target !== menuBtn) { 
    navbar.classList.remove("show");
    menuBtn.classList.remove("fa-times");
  }
});
