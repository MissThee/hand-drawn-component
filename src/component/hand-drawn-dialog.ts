import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';
import './hand-drawn-pad';

@customElement('hand-drawn-dialog')
export class HandDrawnDialog extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) visible = false;

  protected render() {
    if (this.visible) {
      return html`
          <div class="dialog-mask">
              <div class="dialog">
                  <hand-drawn-pad class="dialog-pad" realTimeResize>
                      <slot class="slot" @slotchange="${this.roughRender}"></slot>
                  </hand-drawn-pad>
              </div>
          </div>
      `;
    } else {
      return html``;
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        .dialog-mask {
          position: fixed;
          background-color: rgba(255, 255, 255, 0.75);
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .dialog {
          position: absolute;
          top: 50%;
          left: 50%;
          min-height: 50%;
          min-width: 50%;
          max-height: 100%;
          overflow: hidden;
          background-color: white;
          transform: translate(-50%, -50%);
          box-shadow: 2px 2px 10px #999999;
        }

        .dialog-pad {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          overflow: auto;
        }
      `
    ];
  }


}