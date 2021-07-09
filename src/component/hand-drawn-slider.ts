import {css, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';

@customElement('hand-drawn-slider')
export class HandDrawnSlider extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean, reflect: true}) isVertical = false;
  @property({type: Number}) max = 100;
  @property({type: Number}) min = 0;
  @property({type: Number}) value = 0;
  @property({type: Number}) step = 1;
  private isMouseDown = false;
  private mouseUpHandler = this.mouseUpHandlerTmp.bind(this);
  private slideHandler = this.slideHandlerTmp.bind(this);

  protected updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }

  protected render() {
    return html`
        <label class="slider-wrapper ${this.isVertical ? "slider-wrapper--vertical" : "slider-wrapper--horizontal"}" ?disabled="${this.disabled}">
            <input type="range" style="opacity: 0;position: absolute;z-index: -1;width: 0;height: 0">
            <div id="sliderLine" class="slider-line ${this.isVertical ? "slider-line--vertical" : "slider-line--horizontal"} rough">
                <div id="sliderButton"
                     class="slider-button ${this.isVertical ? "slider-button--vertical" : "slider-button--horizontal"} rough"
                     style="${this.isVertical ? 'bottom' : 'left'}:${this.value}% "
                >
                    <div
                            class="slider-value ${this.isVertical ? "slider-value--vertical" : "slider-value--horizontal"}"
                            style="display: ${this.isFocus || this.isMouseDown || this.isMouseIn ? 'inherit' : 'none'}"
                    >${this.value}
                    </div>
                </div>
            </div>
        </label>
    `;
  }

  willUpdate(_changedProperties: PropertyValues) {
    this.max = Math.max(this.max, this.min);
    super.willUpdate(_changedProperties);
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('mousedown', this.mouseDownHandler);
    window.addEventListener('mousemove', this.slideHandler);
    window.addEventListener('mouseup', this.mouseUpHandler);
    this.addEventListener('touchstart', this.mouseDownHandler);
    window.addEventListener('touchmove', this.slideHandler, {passive: false});
    window.addEventListener('touchend', this.mouseUpHandler);
    this.addEventListener('keydown', this.keyDownHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mousedown', this.mouseDownHandler);
    window.removeEventListener('mousemove', this.slideHandler);
    window.removeEventListener('mouseup', this.mouseUpHandler);
    this.removeEventListener('touchstart', this.mouseDownHandler);
    window.removeEventListener('touchmove', this.slideHandler);
    window.removeEventListener('touchend', this.mouseUpHandler);
    this.removeEventListener('keydown', this.keyDownHandler);
  }

  protected mouseInHandler() {
    super.mouseInHandler();
    this.requestUpdate();
  }

  protected mouseOutHandler() {
    super.mouseOutHandler();
    this.requestUpdate();
  }

  protected focusHandler() {
    super.focusHandler();
    this.requestUpdate();
  }

  protected blurHandler() {
    super.blurHandler();
    this.requestUpdate();
  }

  private keyDownHandler(e: KeyboardEvent) {
    let nextValue = this.value;
    if (this.isVertical) {
      switch (e.key) {
        case "ArrowUp":
          nextValue += this.step || 1;
          break;
        case "ArrowDown":
          nextValue = (Math.ceil(nextValue / this.step) - 1) * this.step;
          break;
      }
    } else {
      switch (e.key) {
        case "ArrowRight":
          nextValue += this.step || 1;
          break;
        case "ArrowLeft":
          nextValue = (Math.ceil(nextValue / this.step) - 1) * this.step;
          break;
      }
    }

    nextValue = Math.max(this.min, nextValue);
    nextValue = Math.min(this.max, nextValue);
    this.value = nextValue;
  }

  private mouseDownHandler(e: UIEvent) {
    this.isMouseDown = true;
    this.value = this.getNextValueByPoint(e);
  }

  private mouseUpHandlerTmp() {
    this.isMouseDown = false;
  }

  private slideHandlerTmp(e: UIEvent) {
    if (this.isMouseDown) {
      this.value = this.getNextValueByPoint(e);
      console.log('!!!', e.stopPropagation);
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    }
  }

  private getNextValueByPoint(e: UIEvent) {
    let point;
    if (e instanceof MouseEvent) {
      point = {
        x: e.clientX,
        y: e.clientY
      };
    } else if (e instanceof TouchEvent) {
      point = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    } else {
      console.error('unknown event', e);
      return this.value;
    }

    let nextValue;
    if (this.isVertical) {
      if (this.clientHeight * (this.max - this.min) === 0) {
        nextValue = this.min;
      } else {
        const componentBottomInPage = this.getBoundingClientRect().top;
        nextValue = ((this.clientHeight - point.y + componentBottomInPage) / this.clientHeight) * (this.max - this.min);
      }
    } else {
      if (this.clientWidth * (this.max - this.min) === 0) {
        nextValue = this.min;
      } else {
        const componentLeftInPage = this.getBoundingClientRect().left;
        nextValue = ((point.x - componentLeftInPage) / this.clientWidth) * (this.max - this.min);
      }
    }
    if (this.step) {
      nextValue = Math.round(nextValue / this.step) * this.step;
    }

    nextValue = Math.max(this.min, nextValue);
    nextValue = Math.min(this.max, nextValue);

    return nextValue;
  }

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {

    const size = {
      width: roughObj.roughParentEl.clientWidth,
      height: roughObj.roughParentEl.clientHeight
    };
    if (roughObj.roughParentEl.id === 'sliderLine') {
      super.roughDrawOne(roughObj, {
        ...this.roughOps,
        fill: this.roughOps.stroke,
        strokeWidth: this.roughOpsOrigin.strokeWidth,
        fillStyle: 'zigzag'
      });
    } else if (roughObj.roughParentEl.id === 'sliderButton') {
      if (roughObj.roughEl instanceof HTMLCanvasElement) {
        roughObj.roughEl.getContext('2d')?.clearRect(0, 0, this.clientWidth, this.clientHeight);
      }
      const nodeArray = [];
      nodeArray.push(roughObj.roughInstance.circle(size.width / 2, size.height / 2, size.width - this.roughPadding,
        {
          ...this.roughOps,
          roughness: (this.roughOps.roughness || 0) * 2 / 3,
          bowing: (this.roughOps.bowing || 0) * 2 / 3
        }
      ));
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

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          position: relative;
          min-height: 1em;
          display: block;
          width: 100%;
          height: 100%;
        }

        .rough-context {
          background-color: white;
        }

        .slider-wrapper {
          position: absolute;
          font: inherit;
          border: none;
          cursor: pointer;
          text-align: center;
          outline: none;
        }

        .slider-wrapper--horizontal {
          padding: 0.2em 0;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
        }

        .slider-wrapper--vertical {
          padding: 0 0.2em;
          left: 50%;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
        }

        .slider-wrapper[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .slider-line {
          position: relative;
        }

        .slider-line--horizontal {
          min-height: 8px;
          height: 0.4em;
        }

        .slider-line--vertical {
          min-width: 8px;
          width: 0.4em;
          height: 100%;
        }

        .slider-button {
          height: 1em;
          width: 1em;
          position: absolute;
        }

        .slider-button--horizontal {
          transform: translate(-50%, -50%);
          top: 50%;
          left: 0;
        }

        .slider-button--vertical {
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        .slider-value {
          pointer-events: none;
          display: inline-block;
          //background-color: white;
          //border-radius: 1em;
          position: absolute;
          user-select: none;
        }

        .slider-value--horizontal {
          top: -1.2em;
          left: 50%;
          transform: translateX(-50%);
        }

        .slider-value--vertical {
          left: -0.2em;
          top: 50%;
          transform: translate(-100%, -50%);
        }

      `
    ];
  }


}