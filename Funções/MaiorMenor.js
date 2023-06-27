//Retornar maior valor e menor valor
const num1 = 10;
const num2 = 20;

function maiorValor(num1, num2){
    if(num1 > num2){
        return `O maior valor é ${num1}`;
    }else{
        return `O maior valor é ${num2}`;
    }
}

function menorValor(num1, num2){
    if(num2 < num1){
        return `O menor valor é ${num2}`;
    }else{
        return `O menor valor é ${num1}`;
    }
}

console.log(maiorValor(num1, num2));
console.log(menorValor(num1, num2));

//Outra maneira 
function maximo(a, b){
    return a > b ? a : b;
}

function menor(a, b){
    return a < b ? a : b;
}

console.log(`O maior valor entre ${num1} e ${num2} é ${maximo(num1, num2)}`);
console.log(`O menor valor entre ${num1} e ${num2} é ${menor(num1, num2)}`);