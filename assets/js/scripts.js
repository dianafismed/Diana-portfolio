import { Cards } from './Cards.js'

window.onload = () => {

  const animaCards = new Cards();
  document.addEventListener('click', animaCards.scrollCards.bind(animaCards));

}