const photo = document.getElementById("photo")
const letter = document.getElementById("letter")
const sectionCv = document.getElementById("cv")
const btnBackCv = document.getElementById("btn-back-cv")


function showCv(){
  photo.classList.add("animate-photo")
  letter.classList.add("animate-letter")
  sectionCv.setAttribute("style","display:block")
  //sectionCv.classList.add("animate-cv")
}

function hiddenCv(){
  sectionCv.setAttribute("style","display:none")
}

