let fade = document.getElementById('fade')
let post = document.getElementById('postar')
// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let portugues = JSON.parse(localStorage.getItem('portugues')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    portugues.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiaport}</th>
            <th id="mathTar">${item.conteudoport}</th>
            <th id="mathTar">${item.prazoport}</th>
            <th id="mathTarDesc">${item.descricaoport}</th>
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