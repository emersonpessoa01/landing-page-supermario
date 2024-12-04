/* Menu Hamburger */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // Impede o evento de propagação
  navbar.classList.toggle("show");
  
  if (menuBtn.classList.contains("fa-times")) {
    menuBtn.classList.remove("fa-times");
    menuBtn.style.transform = "rotate(0deg)";
  } else {
    menuBtn.classList.add("fa-times");
    menuBtn.style.transform = "rotate(90deg)";
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
