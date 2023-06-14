let btnFechar = document.getElementById('btnSalvar')
let btnAdd = document.getElementById('btnAdicionar')
let materia = document.getElementById("materiaMat")
let conteudo = document.getElementById("conteudo")
let prazo = document.getElementById("prazo")
let descricao = document.getElementById("descricao")

function abrir() {
    let fade = document.getElementById('fade')
    fade.style.display = 'flex'

    let telinha = document.getElementById('telinha')
    telinha.style.display = 'flex'

    let content = document.getElementById('form')
    form.style.display = 'flex'
}

function fecharSalvar() {
    fade.style.display = 'none'
    telinha.style.display = 'none'
    form.style.display = 'none'

    let ingles = JSON.parse(localStorage.getItem('ingles')) || []

    ingles.push({
        materiaing: materia.value,
        conteudoing: conteudo.value,
        prazoing: prazo.value,
        descricaoing: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('ingles', JSON.stringify(ingles))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let ingles = JSON.parse(localStorage.getItem('ingles')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    ingles.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiaing}</th>
            <th id="mathTar">${item.conteudoing}</th>
            <th id="mathTar">${item.prazoing}</th>
            <th id="mathTarDesc">${item.descricaoing}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${ingles.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${ingles.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let ingles = JSON.parse(localStorage.getItem('ingles')) || []
    if(ingles[indice].usuario == 'representante') {
    ingles.splice(indice, 1)
    localStorage.setItem('ingles', JSON.stringify(ingles))
   
    location.reload()
    } else if(ingles[indice].usuario == 'professor') {
        alert('Você não pode excluir a tarefa de Professores!')
    }
}

//Editar Tarefas
function EditarTarefa(indice) {
    let ingles = JSON.parse(localStorage.getItem('ingles')) || []
    if(ingles[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = ingles[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiaing
    conteudo.value = tarefa.conteudoing
    prazo.value = tarefa.prazoing
    descricao.value = tarefa.descricaoing

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiaing = materia.value
        tarefa.conteudoing = conteudo.value
        tarefa.prazoing = prazo.value
        tarefa.descricaoing = descricao.value

        // Salva a tarefa atualizada no localStorage
        ingles[indice] = tarefa
        localStorage.setItem('ingles', JSON.stringify(ingles))

        location.reload()
    }
    } else if(ingles[indice].usuario == 'professor') {
        alert('Você não pode editar a tarefa de Professores!')
}
}