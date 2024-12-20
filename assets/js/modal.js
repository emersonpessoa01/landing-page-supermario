document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close-btn");
    const loginForm = document.getElementById("loginForm");
    const successMessage = document.getElementById("successMessage");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
  
    // Expressão regular para validar o email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    // Expressão regular para validar a senha (pelo menos 8 caracteres, contendo letras, números e símbolos)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*()_+{}|:;<>,.?/~#=+\\-])[A-Za-z\d!$%^&*()_+{}|:;<>,.?/~#=+\\-]{8,}$/;
  
    // Abre o modal ao clicar no botão de login
    loginBtn.addEventListener("click", () => {
      loginModal.style.display = "flex";
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
  
    // Alterna a visibilidade da senha
    const togglePassword = document.getElementById("togglePassword");
    togglePassword.addEventListener("click", () => {
      const type = password.type === "password" ? "text" : "password";
      password.type = type;
  
      // Alterna o ícone de olho
      togglePassword.classList.toggle("fa-eye");
      togglePassword.classList.toggle("fa-eye-slash");
    });
  
    // Validação do formulário
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Previne o comportamento padrão do envio
      let isValid = true;
  
      // Verifica o campo de email (usuário)
      if (!emailRegex.test(username.value.trim())) {
        usernameError.style.display = "block";
        isValid = false;
      } else {
        usernameError.style.display = "none";
      }
  
      // Verifica o campo de senha
      if (!passwordRegex.test(password.value.trim())) {
        passwordError.style.display = "block";
        isValid = false;
      } else {
        passwordError.style.display = "none";
      }
  
      // Se ambos os campos estiverem válidos, prossegue com o envio
      if (isValid) {
        loginForm.classList.add("hidden"); // Oculta o formulário
        successMessage.style.display = "block"; // Mostra a mensagem de sucesso
  
        // Extrai o nome do usuário (parte do e-mail antes do "@")
        const userName = username.value.split('@')[0];
  
        successMessage.innerHTML = `<h3>Bem-vindo, ${userName}!</h3> <p>Login realizado com sucesso.</p>`; // Exibe o nome de usuário
        loginForm.reset(); // Limpa o formulário após o envio
      }
    });
  });
  