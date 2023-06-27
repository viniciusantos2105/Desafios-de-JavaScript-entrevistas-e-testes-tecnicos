//Calculadora de IMC
const peso = 72;
const altura = 1.82;

function calculoImc(peso, altura){ 
    return peso / (altura * altura);
}

console.log(`Seu IMC é ${calculoImc(peso, altura)}`)