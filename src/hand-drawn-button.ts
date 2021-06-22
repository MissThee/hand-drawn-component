import {LitElement, css, TemplateResult, html, CSSResultArray, PropertyValues} from 'lit';
import {Options} from 'roughjs/bin/core';
import {customElement, property, query} from 'lit/decorators.js';
import rough from 'roughjs';
import {RoughCanvas} from 'roughjs/bin/canvas';
import {RoughSVG} from 'roughjs/bin/svg';

@customElement('hand-drawn-button')
export class HandDrawnButton extends LitElement {
  constructor() {
    super();
  }

  @property() renderType: 'canvas' | 'svg' | undefined = 'canvas';
  @property() renderEl: HTMLCanvasElement | SVGSVGElement | undefined;
  @property() rc: RoughCanvas | RoughSVG | undefined;
  @property() rcPadding: number = 2;
  @property() drawOption: Options = {bowing: 3};
  @property() drawInterval: NodeJS.Timeout | null = null;


  @query('#button') protected button: HTMLElement | undefined;
  @query('#overlay') protected overlay: HTMLElement | undefined;

  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean, reflect: false}) isHover = false;
  @property({type: String, reflect: true}) value = '';

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    if (this.overlay) {
      switch (this.renderType) {
        case 'canvas':
          this.renderEl = document.createElement('canvas');
          this.rc = rough.canvas(<HTMLCanvasElement>this.renderEl);
          break;
        case 'svg':
          this.renderEl = <SVGSVGElement>this.createSVGElement('svg');
          this.rc = rough.svg(<SVGSVGElement>this.renderEl);
          break;
        default:
          return;
      }
    }
    this.draw();
  }

  connectedCallback() {
    // setTimeout(() => {
    //   this.disabled=true
    // }, 2000);
    super.connectedCallback();
    this.addEventListener('mouseover', this.mouseHoverHandler);
    this.addEventListener('mouseleave', this.mouseLeaveHandler);
  }

  disconnectedCallback() {
    super.connectedCallback();
    this.removeEventListener('mouseover', this.mouseHoverHandler);
    this.removeEventListener('mouseleave', this.mouseLeaveHandler);
  }

  mouseHoverHandler() {
    this.performAnimation(true);
  }

  mouseLeaveHandler() {
    this.performAnimation(false);
  }

  performAnimation(isStart = true) {
    if (isStart) {
      if (!this.drawInterval) {
        this.drawInterval = setInterval(() => {
          this.draw();
        }, 150);
      }
    } else {
      if (this.drawInterval) {
        clearInterval(this.drawInterval);
        this.drawInterval = null;
      }
    }
  }

  draw() {
    if (this.rc && this.overlay && this.renderEl && this.button) {
      this.overlay.append(<HTMLCanvasElement>this.renderEl);
      const rect = { // this.button.getBoundingClientRect();  //Will be affected by scale
        width: this.button.clientWidth,
        height: this.button.clientHeight
      };
      if (this.renderEl instanceof HTMLCanvasElement) {
        this.renderEl.getContext('2d')?.clearRect(0, 0, rect.width, rect.height);
        this.renderEl.width = rect.width;
        this.renderEl.height = rect.height;
        this.rc.rectangle(this.rcPadding, this.rcPadding, rect.width - this.rcPadding * 2, rect.height - this.rcPadding * 2, this.drawOption);
      } else if (this.renderEl instanceof SVGSVGElement) {
        if (this.renderEl.childNodes[0]) {
          this.renderEl.removeChild(this.renderEl.childNodes[0]);
        }
        this.renderEl.style.width = rect.width + 'px';
        this.renderEl.style.height = rect.height + 'px';
        let node = this.rc.rectangle(this.rcPadding, this.rcPadding, rect.width - this.rcPadding * 2, rect.height - this.rcPadding * 2, this.drawOption);
        this.renderEl.appendChild(<Node>node);
      }
    }
  }

  createSVGElement(tag: string) {
    return document.createElementNS("http://www.w3.org/2000/svg", tag);
  }

  render(): TemplateResult {
    return html`
        <div id="button" ?disabled="${this.disabled}">
            <slot></slot>
            <div id="overlay"></div>
        </div>
    `;
  }

  static get styles(): CSSResultArray {
    return [
      css`
        :host {
          display: inline-block;
        }

        #overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #button {
          overflow: hidden;
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-align: center;
          padding: 10px 12px;
          color: inherit;
          outline: none;
        }

        #button:active {
          transform: scale(0.95)
        }

        #button[disabled] {
          opacity: 0.6;
          background: rgba(0, 0, 0, 0.07);
          cursor: not-allowed;
        }

        #button[disabled]:active {
          transform: scale(1)
        }
      `
    ];
  }

}