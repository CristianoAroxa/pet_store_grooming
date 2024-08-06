const cadastroForm = document.getElementById('cadastro-form');

cadastroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const raca = document.getElementById('raca').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const descricao = document.getElementById('descricao').value;

    // Aqui você pode adicionar a lógica para cadastrar o pet
    console.log(`Nome: ${nome}, Raça: ${raca}, Idade: ${idade}, Sexo: ${sexo}, Descrição: ${descricao}`);
});