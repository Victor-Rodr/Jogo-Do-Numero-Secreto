
//   function olaMundo() {
//     console.log('Olá, mundo!')
// }
// olaMundo();

// function olaComNome(nome) {
//     console.log(`Olá, ${nome}`);
// }
// olaComNome('Artur');

// function numeroDobrado(a) {
//     return a * 2
// }
// let resultado = numeroDobrado(5);
// console.log(resultado);

// function mediaTresValores(a, b, c) {
//     return (a + b + c) / 3;
// }
// let resultado1 = mediaTresValores(150, 75, 75);
// console.log(resultado1);

// function numeroMaior(a, b) {
//     return a > b ? a : b;
// }
// let numeros = numeroMaior(10, 15);
// console.log(numeros);

// function numeroAoQuadrado(a) {
//     return a * a
// }
// let resultado2 = numeroAoQuadrado(9);
// console.log(resultado2);

// let altura = prompt('Qual a sua altura');
// let peso = prompt('Qual o seu peso');


// function calculoImc(altura, peso) {
//     let resultadoImc = peso / (altura * 2);
//     return parseInt(resultadoImc);
// }


// console.log(calculoImc(altura,peso));

// let numeroFatorial = 4;

// while (numeroFatorial > 1) {
//     numeroFatorial--

// let contagemFatorial = numeroFatorial * numeroFatorial;

// console.log(contagemFatorial);
// }


// function factorialize(num) {
//     // Passo 1. Criar uma variável result para armazenar o valor de num
//     var result = num;

//     // Se num = 0 OU num = 1, o fatorial retornará 1
//     if (num === 0 || num === 1) 
//       return 1; 

//     // Passo 2. Criar o laço WHILE 
//     while (num > 1) { 
//       num--; // diminuir 1 a cada iteração
//       result = result * num; // ou result *= num; 
//       /* 
//                       num           num--      var result      result *= num         
//       1ª iteração:   5             4            5             20 = 5 * 4      
//       2ª iteração:   4             3           20             60 = 20 * 3
//       3ª iteração:   3             2           60            120 = 60 * 2
//       4ª iteração:   2             1          120            120 = 120 * 1
//       5ª iteração:   1             0          120
//       Fim do laço WHILE 
//       */
//     }

//     // Passo 3. Retornar o fatorial do inteiro fornecido
//     return result; // 120
//   }
//   factorialize(5);


//     let valorFatorial = parseInt(prompt('Número'));

//   function fatorizacao(valorFatorial) {

//     if (valorFatorial === 0 || valorFatorial === 1){
//         return 1;

//     } while (valorFatorial > 1) {
//         valorFatorial--;
//         numbFatorial = valorFatorial * valorFatorial;

//     }
//     return numbFatorial;

//   }

//   console.log(fatorizacao(valorFatorial));


/*

let dolar = prompt('Quantos Dolares?');

function conversorReal (dolar) {
    conversor = dolar * 4.80;
    resultado = conversor.toFixed(2)
    return resultado;
}

console.log(conversorReal(dolar));

*/

// let base = prompt('base (m2)');
// let altura = prompt('altura (m)');

// function perimetro (base, altura) {
//     valorArea  = base *altura;
//     return valorArea;

// }

// alert(`Tem ${perimetro(base,altura)} metros quadrados`);

// let raio = prompt('raio do circulo');
// let pi = 3.14;

// function perimetro(raio) {

//     comprimento = 2 * pi * raio;
//     resultadoComprimento = comprimento.toFixed(2);

//     return resultadoComprimento;
// }

// console.log(perimetro(raio)); 

// let tabuadaNumero = prompt('Escolha um número para a tabuada');

// // function tabuada(tabuadaNumero) {
// //     while (let i = 1; 1 <= 10; i++) {
// //         inicio++;
// //         soma = inicio * tabuadaNumero;
// //         return soma;
// //     }
// //     console.log(tabuada(tabuadaNumero));2
// // }

// // exibirTabuada(valorTabuada);

// let valorTabuada = prompt('Informe o valor: ');

// function exibirTabuada (valorTabuada) {
//     console.log(`Tabuada do valor escolhido ${valorTabuada}`);

//     for(let i = 1; 1 <= 10; i++) {
//         let adicaoTabuada = valorTabuada * i;
//         console.log(`${valorTabuada} x ${i} = ${adicaoTabuada}`);
//     }
// }

// console.log(exibirTabuada(valorTabuada));

// let altura = prompt('altura');
// let peso = prompt('peso');

// function imc(altura,peso) {
//     let indiceDeMassaCorporal = peso / (altura * altura);
//     let resultado = indiceDeMassaCorporal.toFixed(2)1.75;
//     return resultado;

// }

// console.log(imc(altura,peso));

// let fatorial = prompt('Fatorial');
// let resultado = fatorial;
// let primeiroMultiplicador = resultado - 1;

// function numeroFatorial(primeiroMultiplicador,resultado) {
//   for(primeiroMultiplicador = i; i>1 ; i--){
//     resultado *= i;
//     return resultado;
//   }
//   return resultado;
// };

// console.log(numeroFatorial(primeiroMultiplicador,resultado));

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }

//   console.log(factorialize(5));

// function numeroFatorial(fatorial) {
//     if (fatorial < 0) { return -1 }
//     else if ( fatorial == 0) {
//         return 1;
//     }else {
//         return fatorial * (numeroFatorial(fatorial -1));
//     }

// }

// console.log(numeroFatorial(5));

let listaGenerica = []; //Criação lista genérica;
let linguagemDeProgramacao = ['JavaScript','C','C++','Kotlin','Python']; //criação de uma lista de programação;
console.log(linguagemDeProgramacao); 
linguagemDeProgramacao.push('java','Ruby','GoLang'); //adição de três itens;
linguagemDeProgramacao[0]; //para exibir o primeiro item;
linguagemDeProgramacao[1]; //para exibir o segundo item;
linguagemDeProgramacao[2]; //para exibir o terceiro item;  