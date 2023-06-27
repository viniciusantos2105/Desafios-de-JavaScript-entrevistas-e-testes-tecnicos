//Função para conferir vogais
function contarVogais(str){
    const vogais = "aeiouAEIOU";

    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(vogais.includes(str[i])){
            count++;
        }
    }

    return count;
}

const texto = "Testando"

const contagemDeVogais = contarVogais(texto);

console.log(`A quantidade de vogais na string é ${texto} é ${contagemDeVogais}`)
