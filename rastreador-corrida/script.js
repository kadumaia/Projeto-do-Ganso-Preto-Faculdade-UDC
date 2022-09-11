const meta = 25;

let entradas = [];

const wrapperEntradas = document.querySelector('#entradas');

document.querySelector('#alvo').innerHTML = meta;

///////////////////////////////////////////////////////////////////////////////////////////////

function adicionarKilometros(novaKilometragem) {
    wrapperEntradas.removeChild(wrapperEntradas.firstElementChild);
    const itemLista = document.createElement("li");
    const valorLista = document.createTextNode(novaKilometragem.toFixed(1));
    itemLista.appendChild(valorLista);

    wrapperEntradas.appendChild(itemLista);
}

function redutor(total, valorAtual) {
    return total + valorAtual;
}

function calcTotal(entradas) {
    const valorTotal = entradas.reduce(redutor).toFixed(1)
    document.getElementById("total").innerHTML = valorTotal;
    document.getElementById("progessoTotal").innerHTML = valorTotal;
}

function calcMedia() {
    const media = (entradas.reduce(redutor) / entradas.length).toFixed(1);
    document.getElementById('media').innerHTML = media;
}

function maiorDistancia() {
    const maior = Math.max(...entradas)
    document.getElementById('progessoTotal').innerHTML = maior;
}

function calcMeta(){
    const valorTotal = entradas.reduce(redutor).toFixed(1);
    const percentCompletado = valorTotal / (meta / 100);
    const progressoCirulo = document.querySelector('#progressoCirculo');
    if (percentCompletado > 100) percentCompletado === 100;

    progressoCirulo.style.background = `conic-gradient(#70db70 ${percentCompletado}%, #2d3740 ${percentCompletado}% 100%)`;
}

function btnSubmmit(evento) {
    evento.preventDefault();
    const kilometros = Number(document.querySelector('#inputKm').value);
    if (!kilometros) return;
    document.querySelector('form').reset();
    entradas.push(kilometros);
    adicionarKilometros(kilometros)
    calcTotal(entradas);
    calcMedia(entradas);
    maiorDistancia();
    calcMeta();
}

const form = document.
    querySelector('form')
    .addEventListener('submit', btnSubmmit);