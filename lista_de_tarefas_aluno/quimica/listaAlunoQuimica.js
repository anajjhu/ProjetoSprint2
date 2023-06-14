
let post = document.getElementById('postar')
let fade = document.getElementById('fade')

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