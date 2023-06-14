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

    let artes = JSON.parse(localStorage.getItem('artes')) || []

    artes.push({
        materiaart: materia.value,
        conteudoart: conteudo.value,
        prazoart: prazo.value,
        descricaoart: descricao.value,
        usuario: "representante"
    })

    localStorage.setItem('artes', JSON.stringify(artes))

    location.reload()

}

// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let artes = JSON.parse(localStorage.getItem('artes')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela    
    artes.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiaart}</th>
            <th id="mathTar">${item.conteudoart}</th>
            <th id="mathTar">${item.prazoart}</th>
            <th id="mathTarDesc">${item.descricaoart}</th>
            <th id="mathTar">
                <button id="btnEdit" onclick="EditarTarefa(${artes.indexOf(item)})"><i class="fas fa-edit"></i></button>
            </th>
            <th id="mathTar">
                <button id="btnRemove" onclick="removerTarefa(${artes.indexOf(item)})"><i class="fas fa-trash"></i></button>
            </th>
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}

//Remover Tarefas
    function removerTarefa(indice) {
        
        let artes = JSON.parse(localStorage.getItem('artes')) || []
        
        if(artes[indice].usuario == 'representante') {
        artes.splice(indice, 1)
        localStorage.setItem('artes', JSON.stringify(artes))
   
        location.reload()
    }else if(artes[indice].usuario == 'professor') {
        alert('Você não pode excluir a tarefa de Professores!')
    }
}

//Editar Tarefas
function EditarTarefa(indice) {
    let artes = JSON.parse(localStorage.getItem('artes')) || []
    if(artes[indice].usuario == 'representante') {
    // Recupera a tarefa a ser editada
    let tarefa = artes[indice]

    // Preenche os campos do modal com os valores da tarefa
    materia.value = tarefa.materiaart
    conteudo.value = tarefa.conteudoart
    prazo.value = tarefa.prazoart
    descricao.value = tarefa.descricaoart

    // Exibe o modal de edição
    abrir()

    // Atualiza a tarefa com os novos valores quando o botão "Salvar" for clicado
    btnFechar.onclick = function() {
        tarefa.materiaart = materia.value
        tarefa.conteudoart = conteudo.value
        tarefa.prazoart = prazo.value
        tarefa.descricaoart = descricao.value

        // Salva a tarefa atualizada no localStorage
        artes[indice] = tarefa
        localStorage.setItem('artes', JSON.stringify(artes))

        location.reload()
    }
    } else if(artes[indice].usuario == 'professor') {
        alert('Você não pode editar a tarefa de professores!')
    }
}