import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';

@customElement('hand-drawn-switch')
export class HandDrawnSwitch extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean}) checked = false;
  @property({type: String}) leftBgFill = '';
  @property({type: String}) rightBgFill = '';
  @property({type: String}) leftToggleFill = '';
  @property({type: String}) rightToggleFill = '';

  @query('input') private input?: HTMLInputElement;

  protected render() {
    return html`
        <slot name="left" class="slot" @slotchange="${this.roughRender}" @click="${this.leftClickHandler}"></slot>
        <label class="switch" ?disabled="${this.disabled}">
            <input class="switch-input" @change="${this.checkSwitchHandler}" type="checkbox" ?disabled="${this.disabled}" .checked="${this.checked}">
            <div id="switchWrapper" class="switch-wrapper rough ${this.checked ? 'switch-wrapper--active' : ''}">
                <div id="switchToggle" class="switch-toggle rough ${this.checked ? 'switch-toggle--active' : ''}"></div>
            </div>
        </label>
        <slot name="right" class="slot" @slotchange="${this.roughRender}" @click="${this.rightClickHandler}"></slot>
    `;
  }

  private leftClickHandler() {
    this.checked = false;
  }

  private rightClickHandler() {
    this.checked = true;
  }

  private checkSwitchHandler() {
    this.checked = this.input!.checked;
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
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
    if (roughObj.roughParentEl.id === 'switchWrapper') {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, {fill: this.checked ? this.rightBgFill : this.leftBgFill, ...this.roughOps, strokeWidth: 1, stroke: 'transparent'}));
      nodeArray.push(roughObj.roughInstance.line(size.height / 5 * 2 + this.roughPadding, this.roughPadding, size.width - (size.height / 5 * 2 + this.roughPadding), this.roughPadding, {...this.roughOps, strokeWidth: 1}));
      nodeArray.push(roughObj.roughInstance.line(size.height / 5 * 2 + this.roughPadding, size.height - this.roughPadding, size.width - (size.height / 5 * 2 + this.roughPadding), size.height - this.roughPadding, {...this.roughOps, strokeWidth: 1}));
      nodeArray.push(roughObj.roughInstance.arc(size.height / 5 * 2 + this.roughPadding, size.height / 2, size.height / 5 * 4 - this.roughPadding * 2, size.height / 5 * 4, Math.PI / 2, Math.PI / 2 * 3, false, {...this.roughOps, strokeWidth: 1}));
      nodeArray.push(roughObj.roughInstance.arc(size.width - (size.height / 5 * 2 + this.roughPadding), size.height / 2, size.height / 5 * 4, size.height - this.roughPadding * 2, Math.PI / 2 * 3, Math.PI / 2 * 5, false, {...this.roughOps, strokeWidth: 1}));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = '';
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(<Node>node);
        }
      }
    } else if (roughObj.roughParentEl.id === 'switchToggle') {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.height / 5 * 2 + this.roughPadding, size.height / 2, size.height - this.roughPadding * 2, {fill: (this.checked ? this.rightToggleFill : this.leftToggleFill) || this.roughOps.stroke, fillStyle: 'zigzag', ...this.roughOps}));
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
          cursor: pointer;
          float: left;
          display: inline-block;
          vertical-align: middle;
        }

        .switch {
          overflow: hidden;
          position: relative;
          border: none;
          background: none;
          cursor: pointer;
          outline: none;
          height: 100%;
        }

        .switch-slot {
          cursor: pointer;
        }

        .switch-input {
          width: 0;
          height: 0;
          opacity: 1;
          position: absolute;
        }

        .switch-wrapper {
          float: left;
          display: inline-block;
          border-radius: 1.5em;
          overflow: hidden;
          position: relative;
          border: none;
          background: none;
          outline: none;
          vertical-align: middle;
          width: 3.5em;
          height: 1.5em;
        }

        .switch-toggle {
          height: 1.5em;
          width: 1.5em;
          position: absolute;
          top: 0;
          left: 0;
          transition: left 0.2s ease-out;
        }

        .switch-toggle .rough-context {
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          z-index: 0;
        }

        .switch-toggle--active {
          left: 2em;
        }

        .switch[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.03);
          cursor: not-allowed;
        }
      `
    ];
  }


}