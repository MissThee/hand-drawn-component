import {css, LitElement, PropertyValues} from 'lit';
import {property, query} from 'lit/decorators.js';

import rough from 'roughjs';
import {Options} from 'roughjs/bin/core';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {RoughSVG} from 'roughjs/bin/svg';

enum RenderType {
  CANVAS = 'canvas',
  SVG = 'svg'
}

enum AnimationTpe {
  HOVER = 'hover',
  ALWAYS = 'always',
  NONE = 'none',
}

export abstract class HandDrawnBase extends LitElement {
  @query('#roughWrapperEl') protected roughWrapperEl: HTMLElement | undefined;
  @property() protected drawOption: Options = {bowing: 3};
  @property() protected renderType: RenderType | undefined = RenderType.CANVAS;
  @property() protected animationTpe: AnimationTpe = AnimationTpe.HOVER;
  private drawInterval: NodeJS.Timeout | null = null;
  protected roughDrawEl: HTMLCanvasElement | SVGSVGElement | undefined;
  protected roughDrawInstance: RoughCanvas | RoughSVG | undefined;
  protected roughPadding: number = 5;


  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.roughInit();
    this.roughDraw();
    if (this.animationTpe === AnimationTpe.ALWAYS) {
      this.performAnimation(true);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mouseenter', this.mouseHoverHandler);
    this.addEventListener('mouseleave', this.mouseLeaveHandler);
  }

  disconnectedCallback() {
    super.connectedCallback();
    this.removeEventListener('mouseenter', this.mouseHoverHandler);
    this.removeEventListener('mouseleave', this.mouseLeaveHandler);
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
    if (this.roughWrapperEl) {
      switch (this.renderType) {
        case RenderType.CANVAS:
          this.roughDrawEl = document.createElement('canvas');
          this.roughWrapperEl.append(<HTMLCanvasElement>this.roughDrawEl);
          this.roughDrawInstance = rough.canvas(<HTMLCanvasElement>this.roughDrawEl);
          break;
        case RenderType.SVG:
          this.roughDrawEl = <SVGSVGElement>document.createElementNS("http://www.w3.org/2000/svg", 'svg');
          this.roughWrapperEl.append(<SVGSVGElement>this.roughDrawEl);
          this.roughDrawInstance = rough.svg(<SVGSVGElement>this.roughDrawEl);
          break;
        default:
          return;
      }
    }
  }

  private performAnimation(isStart = true) {
    if (isStart) {
      if (!this.drawInterval) {
        this.drawInterval = setInterval(() => {
          this.roughDraw();
        }, 150);
      }
    } else {
      if (this.drawInterval) {
        clearInterval(this.drawInterval);
        this.drawInterval = null;
      }
    }
  }

  protected abstract roughDraw(): void;
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

  #roughWrapperEl {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;