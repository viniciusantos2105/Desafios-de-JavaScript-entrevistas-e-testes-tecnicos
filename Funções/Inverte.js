//Função para inverter string
function inverterString(str){
   return str.split('').reverse().join('');
}

const textoParaInverter = "JavaScript";
const textoInvertido = inverterString(textoParaInverter);

console.log(`A string para inverter ${textoParaInverter} invertida é ${textoInvertido}`);