import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-button')
export class HandDrawnButton extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;

  protected updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }

  protected render() {
    return html`
        <button type="button" class="button rough" ?disabled="${this.disabled}">
            <slot class="slot" @slotchange="${this.roughRender}"></slot>
        </button>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        .button {
          font: inherit;
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          background: none;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-align: center;
          padding: 10px 12px;
          outline: none;
          width: 100%;
          height: 100%;
        }

        .button:active {
          transform: scale(0.95)
        }

        .button[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .button[disabled]:active {
          transform: scale(1)
        }
      `
    ];
  }


}