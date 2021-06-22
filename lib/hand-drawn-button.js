var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import rough from 'roughjs';
let HandDrawnButton = class HandDrawnButton extends LitElement {
    constructor() {
        super();
        this.renderType = 'canvas';
        this.rcPadding = 2;
        this.drawOption = { bowing: 3 };
        this.drawInterval = null;
        this.disabled = false;
        this.isHover = false;
        this.value = '';
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.overlay) {
            switch (this.renderType) {
                case 'canvas':
                    this.renderEl = document.createElement('canvas');
                    this.rc = rough.canvas(this.renderEl);
                    break;
                case 'svg':
                    this.renderEl = this.createSVGElement('svg');
                    this.rc = rough.svg(this.renderEl);
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
        }
        else {
            if (this.drawInterval) {
                clearInterval(this.drawInterval);
                this.drawInterval = null;
            }
        }
    }
    draw() {
        var _a;
        if (this.rc && this.overlay && this.renderEl && this.button) {
            this.overlay.append(this.renderEl);
            const rect = {
                width: this.button.clientWidth,
                height: this.button.clientHeight
            };
            if (this.renderEl instanceof HTMLCanvasElement) {
                (_a = this.renderEl.getContext('2d')) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, rect.width, rect.height);
                this.renderEl.width = rect.width;
                this.renderEl.height = rect.height;
                this.rc.rectangle(this.rcPadding, this.rcPadding, rect.width - this.rcPadding * 2, rect.height - this.rcPadding * 2, this.drawOption);
            }
            else if (this.renderEl instanceof SVGSVGElement) {
                if (this.renderEl.childNodes[0]) {
                    this.renderEl.removeChild(this.renderEl.childNodes[0]);
                }
                this.renderEl.style.width = rect.width + 'px';
                this.renderEl.style.height = rect.height + 'px';
                let node = this.rc.rectangle(this.rcPadding, this.rcPadding, rect.width - this.rcPadding * 2, rect.height - this.rcPadding * 2, this.drawOption);
                this.renderEl.appendChild(node);
            }
        }
    }
    createSVGElement(tag) {
        return document.createElementNS("http://www.w3.org/2000/svg", tag);
    }
    render() {
        return html `
        <div id="button" ?disabled="${this.disabled}">
            <slot></slot>
            <div id="overlay"></div>
        </div>
    `;
    }
    static get styles() {
        return [
            css `
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
};
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "renderType", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "renderEl", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "rc", void 0);
__decorate([
    property(),
    __metadata("design:type", Number)
], HandDrawnButton.prototype, "rcPadding", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "drawOption", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "drawInterval", void 0);
__decorate([
    query('#button'),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "button", void 0);
__decorate([
    query('#overlay'),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "overlay", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: false }),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "isHover", void 0);
__decorate([
    property({ type: String, reflect: true }),
    __metadata("design:type", Object)
], HandDrawnButton.prototype, "value", void 0);
HandDrawnButton = __decorate([
    customElement('hand-drawn-button'),
    __metadata("design:paramtypes", [])
], HandDrawnButton);
export { HandDrawnButton };
