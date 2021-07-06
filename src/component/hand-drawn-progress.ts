import {css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase, RoughObjCanvas, RoughObjSvg} from './base/hand-drawn-base';
import {Options} from 'roughjs/bin/core';

@customElement('hand-drawn-progress')
export class HandDrawnProgress extends HandDrawnBase {
  @property({type: Number}) value = 0;
  @property({type: Boolean}) isShowPercent = false;
  @property({type: String}) completeColor = '';

  protected render() {
    return html`
        <div id="progressWrapper" class="rough progress-wrapper">
            <div id="progressBar" class="rough progress-bar"></div>
            <div class="progress-bar-mask" style="width: ${100 - (this.value || 0)}%"></div>
            ${this.isShowPercent ?
                    html`
                        <div class="progress-percent">${this.value || 0}%</div>
                    `
                    :
                    ''
            }
        </div>
    `;
  }

  protected roughOpsDefault: Options = {
    bowing: 0.5,
    roughness: 0.8,
    stroke: '#363636',
    strokeWidth: 1,
    fillStyle: 'zigzag',
    fillWeight: 0.3,
    hachureGap: 3,
  };

  protected roughDrawOne(roughObj: RoughObjSvg | RoughObjCanvas) {
    if (roughObj.roughParentEl.id === 'progressBar') {
      const roughOpsTmp = {fill: this.roughOps.stroke, ...this.roughOps, stroke: 'transparent'};
      if (this.value === 100) {
        roughOpsTmp.fill = this.completeColor;
      }
      super.roughDrawOne(roughObj, roughOpsTmp);
    } else if (roughObj.roughParentEl.id === 'progressWrapper') {
      super.roughDrawOne(roughObj,  { ...this.roughOps,fill:""});
    } else {
      super.roughDrawOne(roughObj);
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          width: 100%;
          height: 1.2em;
        }

        .progress-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .progress-wrapper .rough-context {
          //background-color: white;
          z-index: 1;
        }

        .progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }

        .progress-bar .rough-context {
          background-color: white;
        }

        .progress-bar-mask {
          transition: width 0.2s ease-out;
          position: absolute;
          background-color: white;
          top: 0;
          right: 0;
          height: 100%;
          z-index: 0;
        }

        .progress-percent {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          vertical-align: middle;
          line-height: 1.2em;
          font-size: 1em;

        }
      `
    ];
  }


}