class Cards {
  constructor() {
      this.clickedB = document.getElementById('cv');
      this.cardEsq = document.querySelector('#foto');
      this.cardDir = document.querySelector('#letter');
  }
  
  // para fazer funcionar em browsers mais antigos
  scrollCards() {
      window.requestAnimationFrame(this.calculoScroll.bind(this));
  }

  click() {
      const button = this.buttonSectionDicas.getBoundingClientRect()['y'];
      if (button >= 25) {
          this.cardEsq.style.transform = `translate(${((-button) + 25)/10}%)`;
          this.cardDir.style.transform = `translate(${(button - 25)/10}%)`;
      }
  }
}

export { Cards }