let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',
    {rate:1.2});
}

function exibirMensagensIniciais() {
exibirTextoNaTela('h1', `Jogo do número secreto`);
exibirTextoNaTela('p', `Escolha um número entre 1 e 10`);
}

exibirMensagensIniciais();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativa' : 'tentativas' ;
        let mensagemTentativas = `Parabéns você acertou o númeor secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O númeror secreto é maior');

        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;

    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagensIniciais();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


