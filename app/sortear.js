const menorValor = 1
const maiorValor = 100
const numeroSecreto = gertarNumeroAleatorio();

console.log(numeroSecreto)

function gertarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor+1);
}

document.getElementById('menor-valor').innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;