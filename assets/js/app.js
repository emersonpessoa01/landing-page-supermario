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
  const searchIcon = document.getElementById("searchIcon");

  // Função para buscar o jogo e chamar o slide
  function searchAndSlide() {
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
    gameInput.value = ""; // Limpa o campo de busca
  }

  // Lógica para pressionar Enter
  gameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchAndSlide();
    }
  });

  // Lógica para clicar no ícone de busca
  searchIcon.addEventListener("click", function () {
    searchAndSlide();
  });

  // Lógica para touch (em dispositivos móveis)
  searchIcon.addEventListener("touchstart", function () {
    searchAndSlide();
  });
});



/* Menu Hamburger */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

// Função para abrir/fechar o menu
menuBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // Impede o evento de propagação para o documento
  navbar.classList.toggle("show");
  menuBtn.classList.toggle("fa-times");
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
