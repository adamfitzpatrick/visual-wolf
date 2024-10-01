import { customElement, property } from 'lit/decorators.js';
import { LitElement, css, html } from 'lit';

@customElement('vwolf-logo')
export class Logo extends LitElement {
  static styles = css`
    .logo {
      width: 4rem;
      margin: 0 2rem;
    }
  `;

  @property()
  size: 'small' | 'large';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  protected render() {
    return html`
      <svg class='logo' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 20.8">
        <g id='logo' transform='translate(0,0)'>
          <path id='vert-hex' d='M 0.3 5.3
          l 8.66 -5
          l 8.66 5
          v 10
          l -8.66 5
          l -8.66 -5
          v -10 z' fill='none' stroke='#ffffff' strokeWidth='0.5' />
          <text x='2' y='22.5' transform='scale(0.6)' fill='#ffffff'>GW</text>
        </g>
      </svg>
    `
  }
}
