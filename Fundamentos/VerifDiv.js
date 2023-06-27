//Verificando divisibilidade
const numero1 = 16;
const numero2 = 4;

function verificaDivisibilade(n1, n2){
    return n1 % n2 === 0;
}

const divisivel = verificaDivisibilade(numero1, numero2);

console.log(`Ò número ${numero1} é divísivel por ${numero2}? ${divisivel ? "Sim" : "Não"}`)