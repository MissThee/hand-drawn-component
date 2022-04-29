import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';

@customElement('hand-drawn-anchor')
export class HandDrawnAnchor extends HandDrawnBase {
  @property({type: String}) href = '';
  @property({type: String}) target = '';
  @property({type: String}) type = '';
  @property({type: String}) lineColor = '';

  protected render() {
    return html`
        <a href="${this.href}" target="${this.target}" type="${this.type}">
            <div class="rough"></div>
            <slot class="slot" @slotchange="${this.roughRender}"></slot>
        </a>
    `;
  }

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    const nodeArray = [];
    nodeArray.push(roughObj.roughInstance.line(0, size.height - this.roughPadding, size.width, size.height - this.roughPadding, {...this.roughOps, stroke: this.lineColor || this.roughOps.stroke}));
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = '';
      for (let node of nodeArray) {
        roughObj.roughEl.appendChild(<Node>node);
      }
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline;
          position: relative;
        }

        .rough {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .slot {
          font-size: 1em;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `
    ];
  }


}
