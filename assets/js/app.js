document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
  const swiper = new Swiper(".swiper", {
    // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.

    direction: "horizontal",
    // Define a direção de transição dos slides como horizontal.
    loop: false,
    // Define que o carrossel não irá repetir os slides (não fará looping).

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
    },
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 800,
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false, // O
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
    },
  });

  document.addEventListener("keydown", function (event) {
    // Adiciona um listener para eventos de teclado.
    if (event.key === "ArrowLeft") {
      swiper.slidePrev();
      // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
    } else if (event.key === "ArrowRight") {
      swiper.slideNext();
      // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
    }
  });

  const gameInput = document.getElementById("gameInput");
  // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

  gameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let searchGame = gameInput.value.trim().toUpperCase();
      console.log("Valor digitado:", searchGame);

      switch (searchGame) {
        case "MARIO":
          swiper.slideToLoop(0);
          break;
        case "ZELDA":
          swiper.slideToLoop(1);
          break;
        case "DONKEY":
          swiper.slideToLoop(2);
          break;
        case "POKEMON":
          swiper.slideToLoop(3);
          break;
        default:
          alert("Jogo não foi encontrado");
          break;
      }
      gameInput.value = "";
    }
  });
});

/* Modal de Login */

const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.getElementById("loginForm");
const successMessage = document.getElementById("successMessage");

// Abre o modal ao clicar no botão de login
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
  loginForm.classList.remove("hidden");
  successMessage.style.display = "none";
});

// Fecha o modal ao clicar no botão "X"
closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// Ao submeter o formulário, exibe a mensagem de sucesso e limpa o formulário
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o comportamento padrão do envio
  loginForm.classList.add("hidden"); // Oculta o formulário
  successMessage.style.display = "block"; // Mostra a mensagem de sucesso
  loginForm.reset(); // Limpa o formulário após o envio
});

/* Menu Hamburger */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menuBtn.classList.toggle("fa-times");
});
