/**
 * new date (123123123123213) <- recebe os milisegundos do date
 * depois tem que converter para uma data normal
 * 
 */

function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC',
        });
    }
    console.log(criaHoraDosSegundos(10));

    const relogio = document.querySelector('.relogio');

    let segundos = 0;
    let timer;

    function iniciaRelogio(params) {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }


    document.addEventListener('click', function (evento) {
        const el = evento.target;
        //console.log(el);

        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            //console.log('Voce clicou em zeraar');
        }

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

    });

}

relogio();

