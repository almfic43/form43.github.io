class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        ana.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
