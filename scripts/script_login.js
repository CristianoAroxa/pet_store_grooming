const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log(`E-mail: ${email}, Senha: ${password}`);
});