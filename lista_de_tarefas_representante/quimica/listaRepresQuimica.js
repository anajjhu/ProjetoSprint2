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

    let quimica = JSON.parse(localStorage.getItem('quimica')) || []

    quimica.push({
        materiaquim: materia.value,
        conteudoquim: conteudo.value,
        prazoquim: prazo.value,
        descricaoquim: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('quimica', JSON.stringify(quimica))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada      
    window.onload = function() {
        let quimica = JSON.parse(localStorage.getItem('quimica')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

        // Exibir os dados do localStorage na tela

    quimica.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiaquim}</th>
            <th id="mathTar">${item.conteudoquim}</th>
            <th id="mathTar">${item.prazoquim}</th>
            <th id="mathTarDesc">${item.descricaoquim}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${quimica.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${quimica.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let quimica = JSON.parse(localStorage.getItem('quimica')) || []
    if(quimica[indice].usuario == 'representante') {
    quimica.splice(indice, 1)
    localStorage.setItem('quimica', JSON.stringify(quimica))
   
    location.reload()
    } else if(quimica[indice].usuario == 'professor') {
        alert('Você não pode excluir a tarefa de Professores!')
    }
}

//Editar Tarefas
function EditarTarefa(indice) {
    let quimica = JSON.parse(localStorage.getItem('quimica')) || []
    if(quimica[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = quimica[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiaquim
    conteudo.value = tarefa.conteudoquim
    prazo.value = tarefa.prazoquim
    descricao.value = tarefa.descricaoquim

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiaquim = materia.value
        tarefa.conteudoquim = conteudo.value
        tarefa.prazoquim = prazo.value
        tarefa.descricaoquim = descricao.value

        // Salva a tarefa atualizada no localStorage
        quimica[indice] = tarefa
        localStorage.setItem('quimica', JSON.stringify(quimica))

        location.reload()
        }
    } else if(quimica[indice].usuario == 'professor') {
        alert('Você não pode editar a tarefa de Professores!')
        }
}