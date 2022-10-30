function adicionar(um, dois) {
    let soma = um + dois;
    return soma;
}

function subtracao (um, dois) {
    let subtracao = um - dois;
    return subtracao;
}

function multiplicacao (um, dois) {
    let multiplicacao = um * dois;
    return multiplicacao

}

function divisao (um, dois) {
    let divisao = um / dois;
    return divisao
}

console.log ("testando calculadora")
console.log (adicionar(10, 05))
console.log (subtracao(8, 04))
console.log (multiplicacao(3, 8))
console.log (divisao(15, 03))
console.log (divisao(15, 00))

//Quadrado do número
function quadradoDoNumero(dois) {
    console.log (multiplicacao(dois, dois)) 
}

quadradoDoNumero (2)


//Media de três números
function mediaDeTresNumeros (um, dois, tres) {
    let mediaDeTresNumeros = adicionar (um, dois, tres);
    let total = divisao (mediaDeTresNumeros, 3);
    return total
}

console.log(mediaDeTresNumeros (18, 05, 05));

//Calcula Porcentagem
function calculaPorcentagem(um, dois) {
    let calculaPorcentagem = multiplicacao (um, dois);
    let total = divisao (calculaPorcentagem, 100);
    return total
}

console.log (calculaPorcentagem(300, 15));

//Gerador de porcentagem
function geradorDePorcentagem (um, dois) {
    let geradorDePorcentagem = multiplicacao (um, 100);
    let total = divisao (geradorDePorcentagem, dois);
    return total
}

console.log (geradorDePorcentagem(2, 200));