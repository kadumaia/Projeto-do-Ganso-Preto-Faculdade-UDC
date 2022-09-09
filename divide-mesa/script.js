function formataPessoa(numeroPessoas) {
    if (numeroPessoas === 1) {
        return numeroPessoas + ' pessoa';
    } else {
        return numeroPessoas + ' pessoas';
    }
}

function formataDinheiro(dinheiro) {
    dinheiro = Math.ceil(dinheiro * 100) / 100;
    dinheiro = dinheiro.toFixed(2);
    return 'R$' + dinheiro;
}

function atualizar() {
    let conta = Number(document.getElementById('suaConta').value);
    let porcentGorjeta = document.getElementById('inputGorjeta').value;
    let dividido = document.getElementById('inputRateio').value;
    //console.log({ conta, porcentGorjeta, dividido });

    let valorGorjeta = conta * (porcentGorjeta / 100);
    let valorGorjetaCada = valorGorjeta / dividido;
    let novaContaParaCada = (conta + valorGorjeta) / dividido;

    document.getElementById('porcentGorjeta').innerHTML = porcentGorjeta + '%';
    document.getElementById('valorGorjeta').innerHTML = formataDinheiro(valorGorjeta);
    document.getElementById('totalComGorjeta').innerHTML = formataDinheiro(conta + valorGorjeta);
    document.getElementById('valorRateio').innerHTML = formataPessoa(dividido);
    document.getElementById('contaPorPessoa').innerHTML = formataDinheiro(novaContaParaCada);
    document.getElementById('gorjetaPorPessoa').innerHTML = formataDinheiro(valorGorjetaCada);

}

let container = document.getElementById('container');

container.addEventListener('input', atualizar);
