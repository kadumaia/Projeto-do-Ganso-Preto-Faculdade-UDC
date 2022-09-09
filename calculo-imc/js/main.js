// capiturar evento do submit do formulario

const form = document.querySelector('#formulario')

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    // console.log(inputPeso, inputAltura);

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);

    if (!peso) {
        setResultado('Peso Invalido!!', false);
        return;
    }


    if (!altura) {
        setResultado('Altura Invadlida!!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(mensagem, true);

});

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade 1', 'Obesidade 2', 'Obesidade 3',];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}



function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragafo-resultado');
    } else {
        p.classList.add('errado');
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}