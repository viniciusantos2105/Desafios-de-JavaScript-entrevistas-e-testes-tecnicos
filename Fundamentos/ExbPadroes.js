//Exibição de padrões
const exb = "*"

function padrao(exb){
    for(let x = 0; x <= 10; x++){
        exb += "*";
        console.log(exb);
    }
}

console.log(padrao(exb));

const X = 10;
//Outra forma 
for(let i = 1; i <= X; i++){
    console.log("*".repeat(i));
}