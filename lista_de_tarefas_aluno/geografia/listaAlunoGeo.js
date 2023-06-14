let fade = document.getElementById('fade')
let post = document.getElementById('postar')
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