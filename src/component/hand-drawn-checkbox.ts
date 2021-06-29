import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';

@customElement('hand-drawn-checkbox')
export class HandDrawnCheckbox extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean}) checked = false;
  @property({type: String}) value: string | null = null;
  @query('input') private input?: HTMLInputElement;

  protected render() {
    return html`
        <label class="checkbox" ?disabled="${this.disabled}">
            <input class="checkbox-input" @change="${this.checkSwitchHandler}" type="checkbox" ?disabled="${this.disabled}" .checked="${this.checked}" value="${this.value}">
            <span class="checkbox-rect rough">
          <div id="tick" style=${this.checked ? 'display:inline-block' : 'display:none'} class="checkbox-tick rough"></div>
        </span><span><slot class="slot" @slotchange="${this.roughRender}"></slot></span>
        </label>
    `;
  }

  private checkSwitchHandler() {
    this.checked = this.input!.checked;
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        value: this.value,
        checked: this.checked
      }
    }));
  }

  protected updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughParentEl.id === 'tick') {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.line(size.width / 5, size.height / 3, size.width / 5 * 2, size.height / 5 * 4, this.roughOps));
      nodeArray.push(roughObj.roughInstance.line(size.width / 5 * 2, size.height / 5 * 4, size.width, 0, this.roughOps));
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
        .slot {
          display: inline-block;
          vertical-align: middle;
        }

        .checkbox {
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          background: none;
          cursor: pointer;
          outline: none;
          height: 100%;
        }

        .checkbox-input {
          opacity: 0;
          position: absolute;
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