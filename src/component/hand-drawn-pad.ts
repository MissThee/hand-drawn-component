import {css, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {AnimationType, BaseCss, HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-pad')
export class HandDrawnPad extends HandDrawnBase {
  @property() bodyStyle: string = '';

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.animationType=AnimationType.NONE
  }

  protected render() {
    return html`
        <div id="pad" class="rough"></div>
        <slot id="slot" @slotchange="${this.roughRender}"></slot>
    `;
  }

  static get styles() {
    return [
      BaseCss,
      css`
        :host {
        }

        #pad {
          overflow: hidden;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          //padding: 5px;
          color: inherit;
          outline: none;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `
    ];
  }
}