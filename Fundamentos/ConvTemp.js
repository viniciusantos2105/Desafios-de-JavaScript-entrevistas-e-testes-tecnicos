//Conversão de Temperatura
const celsius = 30;
const fahrenheit = 86;

function conversaoCelsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

function conversaoFahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9
}

console.log(`${celsius} graus Celsius equivalem a ${conversaoCelsiusToFahrenheit(celsius)} graus fahrenheit`)
console.log(`${fahrenheit} graus Fahrenheit equivalem a ${conversaoFahrenheitToCelsius(fahrenheit)} graus celsius`)