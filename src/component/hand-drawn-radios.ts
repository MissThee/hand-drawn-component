import {html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';
import './hand-drawn-radio'

export interface RadioItem {
  value: string
  name: string
  disabled: boolean
  checked: boolean
}

@customElement('hand-drawn-radios')
export class HandDrawnRadios extends HandDrawnBase {
  @property({type: Boolean}) disabled = false;
  @property({type: String}) value: string | null = null;
  @property({type: Array}) data: RadioItem[] = [];
  @property({type: Array, reflect: true}) checkedItems: RadioItem[] = [];


  protected render() {
    return html`
      ${this.data.map(item =>
        html`
          <hand-drawn-radio
            @change="${this.change}"
            renderType="${this.renderType}"
            value="${item.value}"
            ?checked="${item.checked}"
            ?disabled="${this.disabled || item.disabled}">${item.name}
          </hand-drawn-radio>
        `
      )}
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    let preCheckedItem: RadioItem | null = null
    this.data.forEach(item => {
      if (item.checked) {
        if (preCheckedItem) {
          preCheckedItem.checked = false
        }
        preCheckedItem = item
      }
    })
    this.checkedItems = this.data?.filter(e => e.checked) || []
    // console.log('firstUpdated', this.checkedItems)

  }

  private change(e: CustomEvent) {
    // console.log(e);
    this.data.forEach(item => {
      if (e.detail.value === item.value) {
        item.checked = e.detail.checked
      } else {
        item.checked = false
      }
    })
    this.checkedItems = this.data?.filter(e => e.checked) || []
    // console.log('change', this.checkedItems)
  }

  static get styles() {
    return [
      super.styles,
    ];
  }

}