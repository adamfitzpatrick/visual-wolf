import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../logo';

@customElement('vwolf-header')
export class Header extends LitElement {
  static styles = css`
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      border-radius: 2rem;
      background-color: #000000;
      color: #ffffff;
      box-shadow: var(--shadow-light-down);
    }
  `;

  @property()
  activeNav = 'maps'

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  render() {
    return html`
      <div class='header'>
        <vwolf-logo />
        <h1>grid wolf</h1>
      </div>
    `
  }
}

