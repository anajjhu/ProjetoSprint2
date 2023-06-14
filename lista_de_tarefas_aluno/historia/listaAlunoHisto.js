let post = document.getElementById('postar')
let fade = document.getElementById('fade')
// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let historia = JSON.parse(localStorage.getItem('historia')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    historia.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiahist}</th>
            <th id="mathTar">${item.conteudohist}</th>
            <th id="mathTar">${item.prazohist}</th>
            <th id="mathTarDesc">${item.descricaohist}</th>
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