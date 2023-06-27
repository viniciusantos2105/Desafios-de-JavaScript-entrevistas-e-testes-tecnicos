//Verificando se a palavra é um palindromo
function inverter(texto){
    const textReserve = texto.split('').reverse().join('');
    if(textReserve === texto){
        return true;
    }else{
        return false;
    }
}

const texto = "anel";

const result = inverter(texto);
console.log(result);