let fade = document.getElementById('fade')
let post = document.getElementById('postar')

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
        `
        tabelaTarefas.appendChild(novaColuna)
    })
}

function PostarTarefa() {
    fade.style.display = 'flex'
    post.style.display = 'flex'
}

function fecharSalvar() {
    fade.style.display = 'none'
    post.style.display = 'none'
}