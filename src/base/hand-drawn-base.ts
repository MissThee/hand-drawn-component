import {css, LitElement, PropertyValues} from 'lit';
import {property, queryAll} from 'lit/decorators.js';

import rough from 'roughjs';
import {Options} from 'roughjs/bin/core';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {RoughSVG} from 'roughjs/bin/svg';

export enum RenderType {
  CANVAS = 'canvas',
  SVG = 'svg'
}

export enum AnimationTpe {
  HOVER = 'hover',
  ALWAYS = 'always',
  NONE = 'none',
}

export interface RoughObjSvg {
  roughParentEl: HTMLElement
  roughEl: SVGSVGElement
  roughInstance: RoughSVG
}

export interface RoughObjCanvas {
  roughParentEl: HTMLElement
  roughEl: HTMLCanvasElement
  roughInstance: RoughCanvas
}

export abstract class HandDrawnBase extends LitElement {
  @queryAll('.rough') private roughParentElArray: HTMLElement[] | undefined;
  @property() protected drawOption: Options = {
    bowing: 1,
    roughness: 1
  };
  @property() protected renderType: RenderType = RenderType.CANVAS;
  @property() protected animationTpe: AnimationTpe = AnimationTpe.NONE;
  protected roughObjArray: (RoughObjSvg | RoughObjCanvas)[] = [];
  private drawInterval: NodeJS.Timeout | null = null;
  private resizeTimeout: NodeJS.Timeout | null = null;
  protected roughPadding: number = 2;

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.roughInit();
    // need wait slot render finished, but i don't know how.
    setTimeout(() => {
      this.roughRefresh();
    }, 0);
    if (this.animationTpe === AnimationTpe.ALWAYS) {
      this.performAnimation(true);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.resizeHandler.bind(this));
    this.addEventListener('mouseenter', this.mouseHoverHandler);
    this.addEventListener('mouseleave', this.mouseLeaveHandler);
  }

  disconnectedCallback() {
    super.connectedCallback();
    window.removeEventListener('resize', this.resizeHandler.bind(this));
    this.removeEventListener('mouseenter', this.mouseHoverHandler);
    this.removeEventListener('mouseleave', this.mouseLeaveHandler);
  }

  private resizeHandler() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    this.resizeTimeout = setTimeout(() => {
      this.roughRefresh();
    }, 30);
  }

  private mouseHoverHandler() {
    if (this.animationTpe === AnimationTpe.HOVER) {
      this.performAnimation(true);
    }
  }

  private mouseLeaveHandler() {
    if (this.animationTpe === AnimationTpe.HOVER) {
      this.performAnimation(false);
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
              roughParentEl: roughParentEl,
              roughEl: roughDrawEl,
              roughInstance: roughDrawInstance
            });
            break;
          }
          case RenderType.SVG: {
            const roughDrawEl = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            roughDrawEl.classList.add('rough-context');
            roughParentEl.append(roughDrawEl);
            const roughDrawInstance = rough.svg(roughDrawEl);
            this.roughObjArray.push({
              roughParentEl: roughParentEl,
              roughEl: roughDrawEl,
              roughInstance: roughDrawInstance
            });
            break;
          }
          default:
            return;
        }
      }
    }
  }

  private performAnimation(isStart = true) {
    if (isStart) {
      if (!this.drawInterval) {
        this.drawInterval = setInterval(() => {
          this.roughRefresh();
        }, 150);
      }
    } else {
      if (this.drawInterval) {
        clearInterval(this.drawInterval);
        this.drawInterval = null;
      }
    }
  }

  protected roughRefresh() {
    this.roughSize();
    this.roughDraw();
  }

  private roughSize() {
    for (let roughObj of this.roughObjArray) {
      const size = {
        width: roughObj.roughParentEl.clientWidth,
        height: roughObj.roughParentEl.clientHeight
      };
      roughObj.roughEl.style.width = size.width + 'px';
      roughObj.roughEl.style.height = size.height + 'px';
      roughObj.roughEl.setAttribute('width', String(size.width));
      roughObj.roughEl.setAttribute('height', String(size.height));
    }
  }

  protected roughDraw() {
    for (let roughObj of this.roughObjArray) {
      const size = {
        width: roughObj.roughParentEl.clientWidth,
        height: roughObj.roughParentEl.clientHeight
      };
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
        roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, this.drawOption);
      } else if (roughObj.roughEl instanceof SVGSVGElement) {
        let node = roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, this.drawOption);
        roughObj.roughEl.innerHTML = '';
        roughObj.roughEl.appendChild(<Node>node);
      }
    }
  }
}

export const BaseCss = css`
  :host {
    display: inline-block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    position: relative;
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
  }
`;