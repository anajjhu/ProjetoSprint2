let btnFechar = document.getElementById('btnSalvar')
let btnAdd = document.getElementById('btnAdicionar')
let materia = document.getElementById("materiaMatematica")
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

    let matematica = JSON.parse(localStorage.getItem('matematica')) || []

    matematica.push({
        materiamat: materia.value,
        conteudomat: conteudo.value,
        prazomat: prazo.value,
        descricaomat: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('matematica', JSON.stringify(matematica))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let matematica = JSON.parse(localStorage.getItem('matematica')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    matematica.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiamat}</th>
            <th id="mathTar">${item.conteudomat}</th>
            <th id="mathTar">${item.prazomat}</th>
            <th id="mathTarDesc">${item.descricaomat}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${matematica.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${matematica.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let matematica = JSON.parse(localStorage.getItem('matematica')) || []
    if(matematica[indice].usuario == 'representante') {
    matematica.splice(indice, 1)
    localStorage.setItem('matematica', JSON.stringify(matematica))
   
    location.reload()
} else if(matematica[indice].usuario == 'professor') {
    alert('Você não pode excluir a tarefa de Professores!')
}
}

//Editar Tarefas
function EditarTarefa(indice) {
    let matematica = JSON.parse(localStorage.getItem('matematica')) || []
    if(matematica[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = matematica[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiamat
    conteudo.value = tarefa.conteudomat
    prazo.value = tarefa.prazomat
    descricao.value = tarefa.descricaomat

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiamat = materia.value
        tarefa.conteudomat = conteudo.value
        tarefa.prazomat = prazo.value
        tarefa.descricaomat = descricao.value

        // Salva a tarefa atualizada no localStorage
        matematica[indice] = tarefa
        localStorage.setItem('matematica', JSON.stringify(matematica))

        location.reload()
    }
    } else if(matematica[indice].usuario == 'professor') {
        alert('Você não pode editar a tarefa de Professores!')
        }
}