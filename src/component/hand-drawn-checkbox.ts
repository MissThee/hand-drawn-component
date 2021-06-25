import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';

@customElement('hand-drawn-checkbox')
export class HandDrawnCheckbox extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean, reflect: true}) checked = false;

  protected render() {
    return html`
      <div class="checkbox" ?disabled="${this.disabled}">
        <span class="checkbox-rect rough">
          <div id="tick" style=${this.checked ? 'display:inline-block' : 'display:none'} class="checkbox-tick rough"></div>
        </span><span><slot class="slot" @slotchange="${this.roughRender}"></slot></span>
      </div>
    `;
  }

  private checkSwitchHandler() {
    if (!this.disabled) {
      this.checked = !this.checked
    }
    console.log('this.checked', this.checked)
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.checkSwitchHandler)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.checkSwitchHandler)
  }

  protected mouseHoverHandler() {
    if (!this.disabled) {
      super.mouseHoverHandler()
    }
  }

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    }
    if (roughObj.roughParentEl.id === 'tick') {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = []
      nodeArray.push(roughObj.roughInstance.line(size.width / 5, size.height / 3, size.width / 5 * 2, size.height / 5 * 4, this.drawOption));
      nodeArray.push(roughObj.roughInstance.line(size.width / 5 * 2, size.height / 5 * 4, size.width, 0, this.drawOption));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = '';
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(<Node>node);
        }
      }
    } else {
      super.roughDrawOne(roughObj);
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          cursor: pointer;
          margin: 0 0.5em 0 0
        }

        .slot {
          display: inline-block;
          vertical-align: middle;
          font-size: 1em;
        }

        .checkbox {
          display: inline-block;
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          background: none;
          cursor: pointer;
          outline: none;
        }

        .checkbox-rect {
          display: inline-block;
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          background: none;
          outline: none;
          width: 1em;
          height: 1em;
          line-height: 1em;
          vertical-align: middle;
        }

        .checkbox-tick {
          height: 100%;
          width: 100%;
          position: relative;
        }

        .checkbox[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.03);
          cursor: not-allowed;
        }

      `
    ];
  }


}