import {css, html, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';
import './hand-drawn-radio';
import {HandDrawnItem} from "./hand-drawn-item";

export interface itemEl extends HandDrawnItem, HTMLElement {
}

@customElement('hand-drawn-selector')
export class HandDrawnSelector extends HandDrawnBase {
    @property({type: Boolean, reflect: true}) disabled = false;
    @query('slot') slotEl: HTMLSlotElement | undefined;
    @query('#itemListScroll') itemListScrollEl: HTMLElement | undefined;
    @property({type: String}) placeholder: string | null = null;
    @property({type: String}) selectedValue: string | null = null;
    @property({type: String}) selectedColor: string = 'deepskyblue';
    @property({type: String, state: true}) selectedName: string | null = null;
    @property({type: String, state: true}) private isShowItemList = false
    focusItem: { value: string | null, name: string | null } | null = null
    focusItemIndex: number = -1
    itemLength: number = 0

    protected render() {
        return html`
            <div class="selector-wrapper" ?disabled="${this.disabled}">
                <div class="rough selector-text" ?disabled="${this.disabled}" @click="${this.showItemListHandler}">
                    <div style="overflow: hidden">
                        <span style="${this.selectedName?.length ? 'display:none' : 'color:#ccc'}">${this.placeholder}</span>
                        <span>${this.selectedName}</span>
                    </div>
                </div>
                <div id="dot" class="selector-dot rough"></div>
                <div class="rough selector-list" style="${this.isShowItemList ? '' : 'display:none'}">
                    <div id="itemListScroll" class="selector-list-scroll">
                        <slot id="slot" .class="slot"></slot>
                    </div>
                </div>
            </div>
        `;
    }

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
        this.setItemState();
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        this.setAttribute('tabindex', this.disabled ? '' : '0')
    }

    protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {
        const size = {
            width: roughObj.roughParentEl.clientWidth,
            height: roughObj.roughParentEl.clientHeight
        };
        if (roughObj.roughParentEl.id === 'dot') {
            if (roughObj.roughEl instanceof HTMLCanvasElement) {
                roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
            }
            const nodeArray = [];
            nodeArray.push(roughObj.roughInstance.line(0, 0, size.width, 0));
            nodeArray.push(roughObj.roughInstance.line(size.width, 0, size.width / 2, size.height));
            nodeArray.push(roughObj.roughInstance.line(size.width / 2, size.height, 0, 0));
            if (roughObj.roughEl instanceof SVGSVGElement) {
                roughObj.roughEl.innerHTML = '';
                for (let node of nodeArray) {
                    roughObj.roughEl.appendChild(<Node>node);
                }
            }
        } else {
            super.roughDrawOne(roughObj);
        }
    }

    private showItemListHandler() {
        if (this.disabled) {
            return
        }
        if (this.itemLength >= 0) {
            if (!this.isShowItemList) {
                this.focusItemIndex = -1
            }
        }
        this.setItemState()
        this.isShowItemList = true
    }

    private closeItemListHandler() {
        this.isShowItemList = false
    }

    private keyDownHandler(e: KeyboardEvent) {
        switch (e.code) {
            case'Enter':
            case'Space':
                if (this.isShowItemList) {
                    if (this.focusItem) {
                        this.selectedValue = this.focusItem.value;
                        this.selectedName = this.focusItem.name;
                        this.closeItemListHandler()
                    }
                } else {
                    this.showItemListHandler()
                }
                e.stopPropagation()
                e.preventDefault()
                break;
            case'Escape':
                this.isShowItemList = false;
                e.stopPropagation()
                e.preventDefault()
                break;
            case'ArrowUp':
                this.showItemListHandler()
                this.focusItemIndex = Math.max(0, this.focusItemIndex - 1)
                this.setItemState()
                e.stopPropagation()
                e.preventDefault()
                break;
            case'ArrowDown':
                this.showItemListHandler()
                this.focusItemIndex = Math.min(this.itemLength - 1, this.focusItemIndex + 1)
                this.setItemState()
                e.stopPropagation()
                e.preventDefault()
                break;
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('change', this.change);
        this.addEventListener('blur', this.closeItemListHandler);
        this.addEventListener('focus', this.showItemListHandler);
        this.addEventListener('keydown', this.keyDownHandler, {passive: false})
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('change', this.change);
        this.removeEventListener('blur', this.closeItemListHandler);
        this.removeEventListener('focus', this.showItemListHandler);
        this.removeEventListener('keydown', this.keyDownHandler)
    }

    private change(e: Event) {
        // console.log('change', e);
        if (e instanceof CustomEvent) {
            this.selectedValue = e.detail.value;
            this.selectedName = e.detail.name;
            this.closeItemListHandler()
        }
    }

    private setItemState() {
        const els = ((this.slotEl?.assignedNodes() || []) as itemEl[]).filter(e => e.tagName === 'HAND-DRAWN-ITEM');
        this.selectedName = this.selectedValue
        this.itemLength = els.length
        this.focusItem = null
        els.forEach((itemEl, index) => {
            itemEl.disabled = this.disabled || itemEl.disabled;
            itemEl.isHover = index === this.focusItemIndex
            if (itemEl.isHover) {
                this.focusItem = {value: itemEl.value, name: itemEl.name}
                if (this.itemListScrollEl) {
                    this.itemListScrollEl.scrollTop = itemEl.offsetTop
                }
            }
            itemEl.checked = this.selectedValue === itemEl.value;
            if (itemEl.checked) {
                this.selectedName = itemEl.name
            }
            if (!itemEl.selectedColor) {
                itemEl.selectedColor = this.selectedColor
            }
        });
    }

    static get styles() {
        return [
            super.styles,
            //all children of slot, in this html root level
            css`
              :host {
                width: 100%;
                outline: none;
              }

              .rough-context {
                background-color: white;
              }

              .selector-text {
                cursor: pointer;
                position: relative;
                overflow: hidden;
                display: block;
                padding: 0 24px 0 0.8em;
                width: 100%;
                height: 2em;
                line-height: 2em;
              }

              .selector-list {
                position: absolute;
                top: 2em;
                padding: 0 2px 2px 0;
                margin: 0;
                overflow: hidden;
                z-index: 100;
                display: block;
                width: 100%;
              }

              .selector-list-scroll {
                position: relative;
                padding: 0.5em 0.8em;
                max-height: 12em;
                overflow: auto;
              }

              .selector-wrapper {
                font: inherit;
                position: relative;
                border: none;
                letter-spacing: 1.25px;
                overflow: visible;
                text-align: left;
                outline: none;
                width: 100%;
                height: 2em;
              }

              .selector-wrapper[disabled] {
                opacity: 0.5;
                background: rgba(0, 0, 0, 0.08);
                cursor: not-allowed;
              }

              .selector-dot {
                transform: translateY(-50%);
                display: inline-block;
                height: 8px;
                width: 8px;
                position: absolute;
                top: 50%;
                right: 10px;
              }
            `
        ];
    }

}
