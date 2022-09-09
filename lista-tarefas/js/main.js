const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    //console.log(e);
    if (e.keyCode === 13) {
        //console.log('enter pressionado');
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    //btnApagar.classList.add('apagar');
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'apagar essa tarefa')
    li.appendChild(btnApagar);
}

function criaTarefa(textoInput) {
    console.log(textoInput);
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limaInput()
    criaBotaoApagar(li);
    salvaTarefas();
}


btnTarefa.addEventListener('click', function (e) {
    //console.log(inputTarefa.value);
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;
    //console.log(el);
    if (el.classList.contains('apagar')) {
        //console.log('apagar clicado'); 
        //console.log(el.parentElement);
        el.parentElement.remove();
        salvaTarefas();
    }
});

function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    //console.log(liTarefas);
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        //console.log(tarefa.innerText);
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        //console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    //console.log(tarefasJSON)
    //console.log(listaDeTarefas);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    //console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();