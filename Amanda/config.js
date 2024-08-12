document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Limpar mensagens de erro
    document.querySelectorAll('span[id^="alert-"]').forEach(span => span.style.visibility = 'hidden');

    let isValid = true;

    // Validação do nome
    const nome = document.getElementById('nome').value.trim();
    if (nome === '') {
        document.getElementById('alert-nome').style.visibility = 'visible';
        isValid = false;
    }

    // Validação da idade
    const age = document.getElementById('age').value;
    if (age === '' || age < 18) {
        document.getElementById('alert-age').style.visibility = 'visible';
        isValid = false;
    }

    // Validação do telefone
    const telef = document.getElementById('telef').value.trim();
    const telPattern = /^\(\d{2}\) \d{5}-\d{4}$/; // Formato (XX) XXXXX-XXXX
    if (telef === '' || !telPattern.test(telef)) {
        document.getElementById('alert-telef').style.visibility = 'visible';
        isValid = false;
    }

    // Validação do email
    const email = document.getElementById('email').value.trim();
    if (email === '' || !email.includes('@')) {
        document.getElementById('alert-email').style.visibility = 'visible';
        isValid = false;
    }

    // Validação do gênero
    const gen = document.getElementById('gen').value;
    if (gen === '') {
        document.getElementById('alert-gen').style.visibility = 'visible';
        isValid = false;
    }

    // Validação do filme
    const filme = document.querySelector('input[name="filme"]:checked');
    if (!filme) {
        document.getElementById('alert-filme').style.visibility = 'visible';
        isValid = false;
    }

    // Validação do tamanho da caixa
    const caixa = document.querySelector('input[name="caixa"]:checked');
    if (!caixa) {
        document.getElementById('alert-caixa').style.visibility = 'visible';
        isValid = false;
    }

    // Validação do tamanho da camisa
    const tam = document.querySelector('input[name="tam"]:checked');
    if (!tam) {
        document.getElementById('alert-tam').style.visibility = 'visible';
        isValid = false;
    }

    // Se todos os campos estiverem válidos, envie o formulário e limpe-o
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        this.reset(); // Limpa todos os campos do formulário
    }
});