import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-input')
export class HandDrawnInput extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: String, reflect: true}) value: string | undefined = '';
  @property({type: String, reflect: true}) placeholder = '';
  @query('input') private inputEl?: HTMLInputElement;

  protected updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }

  protected render() {
    return html`
        <div class="rough">
            <input class="input" .value="${this.value}" placeholder="${this.placeholder}" @input="${this.input}" @change="${this.input}" ?disabled="${this.disabled}"/>
        </div>
    `;
  }

  private input(e: any) {
    this.value = this.inputEl?.value;
  }

  static get styles() {
    return [
      super.styles,
      css`
        .input {
          font: inherit;
          overflow: hidden;
          user-select: none;
          border: none;
          background: none;
          outline: none;
          height: 100%;
          width: 100%;
          margin: 10px;
        }

        .input:active {
        }

        .input[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .input[disabled]:active {
        }
      `
    ];
  }
}