class MiFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML = /* html */
  `Copyright &copy; 2020 Ana Lizbeth Martínez Francisco.`;
  }
}
customElements.define("mi-footer", MiFooter);
