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

    let biologia = JSON.parse(localStorage.getItem('biologia')) || []

    biologia.push({
        materiabio: materia.value,
        conteudobio: conteudo.value,
        prazobio: prazo.value,
        descricaobio: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('biologia', JSON.stringify(biologia))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let biologia = JSON.parse(localStorage.getItem('biologia')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    biologia.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiabio}</th>
            <th id="mathTar">${item.conteudobio}</th>
            <th id="mathTar">${item.prazobio}</th>
            <th id="mathTarDesc">${item.descricaobio}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${biologia.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${biologia.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let biologia = JSON.parse(localStorage.getItem('biologia')) || []
    if(biologia[indice].usuario == 'representante') {
    biologia.splice(indice, 1)
    localStorage.setItem('biologia', JSON.stringify(biologia))
   
    location.reload()
    } else if(biologia[indice].usuario == 'professor') {
        alert('Você não pode excluir a tarefa de Professores!')
    }
}

//Editar Tarefas
function EditarTarefa(indice) {
    let biologia = JSON.parse(localStorage.getItem('biologia')) || []
    if(biologia[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = biologia[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiabio
    conteudo.value = tarefa.conteudobio
    prazo.value = tarefa.prazobio
    descricao.value = tarefa.descricaobio

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiabio = materia.value
        tarefa.conteudobio = conteudo.value
        tarefa.prazobio = prazo.value
        tarefa.descricaobio = descricao.value

        // Salva a tarefa atualizada no localStorage
        biologia[indice] = tarefa
        localStorage.setItem('biologia', JSON.stringify(biologia))

        location.reload()
    }
    } else if(biologia[indice].usuario == 'professor') {
        alert('Você não pode editar a tarefa de Professores!')
    }
}