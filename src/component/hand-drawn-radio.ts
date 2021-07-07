import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';

@customElement('hand-drawn-radio')
export class HandDrawnRadio extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean}) checked = false;
  @property({type: String}) value: string | null = null;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  protected render() {
    return html`
        <label class="radio" ?disabled="${this.disabled}">
            <!--     note: using type="checkbox" to focus on unchecked node by Tab   -->
            <input class="radio-input" @change="${this.checkSwitchHandler}" type="checkbox" name="aa" ?disabled="${this.disabled}" .checked="${this.checked}" value="${this.value}">
            <span id="dot-wrapper" class="radio-rect rough">
          <div id="dot" style=${this.checked ? 'display:inline-block' : 'display:none'} class="radio-dot rough"></div>
        </span><span><slot class="slot" @slotchange="${this.roughRender}"></slot></span>
        </label>
    `;
  }

  protected createRenderRoot(): ShadowRoot | Element {
    return super.createRenderRoot();
  }

  private checkSwitchHandler() {
    this.checked = true;
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
    if (roughObj.roughParentEl.id === 'dot') {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.width / 2, size.height / 2, (size.width - this.roughPadding) / 2,
        {
          ...this.roughOps,
          ...{
            roughness: (this.roughOps.roughness || 0) * 2 / 3,
            bowing: (this.roughOps.bowing || 0) * 2 / 3
          },
          fill: this.roughOps.stroke,
          strokeWidth: this.roughOpsOrigin.strokeWidth,
          fillStyle: 'solid'
        }
      ));
      if (roughObj.roughEl instanceof SVGSVGElement) {
        roughObj.roughEl.innerHTML = '';
        for (let node of nodeArray) {
          roughObj.roughEl.appendChild(<Node>node);
        }
      }
    } else if (roughObj.roughParentEl.id === 'dot-wrapper') {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.width / 2, size.height / 2, size.width - this.roughPadding,
        {
          ...this.roughOps,
          ...{
            roughness: (this.roughOps.roughness || 0) * 2 / 3,
            bowing: (this.roughOps.bowing || 0) * 2 / 3
          },
        }
      ));
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

        .radio {
          overflow: hidden;
          position: relative;
          border: none;
          background: none;
          cursor: pointer;
          outline: none;
          height: 100%;
        }

        .radio-input {
          width: 0;
          height: 0;
          opacity: 0;
          position: absolute;
        }

        .radio-rect {
          display: inline-block;
          overflow: hidden;
          position: relative;
          border: none;
          background: none;
          outline: none;
          width: 1em;
          height: 1em;
          line-height: 1em;
          vertical-align: middle;
        }

        .radio-dot {
          height: 100%;
          width: 100%;
          position: relative;
        }

        .radio[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.03);
          cursor: not-allowed;
        }
      `
    ];
  }


}