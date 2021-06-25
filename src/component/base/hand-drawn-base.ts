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

export enum AnimationType {
  HOVER = 'hover',
  ALWAYS = 'always',
  NONE = 'none',
}

export interface RoughSize {
  width: number,
  height: number
}

export interface RoughObj {
  roughFirstRendered: boolean
  roughParentEl: HTMLElement
  roughParentElSizePre: RoughSize

}

export interface RoughObjSvg extends RoughObj {
  roughEl: SVGSVGElement
  roughInstance: RoughSVG

}

export interface RoughObjCanvas extends RoughObj {
  roughEl: HTMLCanvasElement
  roughInstance: RoughCanvas
}


export abstract class HandDrawnBase extends LitElement {
  private fontInfoArray = [
    {fontFamily: 'comic', fontSrc: '/src/assets/font/comic.ttf'},
    {fontFamily: 'comicbd', fontSrc: '/src/assets/font/comicbd.ttf'},
    {fontFamily: 'comici', fontSrc: '/src/assets/font/comici.ttf'},
    {fontFamily: 'comicz', fontSrc: '/src/assets/font/comicz.ttf'},
    {fontFamily: 'FZMWFont', fontSrc: '/src/assets/font/FZMWFont.woff2'}
  ];
  @queryAll('.rough') private roughParentElArray: HTMLElement[] | undefined;
  @property({type: Object}) protected drawOption: Options = {
    bowing: 0.5,
    roughness: 1
  };
  @property() protected renderType: RenderType = RenderType.CANVAS;
  @property() protected animationType: AnimationType = AnimationType.HOVER;
  protected roughObjArray: (RoughObjSvg | RoughObjCanvas)[] = [];
  private drawInterval: NodeJS.Timeout | null = null;
  private resizeTimeout: NodeJS.Timeout | null = null;
  protected roughPadding: number = 2;

  constructor() {
    super();
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.roughInit();
    this.roughRender();
    this.setFont();
    if (this.animationType === AnimationType.ALWAYS) {
      this.performAnimation(true);
    }
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    setTimeout(() => {
      this.roughRender();
    }, 0);
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

  // private detectZoom() {
  //   let ratio = 0,
  //     screen = window.screen,
  //     ua = navigator.userAgent.toLowerCase();
  //
  //   if (window.devicePixelRatio !== undefined) {
  //     ratio = window.devicePixelRatio;
  //   } else if (~ua.indexOf('msie')) {
  //     // @ts-ignore
  //     if (screen.deviceXDPI && screen.logicalXDPI) {
  //       // @ts-ignore
  //       ratio = screen.deviceXDPI / screen.logicalXDPI;
  //     }
  //   } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
  //     ratio = window.outerWidth / window.innerWidth;
  //   }
  //
  //   if (ratio) {
  //     ratio = Math.round(ratio * 100);
  //   }
  //
  //   return ratio;
  // }

  private setFont() {
    let fontFamilyStr = ''
    for (let fontInfo of this.fontInfoArray) {
      if (fontInfo.fontFamily && fontInfo.fontSrc) {
        fontFamilyStr += "'" + fontInfo.fontFamily + "',"
        this.loadFonts(fontInfo.fontFamily, fontInfo.fontSrc).then(() => {
          this.roughRender();
        });
      }
    }
    if (fontFamilyStr) {
      document.body.style.fontFamily = fontFamilyStr.substr(0, fontFamilyStr.length - 1);
    }

  }

  private async loadFonts(fontFamily: string, fontSrc: string) {
    // @ts-ignore
    const font = new FontFace(fontFamily, `url(${fontSrc})`);
    const loadFontFace: any = await font.load();
    // @ts-ignore
    document.fonts.add(loadFontFace);
  };

  private resizeHandler() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    this.resizeTimeout = setTimeout(() => {
      this.roughRender();
    }, 30);
  }

  protected mouseLeaveHandler() {
    if (this.animationType === AnimationType.HOVER) {
      this.performAnimation(false);
    }
  }

  protected mouseHoverHandler() {
    if (this.animationType === AnimationType.HOVER) {
      this.performAnimation(true);
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
                width: roughParentEl.clientWidth,
                height: roughParentEl.clientHeight
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
                width: roughParentEl.clientWidth,
                height: roughParentEl.clientHeight
              }
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
          this.roughRender(true);
        }, 150);
      }
    } else {
      if (this.drawInterval) {
        clearInterval(this.drawInterval);
        this.drawInterval = null;
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
    }
    roughObj.roughEl.style.width = size.width + 'px';
    roughObj.roughEl.style.height = size.height + 'px';
    roughObj.roughEl.setAttribute('width', String(size.width));
    roughObj.roughEl.setAttribute('height', String(size.height));
  }

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {
    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    }
    if (roughObj.roughEl instanceof HTMLCanvasElement) {
      roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
    }
    const nodeArray = []
    nodeArray.push(roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, this.drawOption));
    if (roughObj.roughEl instanceof SVGSVGElement) {
      roughObj.roughEl.innerHTML = '';
      for (let node of nodeArray) {
        roughObj.roughEl.appendChild(<Node>node);
      }
    }
  }

  // private roughSize() {
  //   for (let roughObj of this.roughObjArray) {
  //     const size = {
  //       width: roughObj.roughParentEl.clientWidth,
  //       height: roughObj.roughParentEl.clientHeight
  //     };
  //     roughObj.roughEl.style.width = size.width + 'px';
  //     roughObj.roughEl.style.height = size.height + 'px';
  //     roughObj.roughEl.setAttribute('width', String(size.width));
  //     roughObj.roughEl.setAttribute('height', String(size.height));
  //   }
  // }

  // protected roughDraw() {
  //   for (let roughObj of this.roughObjArray) {
  //     const size = {
  //       width: roughObj.roughParentEl.clientWidth,
  //       height: roughObj.roughParentEl.clientHeight
  //     };
  //     if (roughObj.roughEl instanceof HTMLCanvasElement) {
  //       roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
  //       roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, this.drawOption);
  //     } else if (roughObj.roughEl instanceof SVGSVGElement) {
  //       let node = roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, this.drawOption);
  //       roughObj.roughEl.innerHTML = '';
  //       roughObj.roughEl.appendChild(<Node>node);
  //     }
  //   }
  // }
  static get styles() {
    return css`
      //@font-face { // no effect
      //  font-family: 'FZMWFont';
      //  font-style: normal;
      //  font-weight: 400;
      //  font-display: swap;
      //  src: url('../../assets/font/FZMWFont.ttf');
      //}

      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        position: relative;
        font-family: inherit, 'Comic Sans MS', 'Comic Sans', monospace, sans-serif;
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
    `
  }
}

