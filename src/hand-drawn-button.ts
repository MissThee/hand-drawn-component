import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {BaseCss, HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-button')
export class HandDrawnButton extends HandDrawnBase {
  @query('#button') protected button: HTMLElement | undefined;

  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: String, reflect: true}) value = '';

  protected render() {
    return html`
<!--        <div style="width: 100px;height: 40px" class="rough"></div>-->
        <div id="button" class="rough" ?disabled="${this.disabled}">
            <slot @slotchange="${this.roughDraw}"></slot>
        </div>
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