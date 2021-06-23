var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { BaseCss, HandDrawnBase } from './base/hand-drawn-base';
let HandDrawnButton = class HandDrawnButton extends HandDrawnBase {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.value = '';
    }
    render() {
        return html `
        <div id="button" ?disabled="${this.disabled}">
            <slot @slotchange="${this.roughDraw}"></slot>
            <div id="roughWrapperEl"></div>
        </div>
    `;
    }
    static get styles() {
        return [
            BaseCss,
            css `
        :host {
          cursor: pointer;
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
    roughDraw() {
        var _a, _b, _c, _d, _e;
        const rect = {
            width: ((_a = this.button) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0,
            height: ((_b = this.button) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0
        };
        if (this.roughDrawEl instanceof HTMLCanvasElement) {
            (_c = this.roughDrawEl.getContext('2d')) === null || _c === void 0 ? void 0 : _c.clearRect(0, 0, rect.width, rect.height);
            this.roughDrawEl.width = rect.width;
            this.roughDrawEl.height = rect.height;
            (_d = this.roughDrawInstance) === null || _d === void 0 ? void 0 : _d.rectangle(this.roughPadding, this.roughPadding, rect.width - this.roughPadding * 2, rect.height - this.roughPadding * 2, this.drawOption);
        }
        else if (this.roughDrawEl instanceof SVGSVGElement) {
            if (this.roughDrawEl.childNodes[0]) {
                this.roughDrawEl.removeChild(this.roughDrawEl.childNodes[0]);
            }
            this.roughDrawEl.style.width = rect.width + 'px';
            this.roughDrawEl.style.height = rect.height + 'px';
            let node = (_e = this.roughDrawInstance) === null || _e === void 0 ? void 0 : _e.rectangle(this.roughPadding, this.roughPadding, rect.width - this.roughPadding * 2, rect.height - this.roughPadding * 2, this.drawOption);
            this.roughDrawEl.appendChild(node);
        }
    }
};
__decorate([
    query('#button'),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "button", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "disabled", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "value", void 0);
HandDrawnButton = __decorate([
    customElement('hand-drawn-button')
], HandDrawnButton);
export { HandDrawnButton };
