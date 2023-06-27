//Calcular area e perimetro
const comprimento = 2.5;
const largura = 5;

function area(comprimento, largura){
    return comprimento * largura;
}

function perimetro(comprimento, largura){
    return 2 * (comprimento + largura)
}

const areaTotal = area(comprimento, largura);
const perimetroTotal = perimetro(comprimento, largura);

console.log(`Perimetro:${perimetroTotal}, Area:${areaTotal}`)