//Classificação de faixa etaria
const idade = 22;

function verifIdade(idade){

    if(idade < 0){
        return "Inválido";
    }

    if(idade <= 12){
        return "Criança";
    }
    else if(idade >= 13 && idade <= 17){
        return "Adolescente";
    }
    else if(idade >= 18 && idade <= 59){
        return "Adulto";
    }
    else if(idade >= 60){
        return "Idoso";
    }
}

const resultado = verifIdade(idade);

console.log(resultado);