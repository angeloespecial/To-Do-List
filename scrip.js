// Elementos
const adicionar = document.querySelector(`.tarefas`);
const caixaUl = document.querySelector(`.caixaUl`);

// Funções 
function colocar(e) {
    if (e.key === `Enter`) {
        const colocar = e.target.value;

        //definir quantidades de caracteres
        if (colocar.length > 32) {
            alert(`o texto passou de 32 caracteres`);
            e.target.value = ``
            return;
        };

        // Checkbox e listaLi 
        const listaLi = document.createElement(`li`);
        const checkbox = document.createElement(`input`);
        checkbox.type = `checkbox`;
        listaLi.classList.add(`litarefas`)
        
        // Botão de deletar 
        const botaolixo = document.createElement(`button`);
        botaolixo.textContent = `Remover`;
        botaolixo.classList.add(`lixo`);
        botaolixo.addEventListener(`click`, function() {
            caixaUl.removeChild(novadiv);
        });

        const listaLiUL = document.createElement(`ul`);
        listaLiUL.appendChild(listaLi);
        
        const novadiv = document.createElement(`div`);

        listaLi.appendChild(checkbox);
        novadiv.appendChild(listaLiUL);
        novadiv.appendChild(botaolixo);
        caixaUl.appendChild(novadiv);

        // Botão de editar com a fução e limite de caractares
        const textoNode = document.createTextNode(` ` + colocar);
        listaLi.appendChild(textoNode);

        const botaoeditar = document.createElement('button');
        botaoeditar.textContent = 'Editar';
        botaoeditar.classList.add(`editar`);
        botaoeditar.addEventListener('click', function() {
            const novoTexto = prompt('Edite o texto:', textoNode.nodeValue.trim());
            if (novoTexto !== null && novoTexto !== '' && novoTexto.length <= 32) {
                textoNode.nodeValue = ` ` + novoTexto;
            }else if (novoTexto.length > 32) {
                alert(`o texto passou de 32 caracteres`);
                e.target.value = ``
                return;
            }
        });
        novadiv.appendChild(botaoeditar);

        e.target.value = ``;
    }
}

// função que filtra os check-box 
function filtrarCheckboxes(mostrarmarcado) {
    const divs = caixaUl.querySelectorAll(`div`);
    divs.forEach(div => {
        const checkbox = div.querySelector('input[type="checkbox"]');
        if (checkbox) {
            if (checkbox.checked === mostrarmarcado) {
                div.style.display = `block`;
            } else {
                div.style.display = `none`;
            }
        }
    });
}

// função que mostra todas as tarefas
function mostrartudo() {
    const divs = caixaUl.querySelectorAll(`div`);
    divs.forEach(div => {
        div.style.display = `block`;
    });
}

// Eventos
adicionar.addEventListener(`keyup`, colocar);


// botao de filtro 
const botaomarcado = document.createElement(`button`);
botaomarcado.textContent = `Mostrar tarefas feitas`;
botaomarcado.classList.add(`marcadofeito`);
botaomarcado.addEventListener(`click`, function() {
    filtrarCheckboxes(true);
});
document.body.appendChild(botaomarcado);

const botaodesmarcado = document.createElement(`button`);
botaodesmarcado.textContent = `Mostrar tarefas não feitas`;
botaodesmarcado.classList.add(`naomarcado`);
botaodesmarcado.addEventListener(`click`, function() {
    filtrarCheckboxes(false);
});
document.body.appendChild(botaodesmarcado);

const botaoMostrartudo = document.createElement(`button`);
botaoMostrartudo.textContent = `Mostrar todas as tarefas`;
botaoMostrartudo.classList.add(`todastarefas`);
botaoMostrartudo.addEventListener(`click`, mostrartudo);
document.body.appendChild(botaoMostrartudo);