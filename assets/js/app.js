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
    }
  });
});
