let fade = document.getElementById('fade')
let post = document.getElementById('postar')
// Carregar os dados do localStorage quando a página for carregada   
    window.onload = function() {
        let matematica = JSON.parse(localStorage.getItem('matematica')) || []
        let tabelaTarefas = document.querySelector('tbody#new')

    // Exibir os dados do localStorage na tela
    matematica.forEach(item => {
        let novaColuna = document.createElement('tr')
        novaColuna.innerHTML = `
            <th id="mathTar">${item.materiamat}</th>
            <th id="mathTar">${item.conteudomat}</th>
            <th id="mathTar">${item.prazomat}</th>
            <th id="mathTarDesc">${item.descricaomat}</th>
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