class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Martínez Francisco Ana Lizbeth.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
