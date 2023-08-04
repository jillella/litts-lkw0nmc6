import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('studs-radio')
export class StudsRadio extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
    }

    input[type="radio"] {
      margin-right: 5px;
    }
  `;

  @property({ type: String })
  name = '';

  @property({ type: String })
  value = '';

  @property({ type: Boolean })
  checked = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <label>
        <input
          type="radio"
          name="${this.name}"
          value="${this.value}"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
        />
        <slot></slot>
      </label>
    `;
  }
}

