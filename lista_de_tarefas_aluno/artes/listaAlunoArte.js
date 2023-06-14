let fade = document.getElementById('fade')
let post = document.getElementById('postar')
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

    
