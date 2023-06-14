//Adicionando variáveis
let usuario = document.querySelector('input#usuario')
let labelUsuario = document.querySelector('label#user')
let validUsuario = false

let senha = document.querySelector('input#senha')
let labelSenha = document.querySelector('label#senha')
let validSenha = false

let senha2 =  document.querySelector('input#senha2')
let labelSenha2 = document.querySelector('label#senha2')
let validSenha2 = false

let cargo = document.querySelector('select#cargo')
let labelCargo = document.querySelector('label#cargo')

//Validação (Controle de letras escritas e adicionando eventos)
usuario.addEventListener('keyup', ()=> {
    if(usuario.value.length <= 2) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        usuario.setAttribute('style', 'color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style', 'color: black')
        validUsuario = true

    }
})
//validação Senha
senha.addEventListener('keyup', ()=> {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 3 caracteres'
        senha.setAttribute('style', 'color: red')
        validSenha2 = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'color: black')
        validSenha = true

    }
})
//Validação de Confirmação da Senha
senha2.addEventListener('keyup', ()=> {
    if(senha.value != senha2.value ) {
        labelSenha2.setAttribute('style', 'color: red')
        labelSenha2.innerHTML = 'Digite sua senha novamente *Senhas não conferem'
        senha2.setAttribute('style', 'color: red')
        validSenha2 = false
    } else {
        labelSenha2.setAttribute('style', 'color: green')
        labelSenha2.innerHTML = 'Digite sua senha novamente'
        senha2.setAttribute('style', 'color: black')
        validSenha2 = true
    }

//Cadastro no Local Storage
})
 function cadastrar() {
    if(validUsuario && validSenha && validSenha2) {
        let lista = JSON.parse(localStorage.getItem('lista') || '[]'); //Adicionando valores inseridos no Local Storage e direcionando para página de Login

        lista.push( //Array
            {
                usuarioCad: usuario.value ,
                senhaCad: senha.value,
                cargoCad: cargo.value
            }
        
         );
         localStorage.setItem('lista', JSON.stringify(lista));
         location.href = '../login/login.html'

    } else {
        alert('Erro!')
        
    }
 }
// pegando a tag button e guardadndo em uma variável
const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")
// ao clicar no botão
button.onclick = function () {
    // modal.show -> mostrar ; modal.showModal -> mostrar centralizado; esc -> fecha
    modal.showModal()
}

// ao clicar no botão
buttonClose.onclick = function () {
    // fechar modal
    modal.close()
}

window.onload = function(){
    Particles.init({
        selector : '.background',
        maxParticles: 350,
        connectParticles: 'true',
        speed :0.3,
        minDistance : 60,
        sizeVariations:2,
        color:'#000000',
        innerHeight: 600
    });
}
