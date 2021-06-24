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
import { property, queryAll } from 'lit/decorators.js';
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
        this.roughObjArray = [];
        this.drawInterval = null;
        this.roughPadding = 5;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.roughInit();
        this.roughRefresh();
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
        if (this.roughParentElArray && this.roughParentElArray.length > 0) {
            for (let roughParentEl of this.roughParentElArray) {
                switch (this.renderType) {
                    case RenderType.CANVAS: {
                        const roughDrawEl = document.createElement('canvas');
                        roughDrawEl.classList.add('rough-context');
                        roughParentEl.append(roughDrawEl);
                        const roughDrawInstance = rough.canvas(roughDrawEl);
                        this.roughObjArray.push({
                            roughParentEl: roughParentEl,
                            roughEl: roughDrawEl,
                            roughInstance: roughDrawInstance
                        });
                        break;
                    }
                    case RenderType.SVG: {
                        const roughDrawEl = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
                        roughDrawEl.classList.add('rough-context');
                        roughParentEl.append(roughDrawEl);
                        const roughDrawInstance = rough.svg(roughDrawEl);
                        this.roughObjArray.push({
                            roughParentEl: roughParentEl,
                            roughEl: roughDrawEl,
                            roughInstance: roughDrawInstance
                        });
                        break;
                    }
                    default:
                        return;
                }
            }
        }
    }
    performAnimation(isStart = true) {
        if (isStart) {
            if (!this.drawInterval) {
                this.drawInterval = setInterval(() => {
                    this.roughRefresh();
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
    roughRefresh() {
        this.roughSize();
        this.roughDraw();
    }
    roughSize() {
        for (let roughObj of this.roughObjArray) {
            const size = {
                width: roughObj.roughParentEl.clientWidth,
                height: roughObj.roughParentEl.clientHeight
            };
            roughObj.roughEl.style.width = size.width + 'px';
            roughObj.roughEl.style.height = size.height + 'px';
            roughObj.roughEl.setAttribute('width', String(size.width));
            roughObj.roughEl.setAttribute('height', String(size.height));
        }
    }
    roughDraw() {
        var _a;
        for (let roughObj of this.roughObjArray) {
            const size = {
                width: roughObj.roughParentEl.clientWidth,
                height: roughObj.roughParentEl.clientHeight
            };
            if (roughObj.roughEl instanceof HTMLCanvasElement) {
                (_a = roughObj.roughEl.getContext('2d')) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.clientWidth, this.clientHeight);
                roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, this.drawOption);
            }
            else if (roughObj.roughEl instanceof SVGSVGElement) {
                let node = roughObj.roughInstance.rectangle(this.roughPadding, this.roughPadding, size.width - this.roughPadding * 2, size.height - this.roughPadding * 2, this.drawOption);
                roughObj.roughEl.innerHTML = '';
                roughObj.roughEl.appendChild(node);
            }
        }
    }
}
__decorate([
    queryAll('.rough'),
    __metadata("design:type", Object)
], HandDrawnBase.prototype, "roughParentElArray", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], HandDrawnBase.prototype, "drawOption", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
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

  .rough {
    position: relative;
  }

  .rough > .rough-context {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
