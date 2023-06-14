const state = {};
const carouselList = document.querySelector('.carousel_list');
const carouselItems = document.querySelectorAll('.carousel_item');
const elems = Array.from(carouselItems);
const fade = document.querySelector('div#fade')
const modalAviso = document.getElementById('aviso')
const btnSim = document.querySelector('button#sim')
const btnNao = document.querySelector('#nao')
const modalAvisoCont = document.querySelector('#avisoCont')
const fecharModal = document.querySelector('button#fecharModal')
const fechar = document.querySelector('button#fechar')
const avisolaguna = document.querySelector('#avisolaguna')
const lagunaSim = document.querySelector('#lagunaSim')
const lagunaNao = document.querySelector('#lagunaNao')

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel_item');

  if (!isItem || newActive.classList.contains('carousel_item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('carousel_item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

const cadastro = document.querySelector("li#carousel-2")
const linkCadastro = document.querySelector('span#cadastro')

cadastro.addEventListener('click', () => {
  linkCadastro.style.color = 'rgb(240, 244, 7)';
  linkCadastro.style.textShadow = '0px 0 15px #ffffff'
  linkSobrenos.style.color = 'white'
  fade.style.display = 'block';
  modalAviso.style.display = 'block';
  linkContatos.style.color = 'white'
  linkMidias.style.color = 'white'
  linklaguna.style.color = 'white'
});

linkCadastro.addEventListener('click', () => {
  update(cadastro)
  linkCadastro.style.color = 'rgb(240, 244, 7)';
  linkCadastro.style.textShadow = '0px 0 15px #ffffff'
  linkSobrenos.style.color = 'white'
  fade.style.display = 'block';
  modalAviso.style.display = 'block';
  linkContatos.style.color = 'white'
  linkMidias.style.color = 'white'
})

lagunaSim.addEventListener('click', () => {
  location.href = './login/login.html'
})

lagunaNao.addEventListener('click', () => {
  fade.style.display = 'none';
  avisolaguna.style.display = 'none'
})

btnSim.addEventListener('click', () => {
  location.href = './cadastro/cadastro.html'
})

btnNao.addEventListener('click', () => {
  fade.style.display = 'none';
  modalAviso.style.display = 'none'
})

fecharModal.addEventListener('click', () => {
  fade.style.display = 'none';
  modalsobrenos.style.display = 'none'
})

fechar.addEventListener('click', () => {
  fade.style.display = 'none';
  modalAvisoCont.style.display = 'none'
})

const sobrenos = document.querySelector("li#carousel_0")
const linkSobrenos = document.querySelector('span#sobrenos')
const modalsobrenos = document.querySelector('#modalsobrenos')

sobrenos.addEventListener('click', () => {
  linkSobrenos.style.color = 'rgb(240, 244, 7)'
  linkSobrenos.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkContatos.style.color = 'white'
  linkMidias.style.color = 'white'
  linklaguna.style.color = 'white'
  fade.style.display = 'block';
  modalsobrenos.style.display = 'flex';
})

linkSobrenos.addEventListener('click', () => {
  update(sobrenos)
  linkSobrenos.style.color = 'rgb(240, 244, 7)';
  linkSobrenos.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkContatos.style.color = 'white'
  linkMidias.style.color = 'white'
  linklaguna.style.color = 'white'
  fade.style.display = 'block';
  modalsobrenos.style.display = 'flex';
})

const contatos = document.querySelector("li#carousel-3")
const linkContatos = document.querySelector('span#contatos')

contatos.addEventListener('click', () => {
  linkContatos.style.color = 'rgb(240, 244, 7)'
  linkContatos.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkSobrenos.style.color = 'white'
  linkMidias.style.color = 'white'
  linklaguna.style.color = 'white'
  fade.style.display = 'block';
  modalAvisoCont.style.display = 'block';
})

linkContatos.addEventListener('click', () => {
  update(contatos)
  linkContatos.style.color = 'rgb(240, 244, 7)';
  linkContatos.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkSobrenos.style.color = 'white'
  linkMidias.style.color = 'white'
  linklaguna.style.color = 'white'
  fade.style.display = 'block';
  modalAvisoCont.style.display = 'inline';
})

const midias = document.querySelector("li#carousel-4")
const linkMidias = document.querySelector('span#midias')

midias.addEventListener('click', () => {
  linkMidias.style.color = 'rgb(240, 244, 7)'
  linkMidias.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkSobrenos.style.color = 'white'
  linkContatos.style.color = 'white'
  linklaguna.style.color = 'white'
})

linkMidias.addEventListener('click', () => {
  update(midias)
  linkMidias.style.color = 'rgb(240, 244, 7)';
  linkMidias.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkSobrenos.style.color = 'white'
  linkContatos.style.color = 'white'
  linklaguna.style.color = 'white'
})

const laguna = document.querySelector("li#carousel-1")
const linklaguna = document.querySelector('span#laguna')

laguna.addEventListener('click', () => {
  linklaguna.style.color = 'rgb(240, 244, 7)'
  linklaguna.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkSobrenos.style.color = 'white'
  linkContatos.style.color = 'white'
  linkMidias.style.color = 'white'
  fade.style.display = 'block';
  avisolaguna.style.display = 'block'
  modalAviso.style.display = 'none'
})

linklaguna.addEventListener('click', () => {
  update(laguna)
  linklaguna.style.color = 'rgb(240, 244, 7)';
  linklaguna.style.textShadow = '0px 0 15px #ffffff'
  linkCadastro.style.color = 'white'
  linkSobrenos.style.color = 'white'
  linkContatos.style.color = 'white'
  linkMidias.style.color = 'white'
  fade.style.display = 'block';
  avisolaguna.style.display = 'block'
  modalAviso.style.display = 'none'
})