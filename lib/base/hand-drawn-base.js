var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { css, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import rough from 'roughjs';
var RenderType;
(function (RenderType) {
    RenderType["CANVAS"] = "canvas";
    RenderType["SVG"] = "svg";
})(RenderType || (RenderType = {}));
var AnimationTpe;
(function (AnimationTpe) {
    AnimationTpe["HOVER"] = "hover";
    AnimationTpe["ALWAYS"] = "always";
    AnimationTpe["NONE"] = "none";
})(AnimationTpe || (AnimationTpe = {}));
export class HandDrawnBase extends LitElement {
    constructor() {
        super(...arguments);
        this.drawOption = { bowing: 3 };
        this.renderType = RenderType.CANVAS;
        this.animationTpe = AnimationTpe.HOVER;
        this.drawInterval = null;
        this.roughPadding = 5;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.roughInit();
        this.roughDraw();
        if (this.animationTpe === AnimationTpe.ALWAYS) {
            this.performAnimation(true);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('mouseenter', this.mouseHoverHandler);
        this.addEventListener('mouseleave', this.mouseLeaveHandler);
    }
    disconnectedCallback() {
        super.connectedCallback();
        this.removeEventListener('mouseenter', this.mouseHoverHandler);
        this.removeEventListener('mouseleave', this.mouseLeaveHandler);
    }
    mouseHoverHandler() {
        if (this.animationTpe === AnimationTpe.HOVER) {
            this.performAnimation(true);
        }
    }
    mouseLeaveHandler() {
        if (this.animationTpe === AnimationTpe.HOVER) {
            this.performAnimation(false);
        }
    }
    roughInit() {
        if (this.roughWrapperEl) {
            switch (this.renderType) {
                case RenderType.CANVAS:
                    this.roughDrawEl = document.createElement('canvas');
                    this.roughWrapperEl.append(this.roughDrawEl);
                    this.roughDrawInstance = rough.canvas(this.roughDrawEl);
                    break;
                case RenderType.SVG:
                    this.roughDrawEl = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                    this.roughWrapperEl.append(this.roughDrawEl);
                    this.roughDrawInstance = rough.svg(this.roughDrawEl);
                    break;
                default:
                    return;
            }
        }
    }
    performAnimation(isStart = true) {
        if (isStart) {
            if (!this.drawInterval) {
                this.drawInterval = setInterval(() => {
                    this.roughDraw();
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
}
__decorate([
    query('#roughWrapperEl'),
    __metadata("design:type", Object)
], HandDrawnBase.prototype, "roughWrapperEl", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnBase.prototype, "drawOption", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnBase.prototype, "renderType", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], HandDrawnBase.prototype, "animationTpe", void 0);
export const BaseCss = css `
  :host {
    display: inline-block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    position: relative;
  }

  #roughWrapperEl {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
