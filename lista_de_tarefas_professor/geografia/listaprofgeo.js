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

    let geografia = JSON.parse(localStorage.getItem('geografia')) || []

    geografia.push({
        materiageo: materia.value,
        conteudogeo: conteudo.value,
        prazogeo: prazo.value,
        descricaogeo: descricao.value,
        usuario: 'professor'
    })

    localStorage.setItem('geografia', JSON.stringify(geografia))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let geografia = JSON.parse(localStorage.getItem('geografia')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    geografia.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiageo}</th>
            <th id="mathTar">${item.conteudogeo}</th>
            <th id="mathTar">${item.prazogeo}</th>
            <th id="mathTarDesc">${item.descricaogeo}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${geografia.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${geografia.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}
//Remover Tarefas
function removerTarefa(indice) {
    let geografia = JSON.parse(localStorage.getItem('geografia')) || []
    geografia.splice(indice, 1)
    localStorage.setItem('geografia', JSON.stringify(geografia))
   
    location.reload()
}

//Editar Tarefas
function EditarTarefa(indice) {
    let geografia = JSON.parse(localStorage.getItem('geografia')) || []

    // Recupera a tarefa a ser editada
    let tarefa = geografia[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiageo
    conteudo.value = tarefa.conteudogeo
    prazo.value = tarefa.prazogeo
    descricao.value = tarefa.descricaogeo

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiageo = materia.value
        tarefa.conteudogeo = conteudo.value
        tarefa.prazogeo = prazo.value
        tarefa.descricaogeo = descricao.value

        // Salva a tarefa atualizada no localStorage
        geografia[indice] = tarefa
        localStorage.setItem('geografia', JSON.stringify(geografia))

        location.reload()
    }
}