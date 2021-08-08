import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';

// use with selector
@customElement('hand-drawn-item')
export class HandDrawnItem extends HandDrawnBase {
    @property({type: Boolean, reflect: true}) disabled = false;
    @property({type: Boolean}) checked = false;
    @property({type: String}) value: string | null = null;
    @property({type: String}) name: string | null = null;
    @property({type: String}) selectedColor: string = 'deepskyblue';
    @property({type: Boolean, state:true}) isHover: boolean = false

    private isMouseDown: boolean = false
    private itemMouseUpHandler = this.itemMouseUpHandlerTmp.bind(this)

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    protected render() {
        return html`
            <div
                    class="rough item"
                    style="${this.checked ? 'color:' + this.selectedColor : 'inherit'};${this.isHover ? 'font-weight:bold' : 'normal'}"
                    @mousedown="${this.itemMouseDownHandler}"
                    ?disabled="${this.disabled}"
            >${this.name}
            </div>
        `;
    }

    protected createRenderRoot(): ShadowRoot | Element {
        return super.createRenderRoot();
    }

    private itemMouseDownHandler(event: CustomEvent) {
        if (this.disabled) {
            return
        }
        event.preventDefault();
        event.stopPropagation();
        this.isMouseDown = true
    }

    private itemMouseUpHandlerTmp(event: Event) {
        if (this.disabled) {
            return
        }
        if (this.isMouseDown) {
            event.stopPropagation();
            this.checked = true;
            this.dispatchEvent(new CustomEvent('change', {
                composed: true,
                bubbles: true,
                detail: {
                    value: this.value,
                    name: this.name,
                    checked: this.checked
                }
            }));
        }
        this.isMouseDown = false
    }

    protected updateAnimationState() {
        if (!this.disabled) {
            super.updateAnimationState();
        }
    }

    private hoverHandler() {
        this.isHover = true
    }

    private leaveHandler() {
        this.isHover = false
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('mouseover', this.hoverHandler)
        this.addEventListener('mouseleave', this.leaveHandler)
        window.addEventListener('mouseup', this.itemMouseUpHandler)
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mouseover', this.hoverHandler)
        this.removeEventListener('mouseleave', this.leaveHandler)
        window.removeEventListener('mouseup', this.itemMouseUpHandler)
    }

    static get styles() {
        return [
            super.styles,
            css`
              :host {
                display: block;
              }

              .item {
                word-break:keep-all;
                white-space:nowrap;
                padding: 0.2em 0;
                position: relative;
                border: none;
                background: none;
                cursor: pointer;
                outline: none;
              }

              .item-input:focus {
                font-weight: bold;
              }

              .item[disabled] {
                opacity: 0.5;
                cursor: not-allowed;
              }
            `
        ];
    }


}
