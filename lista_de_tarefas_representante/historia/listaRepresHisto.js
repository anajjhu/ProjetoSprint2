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

    let historia = JSON.parse(localStorage.getItem('historia')) || []

    historia.push({
        materiahist: materia.value,
        conteudohist: conteudo.value,
        prazohist: prazo.value,
        descricaohist: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('historia', JSON.stringify(historia))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let historia = JSON.parse(localStorage.getItem('historia')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    historia.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiahist}</th>
            <th id="mathTar">${item.conteudohist}</th>
            <th id="mathTar">${item.prazohist}</th>
            <th id="mathTarDesc">${item.descricaohist}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${historia.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${historia.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let historia = JSON.parse(localStorage.getItem('historia')) || []
    if(historia[indice].usuario == 'representante') {
    historia.splice(indice, 1)
    localStorage.setItem('historia', JSON.stringify(historia))
   
    location.reload()
    } else if(historia[indice].usuario == 'professor') {
        alert('Você não pode excluir a tarefa de Professores!')
    }
}

//Editar Tarefas
function EditarTarefa(indice) {
    let historia = JSON.parse(localStorage.getItem('historia')) || []
    if(historia[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = historia[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiahist
    conteudo.value = tarefa.conteudohist
    prazo.value = tarefa.prazohist
    descricao.value = tarefa.descricaohist

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiahist = materia.value
        tarefa.conteudohist = conteudo.value
        tarefa.prazohist = prazo.value
        tarefa.descricaohist = descricao.value

        // Salva a tarefa atualizada no localStorage
        historia[indice] = tarefa
        localStorage.setItem('historia', JSON.stringify(historia))

        location.reload()
    }
    } else if(historia[indice].usuario == 'professor') {
    alert('Você não pode editar a tarefa de Professores!')
    }
}