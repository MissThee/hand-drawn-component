import {css, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {AnimationType, HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-pad')
export class HandDrawnPad extends HandDrawnBase {
  @property() bodyStyle: string = '';
  // @property({type: String}) style: CSSStyleDeclaration = <CSSStyleDeclaration>{};
  @property({type: Boolean}) noBorder = false;
  @property({type: Boolean}) realTimeResize = false;
  private textareaResizeInterval: NodeJS.Timeout | null = null;

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.animationType = AnimationType.NONE;
  }

  protected render() {
    return html`
        ${this.noBorder ? '' : html`
            <div class="pad rough"></div>`}
        <div class="pad-content">
            <slot @slotchange="${this.roughRender}"></slot>
        </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.textareaResizeInterval) {
      clearInterval(this.textareaResizeInterval);
      this.textareaResizeInterval = null;
    }
    if (this.realTimeResize) {
      this.textareaResizeInterval = setInterval(() => {
        this.resizeHandler();
      }, this.animationIntervalTime);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.textareaResizeInterval) {
      clearInterval(this.textareaResizeInterval);
      this.textareaResizeInterval = null;
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        .pad {
          background-color: white;
          overflow: auto;
          user-select: none;
          border: none;
          outline: none;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;
        }

        .pad-content {
          overflow: auto;
          height: 100%;
          z-index: 1000;
        }
      `
    ];
  }
}
