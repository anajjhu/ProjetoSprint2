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

    let edf = JSON.parse(localStorage.getItem('edf')) || []

    edf.push({
        materiaedf: materia.value,
        conteudoedf: conteudo.value,
        prazoedf: prazo.value,
        descricaoedf: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('edf', JSON.stringify(edf))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let edf = JSON.parse(localStorage.getItem('edf')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    edf.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiaedf}</th>
            <th id="mathTar">${item.conteudoedf}</th>
            <th id="mathTar">${item.prazoedf}</th>
            <th id="mathTarDesc">${item.descricaoedf}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${edf.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${edf.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let edf = JSON.parse(localStorage.getItem('edf')) || []
    if(edf[indice].usuario == 'representante') {
    edf.splice(indice, 1)
    localStorage.setItem('edf', JSON.stringify(edf))
   
    location.reload()
    } else if(edf[indice].usuario == 'professor') {
        alert('Você não pode excluir a tarefa de Professores!')
    }
}

//Editar Tarefas
function EditarTarefa(indice) {
    let edf = JSON.parse(localStorage.getItem('edf')) || []
    if(edf[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = edf[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiaedf
    conteudo.value = tarefa.conteudoedf
    prazo.value = tarefa.prazoedf
    descricao.value = tarefa.descricaoedf

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiaedf = materia.value
        tarefa.conteudoedf = conteudo.value
        tarefa.prazoedf = prazo.value
        tarefa.descricaoedf = descricao.value

        // Salva a tarefa atualizada no localStorage
        edf[indice] = tarefa
        localStorage.setItem('edf', JSON.stringify(edf))

        location.reload()
        }
    } else if(edf[indice].usuario == 'professor') {
        alert('Você não pode editar a tarefa de Professores!')
    }
}