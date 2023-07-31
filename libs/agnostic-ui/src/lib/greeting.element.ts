export class GreetingElement extends HTMLElement {
    public static observedAttributes = ['title'];
  
    attributeChangedCallback() {
      this.innerHTML = `<h1>Welcome to ${this.title}!</h1>`;
    }
}

export const defineGreetingElement = () => {
    customElements.define('happynrwl-greeting', GreetingElement);
}
