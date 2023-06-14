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

    let portugues = JSON.parse(localStorage.getItem('portugues')) || []

    portugues.push({
        materiaport: materia.value,
        conteudoport: conteudo.value,
        prazoport: prazo.value,
        descricaoport: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('portugues', JSON.stringify(portugues))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let portugues = JSON.parse(localStorage.getItem('portugues')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    portugues.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiaport}</th>
            <th id="mathTar">${item.conteudoport}</th>
            <th id="mathTar">${item.prazoport}</th>
            <th id="mathTarDesc">${item.descricaoport}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${portugues.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${portugues.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let portugues = JSON.parse(localStorage.getItem('portugues')) || []
    if(portugues[indice].usuario == 'representante') {
    portugues.splice(indice, 1)
    localStorage.setItem('portugues', JSON.stringify(portugues))
   
    location.reload()
    } else if(portugues[indice].usuario == 'professor') {
        alert('Você não pode excluir a tarefa de Professores!')
    }
}

//Editar Tarefas
function EditarTarefa(indice) {
    let portugues = JSON.parse(localStorage.getItem('portugues')) || []
    if(portugues[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = portugues[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiaport
    conteudo.value = tarefa.conteudoport
    prazo.value = tarefa.prazoport
    descricao.value = tarefa.descricaoport

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiaport = materia.value
        tarefa.conteudoport = conteudo.value
        tarefa.prazoport = prazo.value
        tarefa.descricaoport = descricao.value

        // Salva a tarefa atualizada no localStorage
        portugues[indice] = tarefa
        localStorage.setItem('portugues', JSON.stringify(portugues))

        location.reload()
    }
    } else if(portugues[indice].usuario == 'professor') {
        alert('Você não pode editar a tarefa de Professores!')
        }
}