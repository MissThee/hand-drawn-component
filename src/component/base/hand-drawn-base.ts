import {css, CSSResultGroup, LitElement, PropertyValues} from 'lit';
import {property, queryAll} from 'lit/decorators.js';

import rough from 'roughjs';
import {Drawable, Options} from 'roughjs/bin/core';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {RoughSVG} from 'roughjs/bin/svg';

export enum RenderType {
  CANVAS = 'canvas',
  SVG = 'svg'
}

export enum AnimationType {
  ACTIVE = 'active',
  ALWAYS = 'always',
  NONE = 'none',
}

export interface RoughSize {
  width: number,
  height: number
}

export interface RoughObj {
  roughFirstRendered: boolean;
  roughParentEl: HTMLElement;
  roughParentElSizePre: RoughSize;

}

export interface RoughObjSvg extends RoughObj {
  roughEl: SVGSVGElement;
  roughInstance: RoughSVG;

}

export interface RoughObjCanvas extends RoughObj {
  roughEl: HTMLCanvasElement;
  roughInstance: RoughCanvas;
}


export abstract class HandDrawnBase extends LitElement {
  @queryAll('.rough') private roughParentElArray: HTMLElement[] | undefined;
  @property() protected renderType: RenderType = RenderType.SVG;
  @property() protected animationType: AnimationType = AnimationType.ALWAYS;
  @property({state: true}) protected isFocus = false;
  @property({state: true}) protected isMouseIn = false;
  private _roughOps: Options = {};
  @property({type: Object})
  get roughOps() {
    return this._roughOps;
  };

  set roughOps(value: Options) {
    const oldValue = this._roughOps;
    this.roughOpsOrigin = {...this.roughOpsDefault, ...value};
    // console.log('!!', this.roughOpsDefault, value, JSON.parse(JSON.stringify(this.roughOpsOrigin)));
    this._roughOps = JSON.parse(JSON.stringify(this.roughOpsOrigin)) || {};
    this.requestUpdate('roughOps', oldValue);
  }

  private seed = Math.floor(Math.random() * 2 ** 31);
  protected animationIntervalTime = 200;
  protected roughObjArray: (RoughObjSvg | RoughObjCanvas)[] = [];
  private drawInterval: NodeJS.Timeout | null = null;
  private resizeTimeout: NodeJS.Timeout | null = null;
  private resizePreTimestamp: number = 0;
  protected roughPadding: number = 2;
  protected resizeHandler = this.resizeHandlerTmp.bind(this);

  protected roughOpsOrigin: Options = {};
  protected roughOpsDefault: Options = {
    bowing: 0.5,
    roughness: 0.8,
    stroke: '#363636',
    strokeWidth: 1,
    fillStyle: 'zigzag',
    fillWeight: 0.3,
    hachureGap: 4,
  };

  constructor() {
    super();
    this.fontLoadListener();
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.roughInit();
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    this.updateAnimationState();
    setTimeout(() => {
      this.roughRender();
    }, 0);
  }

  connectedCallback() {
    this.roughOps = this.roughOps || {};
    super.connectedCallback();
    window.addEventListener('resize', this.resizeHandler);
    this.addEventListener('mouseenter', this.mouseInHandler);
    this.addEventListener('focus', this.focusHandler);
    this.addEventListener('mouseleave', this.mouseOutHandler);
    this.addEventListener('blur', this.blurHandler);
  }

  disconnectedCallback() {
    super.connectedCallback();
    window.removeEventListener('resize', this.resizeHandler);
    this.removeEventListener('mouseenter', this.mouseInHandler);
    this.removeEventListener('focus', this.focusHandler);
    this.removeEventListener('mouseleave', this.mouseOutHandler);
    this.removeEventListener('blur', this.blurHandler);
  }

  private fontLoadListener() {
    (<any>document).fonts.ready.then(() => {
      this.roughRender();
    });
  }

  private resizeHandlerTmp() {
    const now = Date.now();
    if (now - this.resizePreTimestamp > this.animationIntervalTime) {
      this.roughRender();
      this.resizePreTimestamp = now;
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    this.resizeTimeout = setTimeout(() => {
      this.roughRender();
    }, this.animationIntervalTime);
  }

  protected mouseInHandler() {
    this.isMouseIn = true;
    this.updateAnimationState();
  }

  protected mouseOutHandler() {
    this.isMouseIn = false;
    this.updateAnimationState();
  }

  protected focusHandler() {
    if (!this.isFocus) {
      // console.log('focus', this.roughOps, this.roughOpsOrigin);
      this.roughOps.stroke = '#000';
      if (this.roughOps.strokeWidth !== undefined) {
        this.roughOps.strokeWidth = (this.roughOpsOrigin.strokeWidth || 0) + 1;
      }
      this.isFocus = true;
      this.updateAnimationState();
    }
  }

  protected blurHandler() {
    if (this.isFocus) {
      this.isFocus = false;
      // console.log('blur', this.roughOps, this.roughOpsOrigin);
      this.roughOps.stroke = this.roughOpsOrigin.stroke;
      if (this.roughOps.strokeWidth !== undefined) {
        this.roughOps.strokeWidth = this.roughOpsOrigin.strokeWidth;
      }
      this.roughRender(true);
      this.updateAnimationState();
    }
  }

  protected updateAnimationState() {
    if (this.animationType === AnimationType.ALWAYS) {
      this.roughOps.seed = 0;
      this.performAnimation(true);
    } else if (this.animationType === AnimationType.ACTIVE) {
      this.roughOps.seed = 0;
      this.performAnimation(this.isFocus || this.isMouseIn);
    } else if (this.animationType === AnimationType.NONE) {
      this.performAnimation(false);
      if (this.roughOps.seed !== this.seed) {
        this.roughOps.seed = this.seed;
        this.roughRender(true);
      } else {
        this.roughRender(this.isFocus || this.isMouseIn);
      }
    }
  }

  private performAnimation(isStart = true) {
    if (isStart) {
      if (!this.drawInterval) {
        this.drawInterval = setInterval(() => {
          this.roughRender(true);
        }, this.animationIntervalTime);
      }
    } else {
      if (this.drawInterval) {
        clearInterval(this.drawInterval);
        this.drawInterval = null;
      }
    }
  }

  private roughInit() {
    if (this.roughParentElArray && this.roughParentElArray.length > 0) {
      for (let roughParentEl of this.roughParentElArray) {
        switch (this.renderType) {
          case RenderType.CANVAS: {
            const roughDrawEl = document.createElement('canvas');
            roughDrawEl.classList.add('rough-context');
            roughParentEl.append(roughDrawEl);
            const roughDrawInstance = rough.canvas(roughDrawEl);
            this.roughObjArray.push({
              roughFirstRendered: false,
              roughParentEl: roughParentEl,
              roughEl: roughDrawEl,
              roughInstance: roughDrawInstance,
              roughParentElSizePre: {
                width: roughParentEl.clientWidth || roughParentEl.getBoundingClientRect().width,
                height: roughParentEl.clientHeight || roughParentEl.getBoundingClientRect().height
              }
            });
            break;
          }
          case RenderType.SVG: {
            const roughDrawEl = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            roughDrawEl.classList.add('rough-context');
            roughParentEl.append(roughDrawEl);
            const roughDrawInstance = rough.svg(roughDrawEl);
            this.roughObjArray.push({
              roughFirstRendered: false,
              roughParentEl: roughParentEl,
              roughEl: roughDrawEl,
              roughInstance: roughDrawInstance,
              roughParentElSizePre: {
                width: roughParentEl.clientWidth || roughParentEl.getBoundingClientRect().width,
                height: roughParentEl.clientHeight || roughParentEl.getBoundingClientRect().height
              }
            });
            break;
          }
        }
      }
    }
  }

  protected roughRender(isForce: boolean = false) {
    for (let roughObj of this.roughObjArray) {
      const size = {
        width: roughObj.roughParentEl.clientWidth,
        height: roughObj.roughParentEl.clientHeight
      };
      if (isForce || !roughObj.roughFirstRendered || size.width !== roughObj.roughParentElSizePre.width || size.height !== roughObj.roughParentElSizePre.height) {
        this.roughSizeOne(roughObj);
        this.roughDrawOne(roughObj);
        roughObj.roughFirstRendered = true;
      }
      roughObj.roughParentElSizePre.width = size.width;
      roughObj.roughParentElSizePre.height = size.height;
    }
  }

  protected roughSizeOne(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    roughObj.roughEl.style.width = size.width + 'px';
    roughObj.roughEl.style.height = size.height + 'px';
    roughObj.roughEl.setAttribute('width', String(size.width));
    roughObj.roughEl.setAttribute('height', String(size.height));
  }

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas, roughOps?: Options) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    const nodeArray: (Drawable | SVGGElement)[] = [];
    nodeArray.push(roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, roughOps || this.roughOps));
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = '';
      for (let node of nodeArray) {
        roughObj.roughEl.appendChild(<Node>node);
      }
    }
  }

  static get styles(): CSSResultGroup {
    return css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
      }

      ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }

      ::-webkit-scrollbar-track {
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #999;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #999;
      }

      ::-webkit-scrollbar-thumb:active {
        background: #999;
      }

      ::-webkit-scrollbar-thumb:window-inactive {
        background: #999;
      }

      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        position: relative;

      }

      .slot {
        font: inherit;
      }

      .rough {
        position: relative;
      }

      .rough > .rough-context {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }
    `;
  }
}

