
//Ao apertar o botão enviar, acionaremos o evento Submit.
document.getElementById('formulario').addEventListener('submit', function(evento) {
    //procura no HTML um elemento de id = 'formulario'.
    //Adiciona a espera de um evento.
    //Submit é o tipo de evento (Enviar o formulário).
    //função executada no evento submit.
    
    evento.preventDefault(); // Previne o envio padrão do formulário

    // Limpar mensagens de erro.
    document.querySelectorAll('span[id^="alerta-"]').forEach(span => span.style.visibility = 'hidden');
    //Retorna lista de elementos (span com id alerta-) em todo o documento.
    //Para cada elemento que atender a condição, muda a visibilidade para escondido.

    let valido = true;

    // Validação do nome
    const nome = document.getElementById('nome').value.trim();
    //trim() retira os espaços do inicio e final
    if (nome === '') {
        document.getElementById('alerta-nome').style.visibility = 'visible';
        //Alteramos a visibilidado do elemento de id = "alerta-nome" para visivel
        valido = false;
    }

    // Validação da idade
    const age = document.getElementById('age').value;
    if (age === '' || age < 18) {
        document.getElementById('alerta-age').style.visibility = 'visible';
        valido = false;
    }

    // Validação do telefone
    const telef = document.getElementById('telef').value.trim();
    const telPadrao = /^\(\d{2}\)\d{5}-\d{4}$/; // Formato (XX)XXXXX-XXXX
    // ^ é inicio da String e $ o final. Não pode haver espaço no começo ou fim. {indica a quantia de valores}
    if (telef === '' || !telPadrao.test(telef)) {
        document.getElementById('alerta-telef').style.visibility = 'visible';
        valido = false;
    }

    // Validação do email
    const email = document.getElementById('email').value.trim();
    if (email === '' || !email.includes('@')) {
        document.getElementById('alerta-email').style.visibility = 'visible';
        valido = false;
    }

    // Validação do gênero
    const gen = document.getElementById('gen').value;
    if (gen === '') {
        document.getElementById('alerta-gen').style.visibility = 'visible';
        valido = false;
    }

    // Validação do filme
    const filme = document.querySelector('input[name="filme"]:checked');
    //Retorna o primeiro elemento no documento de acordo com a condição. Primeiro elemento input[name="filme"] que esteja selecionado
    if (filme === null ) {
    //Se não houver nenhum filme selecionado, retorno será nulo
        document.getElementById('alerta-filme').style.visibility = 'visible';
        valido = false;
    }

    // Validação do tamanho da caixa
    const caixa = document.querySelector('input[name="caixa"]:checked');
    if (caixa === null ) {
        document.getElementById('alerta-caixa').style.visibility = 'visible';
        valido = false;
    }

    // Validação do tamanho da camisa
    const tam = document.querySelector('input[name="tam"]:checked');
    if (tam === null) {
        document.getElementById('alerta-tam').style.visibility = 'visible';
        valido = false;
    }

    // Se todos os campos estiverem válidos, envie o formulário e limpe-o
    if (valido) {
        alert('Formulário enviado com sucesso!');
        this.reset(); // Limpa todos os campos do formulário
    }
});