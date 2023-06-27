//Calculadora com switch
const numero1 = 24;
const numero2 = 12;
const operador = "+";

function calculadora(numero1, numero2, operador){
    switch(operador){
        case "+":
            return `${numero1} + ${numero2} = ${numero1 + numero2}`;
            break;
        case "-":
            return `${numero1} - ${numero2} = ${numero1 - numero2}`;
            break;
        case "*":
            return `${numero1} * ${numero2} = ${numero1 * numero2}`;
            break;
        case "/":
            return `${numero1} / ${numero2} = ${numero1 / numero2}`;
            break;
        default:
            return "Operador inválido";
    }
}

const resultado = calculadora(numero1, numero2, operador);
console.log(resultado);