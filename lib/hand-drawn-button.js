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
        <div id="button" class="rough" ?disabled="${this.disabled}">
            <slot @slotchange="${this.roughDraw}"></slot>
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
