//Comparação de números
const numero1 = 40;
const numero2 = 45;

function comparacao(numero1, numero2){
    if(numero1 > numero2){
        return  "O primeiro numero é maior que o segundo";
    }
    else if(numero2 > numero1){
        return "O segundo numero é maior que o primeiro";
    }
    else if(numero1 == numero2){
        return "Números iguais";
    }
}

const resultado = comparacao(numero1, numero2);
console.log(resultado);