function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;


    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
                <h2>Game Over!</h2>
                <h3>Precione o botao para jogar novamente</h3>
                <button id="jogar-novamente" class="btn__jogar">Jogar Novamente</button>
                `
            document.body.style.backgroundColor = 'black'
        } else {
            elementoChute.innerHTML += `
            <div>Valor Inválido</div>`
        }
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto é ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn__jogar">Jogar Novamente</button>`
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor<i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})