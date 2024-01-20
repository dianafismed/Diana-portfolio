const photo = document.getElementById('init-photo')
const items = document.getElementById('init-items')



const about = document.getElementById('about')
const btnCv = document.getElementById('btn-cv')
btnCv.addEventListener('click', ()=> {
  photo.classList.add('left')
  items.classList.add('right')
  about.classList.remove('hidden')
  about.classList.add('up')
})

/*
  sectionCv.setAttribute("style","display:block")
*/

