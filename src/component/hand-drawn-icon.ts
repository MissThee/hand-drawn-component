import {css, html, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';
import {Options} from "roughjs/bin/core";

enum HandDrawnIconType {
  LOADING = 'loading',
  CROSS = 'cross',
  TICK = 'tick',
}

@customElement('hand-drawn-icon')
export class HandDrawnIcon extends HandDrawnBase {
  protected roughOpsDefault: Options = {
    roughness: 0.5,
  };
  @query('#icon') private icon: HTMLElement | undefined;
  @property({type: String}) type: HandDrawnIconType | undefined;

  protected firstUpdated(_changedProperties: PropertyValues) {
    switch (this.type) {
      case HandDrawnIconType.LOADING:
        // this.animationType = AnimationType.HOVER;
        this.icon?.classList.add('rotate');
        break;
      case HandDrawnIconType.CROSS:
      case HandDrawnIconType.TICK:
        break;
    }
    super.firstUpdated(_changedProperties);
  }

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    let nodeArray;
    switch (this.type) {
      case HandDrawnIconType.LOADING:
        nodeArray = this.iconLoading(roughObj);
        break;
      case HandDrawnIconType.CROSS:
        nodeArray = this.iconCross(roughObj);
        break;
      case HandDrawnIconType.TICK:
        nodeArray = this.iconTick(roughObj);
        break;
    }
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = '';
      for (let node of nodeArray || []) {
        roughObj.roughEl.appendChild(<Node>node);
      }
    }
  }

  private iconCross(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    const nodeArray = [];
    const arcObj = {
      x1: 0,
      y1: 0,
      x2: size.width,
      y2: size.height,
      x3: size.width / 10,
      y3: size.height / 10 * 9,
      x4: size.width / 10 * 9,
      y4: size.height / 10,
      roughOps: {
        ...this.roughOps,
        strokeWidth: (this.roughOps.strokeWidth === undefined ? 2 : this.roughOps.strokeWidth)
      }
    };
    nodeArray.push(roughObj.roughInstance.line(arcObj.x1, arcObj.y1, arcObj.x2, arcObj.y2, arcObj.roughOps));
    nodeArray.push(roughObj.roughInstance.line(arcObj.x3, arcObj.y3, arcObj.x4, arcObj.y4, arcObj.roughOps));
    return nodeArray;
  }

  private iconTick(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    const nodeArray = [];
    const arcObj = {
      x1: size.width / 10 / 2,
      y1: size.height / 10 * 4,
      x2: size.width / 10 * 4,
      y2: size.height / 10 * 9,
      x3: size.width / 10 * 9.5,
      y3: 0,
      roughOps: {
        ...this.roughOps,
        strokeWidth: (this.roughOps.strokeWidth === undefined ? 2 : this.roughOps.strokeWidth)
      }

    };
    nodeArray.push(roughObj.roughInstance.line(arcObj.x1, arcObj.y1, arcObj.x2, arcObj.y2, arcObj.roughOps));
    nodeArray.push(roughObj.roughInstance.line(arcObj.x2, arcObj.y2, arcObj.x3, arcObj.y3, arcObj.roughOps));

    return nodeArray;
  }

  private iconLoading(roughObj: RoughObjSvg | RoughObjCanvas) {
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
        roughOps: this.roughOps
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
      nodeArray.push(roughObj.roughInstance.arc(arcObj.x, arcObj.y, arcObj.width, arcObj.height, arcObj.start, arcObj.stop, arcObj.closed, arcObj.roughOps));
    }
    return nodeArray;
  }

  protected render() {
    return html`
        <div id="icon" class="icon rough"></div>
    `;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          position: relative;
          width: 1em;
          height: 1em;
          overflow: hidden;
          vertical-align: -10%;
          line-height: 1em;
        }

        .rough > .rough-context {
          z-index: 0;
        }

        .icon {
          display: inline-block;
          overflow: hidden;
          position: relative;
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

