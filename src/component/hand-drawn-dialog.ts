import {css, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';
// (Include sibling component dependencies)
import './hand-drawn-pad';
import './hand-drawn-icon';

@customElement('hand-drawn-dialog')
export class HandDrawnDialog extends HandDrawnBase {
  @property({type: Boolean}) visible = false;
  @property({type: Boolean}) appendToBody = false;
  @property({type: Boolean}) closeOnClickMask = false;
  private keyDownHandler = this.keyDownHandlerTmp.bind(this);
  private isAppendToBodyDone = false;

  protected render() {
    if (this.visible) {
      return html`
          <div class="dialog-mask" @click="${this.maskClickHandler}"></div>
          <div class="dialog">
              <div class="dialog-close" @click="${this.closeClickHandler}">
                  <hand-drawn-icon class="dialog-close-icon" renderType="${this.renderType}" roughOps="${this.roughOps}" animationType="${this.animationType}" type="cross">
              </div>
              <hand-drawn-pad renderType="${this.renderType}" roughOps="${this.roughOps}" animationType="${this.animationType}" class="dialog-pad" realTimeResize>
                  <slot class="slot" @slotchange="${this.roughRender}"></slot>
              </hand-drawn-pad>
          </div>
      `;
    } else {
      return html``;
    }
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    if (this.appendToBody) {
      document.body.insertBefore(this, document.body.childNodes[0]);
      this.isAppendToBodyDone = true;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.keyDownHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.keyDownHandler);
    this.visible = false;
    if (this.appendToBody && this.isAppendToBodyDone && this && this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }

  private keyDownHandlerTmp(e: KeyboardEvent) {
    if (e.key === 'Escape') {// e.keyCode === 27
      this.visible = false;
    }
  }

  private closeClickHandler() {
    this.visible = false;
  }

  private maskClickHandler() {
    if (this.closeOnClickMask) {
      this.visible = false;
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          position: absolute;
        }

        .dialog-mask {
          position: fixed;
          background-color: rgba(255, 255, 255, 0.75);
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10000;
        }

        .dialog {
          position: fixed;
          top: 15%;
          left: 50%;
          width: 65%;
          min-width: 300px;
          height: 60%;
          overflow: visible;
          background-color: white;
          transform: translate(-50%, 0);
          box-shadow: 2px 2px 10px #999999;
          z-index: 10001;
        }

        .dialog-pad {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: auto;
        }

        .dialog-close {
          display: inline-block;
          position: absolute;
          top: 0;
          right: -20px;
          z-index: 10002;
          cursor: pointer;
        }

        .dialog-close-icon {
          pointer-events: none;
        }
      `
    ];
  }


}