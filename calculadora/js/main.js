/**
 * primeiro criar uma factory function
 * criar calculadora como se fosse um objeto
 * atributos em cima
 * metodos em baixo
 * arrow functions não mudam o comportamento do THIS
 */

function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            //chaves do meu objeto dentro do meu objeto THIS
            //alert('oi iniciei');
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Invalida!');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Invalida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;
                // o meu this não mudo dentro dessa funcao
                // por causa da arrow function!
                if (el.classList.contains('btn-num')) {
                    this.btnParadaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParadaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();