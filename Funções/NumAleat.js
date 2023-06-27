//Função para gerar array de numeros aleatorios
function aleatorios(numero, max){
    const array = [];
    for(let x = 0; x < numero; x++){
        array.push(Math.floor(Math.random() * (max + 1)));
    }
    return array;
}

const max = 20;
const num = 6;
const result = aleatorios(num, max);
console.log(result) 