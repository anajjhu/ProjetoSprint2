let post = document.getElementById('postar')
let fade = document.getElementById('fade')
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