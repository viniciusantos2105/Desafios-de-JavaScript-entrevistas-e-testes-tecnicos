//Encontrar o elemento mais frequente
function elementoFrequente(arr){

    const contador = {};
    let elemento = arr[0];
    let maxContagem = 1;

    for(const valor of arr){
        if(!contador[valor]){
            contador[valor] = 1;
        }else{
            contador[valor]++;
        }
        
        if(contador[valor] > maxContagem){
            maxContagem = contador[valor];
            elemento = valor;
        }
    }
    
    return elemento;
}

const numeros = [2, 3, 4, 2, 1, 5, 2, 1, 4, 4, 4];

const resultadoFrequencia = elementoFrequente(numeros);
console.log(`O elemento mais frequente no array é ${resultadoFrequencia}`);