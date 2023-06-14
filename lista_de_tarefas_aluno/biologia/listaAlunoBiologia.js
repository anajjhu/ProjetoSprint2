let fade = document.getElementById('fade')
let post = document.getElementById('postar')
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