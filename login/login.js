//Adicionando variáveis do HTML para manipulação
function logar() {
    let usuario = document.querySelector('input#usuario');
    let labelUsuario = document.querySelector('label#user');

    let senha = document.querySelector('input#senha');
    let labelSenha = document.querySelector('label#senha');

    let cargo = document.querySelector('select#cargo');
    let labelCargo = document.querySelector('label#cargo');
    let prof = document.querySelector('option#prof');
    let estud = document.querySelector('option#estudante');
    let repres = document.querySelector('option#representante');

    let listaUser = [];
    //Caso Valores inseridos não estejam inseridos no LocalStorage
    let userValid = {
        usuario: '',
        senha: '',
        cargo: ''
    };

    listaUser = JSON.parse(localStorage.getItem('lista'));

    listaUser.forEach((item) => {
        if (usuario.value == item.usuarioCad && senha.value == item.senhaCad && cargo.value == item.cargoCad) {
            userValid = {
                user: item.usuarioCad,
                senha: item.senhaCad,
                cargo: item.cargoCad
            };
        }
    });

    if (usuario.value == userValid.user && senha.value == userValid.senha && cargo.value == userValid.cargo && cargo.value === 'prof') {
        location.href = "../materias_professor/materiasprof.html";
    } else if (usuario.value == userValid.user && senha.value == userValid.senha && cargo.value == userValid.cargo && cargo.value === 'estudante') {
        location.href = "../materias_estudante/materiasestud.html";
    } else if (usuario.value == userValid.user && senha.value == userValid.senha && cargo.value == userValid.cargo && cargo.value === 'representante') {
        location.href = "../materias_representante/materiasrepres.html";
    }
    else
        alert('Erro, tente Novamente!');
}

// background com partículas em movimento
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