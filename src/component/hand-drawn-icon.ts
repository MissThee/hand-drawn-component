import {css, html, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {AnimationType, BaseCss, HandDrawnBase, RoughObjCanvas, RoughObjSvg, RoughSize} from './base/hand-drawn-base';

enum HandDrawnIconType {
  LOADING = 'loading'
}

@customElement('hand-drawn-icon')
export class HandDrawnIcon extends HandDrawnBase {
  @query('#icon') private icon: HTMLElement | undefined;
  @property({type: String, reflect: true}) type: HandDrawnIconType | undefined;

  protected firstUpdated(_changedProperties: PropertyValues) {
    switch (this.type) {
      case HandDrawnIconType.LOADING:
        this.animationType = AnimationType.ALWAYS;
        this.icon?.classList.add('rotate');
        break;
    }
    super.firstUpdated(_changedProperties);
  }

  protected roughDrawOne(_size: RoughSize, roughObj: RoughObjSvg | RoughObjCanvas) {
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    let nodeArray;
    switch (this.type) {
      case HandDrawnIconType.LOADING:
        nodeArray = HandDrawnIcon.iconLoading(roughObj);
        break;
    }
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = '';
      for (let node of nodeArray || []) {
        roughObj.roughEl.appendChild(<Node>node);
      }
    }
  }

  private static iconLoading(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    const nodeArray = [];
    const max = 9;
    for (let i = 1; i <= max - 1; i++) {
      let piece = i % 4;
      const arcObj = {
        x: size.width / 2,
        y: size.height / 2,
        width: size.width / max * i,
        height: size.height / max * i,
        start: Math.PI / 2 * piece,
        stop: Math.PI / 2 * (piece + 1),
        closed: false,
        options: {
          stroke: 'black',
          strokeWidth: 1,
          roughness: 0.5,
          bowing: 10,
        }
      };
      switch (piece) {
        case 1:
          arcObj.y = arcObj.y - (size.height / max * piece) / 2;
          break;
        case 2:
          arcObj.y = arcObj.y - (size.height / max * (piece - 1)) / 2;
          arcObj.x = arcObj.x + (size.width / max * (piece - 1)) / 2;
          break;
        case 3:
          arcObj.x = arcObj.x + (size.width / max * (piece - 2)) / 2;
          break;
      }
      nodeArray.push(roughObj.roughInstance.arc(arcObj.x, arcObj.y, arcObj.width, arcObj.height, arcObj.start, arcObj.stop, arcObj.closed, arcObj.options));
    }
    return nodeArray;
  }

  protected render() {
    return html`
        <div id="icon" class="rough"></div>
    `;
  }

  static get styles() {
    return [
      BaseCss,
      css`
        :host {
          position: relative;
          width: 1em;
          height: 1em;
          overflow: hidden;
          vertical-align: middle;
          line-height: 0.5em;
        }

        #icon {
          display: inline-block;
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          background: none;
          height: 100%;
          width: 100%;
        }

        .rotate {
          animation: rotate 2.5s linear infinite;
          -webkit-animation: rotate 2.5s linear infinite;
        }

        @-webkit-keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
      `

    ];
  }
}