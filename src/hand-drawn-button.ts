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
        <div id="button" ?disabled="${this.disabled}">
            <slot @slotchange="${this.roughDraw}"></slot>
            <div id="roughWrapperEl"></div>
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

  protected roughDraw() {
    const rect = { // this.button.getBoundingClientRect();  //Will be affected by scale
      width: this.button?.clientWidth || 0,
      height: this.button?.clientHeight || 0
    };
    if (this.roughDrawEl instanceof HTMLCanvasElement) {
      this.roughDrawEl.getContext('2d')?.clearRect(0, 0, rect.width, rect.height);
      this.roughDrawEl.width = rect.width;
      this.roughDrawEl.height = rect.height;
      this.roughDrawInstance?.rectangle(this.roughPadding, this.roughPadding, rect.width - this.roughPadding * 2, rect.height - this.roughPadding * 2, this.drawOption);
    } else if (this.roughDrawEl instanceof SVGSVGElement) {
      if (this.roughDrawEl.childNodes[0]) {
        this.roughDrawEl.removeChild(this.roughDrawEl.childNodes[0]);
      }
      this.roughDrawEl.style.width = rect.width + 'px';
      this.roughDrawEl.style.height = rect.height + 'px';
      let node = this.roughDrawInstance?.rectangle(this.roughPadding, this.roughPadding, rect.width - this.roughPadding * 2, rect.height - this.roughPadding * 2, this.drawOption);
      this.roughDrawEl.appendChild(<Node>node);
    }
  }
}