import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {BaseCss, HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-button')
export class HandDrawnButton extends HandDrawnBase {
  @query('#slot')  slotEl: HTMLElement | undefined
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: String, reflect: true}) value = '';

  protected render() {
    return html`
        <button id="button" class="rough" ?disabled="${this.disabled}">
            <slot id="slot" @slotchange="${this.roughRefresh}"></slot>
        </button>
    `;
  }
  static get styles() {
    return [
      BaseCss,
      css`
        :host {
          cursor: pointer;
        }

        #button {
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-align: center;
          padding: 10px 12px;
          color: inherit;
          outline: none;
          width: 100%;
          height: 100%;
        }

        #button:active {
          transform: scale(0.95)
        }

        #button[disabled] {
          opacity: 0.6;
          background: rgba(0, 0, 0, 0.07);
          cursor: not-allowed;
        }

        #button[disabled]:active {
          transform: scale(1)
        }
      `
    ];
  }


}