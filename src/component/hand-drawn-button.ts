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
        <div class="rough button-wrapper" ?disabled="${this.disabled}">
            <label class="button-label" ?disabled="${this.disabled}">
                <input type="button" class="button" ?disabled="${this.disabled}"/>
                <slot class="slot" @slotchange="${this.roughRender}"></slot>
            </label>
        </div>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        .rough-context {
          background-color: white;
        }

        .button {
          opacity: 0;
          position: absolute
        }

        .button-label {
          position: relative;
          display: block;
          cursor: pointer;
          padding: 10px 12px;
        }

        .button-label[disabled] {
          cursor: not-allowed;
        }

        .button-wrapper {
          font: inherit;
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-align: center;
          outline: none;
          width: 100%;
          height: 100%;
        }

        .button-wrapper:active {
          transform: scale(0.95)
        }

        .button-wrapper[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .button-wrapper[disabled]:active {
          transform: scale(1)
        }
      `
    ];
  }


}