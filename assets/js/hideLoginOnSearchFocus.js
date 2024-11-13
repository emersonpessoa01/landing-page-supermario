// Seleciona o campo de input dentro da classe 'search'
const searchInput = document.querySelector('.search input');

// Seleciona o botão de login pelo ID 'login-btn'
const loginButton = document.getElementById('login-btn');

// Adiciona um evento de 'focus' ao input para detectar quando ele recebe foco
searchInput.addEventListener('focus', () => {
    // Oculta o botão de login quando o input recebe foco
    loginButton.style.display = 'none';
});

// Adiciona um evento de 'blur' ao input para detectar quando ele perde o foco
searchInput.addEventListener('blur', () => {
    // Exibe o botão de login novamente quando o input perde o foco
    loginButton.style.display = 'block';
});
