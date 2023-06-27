//Preço de tarifa
const idade = 60;
const tarifa = 2.50;
const tipoPasse = "idoso";

function tarifas(idade, tipoPasse){
    if(idade <= 6){
        return "Tarifa grátis";
    }
    if(tipoPasse === "estudante"){
        return tarifa - ((50 * tarifa) / 100);
    }
    if(idade >= 60 && tipoPasse === "idoso"){
        return tarifa - ((30 * tarifa) / 100);
    }
    else{
        return tarifa;
    }
}

const resultado = tarifas(idade, tipoPasse)
console.log("O preço dá tarifa é R$" + resultado)