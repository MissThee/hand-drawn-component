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

    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        if (this.animationType === AnimationType.ACTIVE) {
            this.animationType = AnimationType.LESS
        }
        this.updateAnimationState()
    }

    protected render() {
        return html`
            <div class="pad ${this.noBorder ? "" : "rough"}">
                <div class="pad-content">
                    <slot @slotchange="${this.roughRender}"></slot>
                </div>
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
                padding: 3px;
                background: none;
                overflow: hidden;
                user-select: none;
                border: none;
                outline: none;
                position: inherit;
                top: inherit;
                bottom: inherit;
                left: inherit;
                right: inherit;
              }

              .pad-content {
                position: relative;
                overflow: auto;
                height: 100%;
                z-index: 1000;
              }
            `
        ];
    }
}
