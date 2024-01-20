const photo = document.getElementById('init-photo')
const items = document.getElementById('init-items')
const about = document.getElementById('about')
const projects = document.getElementById('projetcs')

const btnCv = document.getElementById('btn-cv')
const btnProject = document.getElementById('btn-project')
const btnVoltar = document.querySelector('.back')

btnCv.addEventListener('click', ()=> open(about))
btnVoltar.addEventListener('click', ()=> close())

function open(open){
  photo.classList.remove('left-reverse')
  photo.classList.add('left')
  items.classList.remove('right-reverse')
  items.classList.add('right')

  open.classList.remove('up-reverse')
  open.removeAttribute('hidden')
  open.classList.add('up')
}

function close(){
  console.log()
  photo.classList.remove('left')
  photo.classList.add('left-reverse')
  items.classList.remove('right')
  items.classList.add('right-reverse')

  about.classList.remove('up')
  about.setAttribute('hidden', 'true')
  about.classList.add('up-reverse')
}