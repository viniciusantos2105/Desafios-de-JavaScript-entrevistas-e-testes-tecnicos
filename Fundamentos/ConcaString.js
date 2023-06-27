//Concatenação de Strings
const nome = "Vinicius";
const idade = "22";
const cidade = "Salvador";

console.log(`Nome:${nome}` + `\nIdade:${idade}` + `\nCidade:${cidade}\n`)

//Outra maneira

function criarMensagem(nome, idade, cidade){
    return `Òla ${nome}, Sua idade é ${idade} e mora em ${cidade}`;
}

const mensagem = criarMensagem(nome, idade, cidade);
console.log(mensagem)