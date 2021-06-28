import {html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';
import './hand-drawn-checkbox';

export interface CheckBoxItem {
  value: string
  name: string
  disabled: boolean
  checked: boolean
}

@customElement('hand-drawn-checkboxs')
export class HandDrawnCheckboxs extends HandDrawnBase {
  @property({type: Boolean}) disabled = false;
  @property({type: String}) value: string | null = null;
  @property({type: Array}) data: CheckBoxItem[] = [];
  @property({type: Array, reflect: true}) checkedItems: CheckBoxItem[] = [];


  protected render() {
    return html`
        ${this.data.map(item =>
                html`
                    <hand-drawn-checkbox
                            @change="${this.change}"
                            renderType="${this.renderType}"
                            value="${item.value}"
                            ?checked="${item.checked}"
                            ?disabled="${this.disabled || item.disabled}">${item.name}
                    </hand-drawn-checkbox>
                `
        )}
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.checkedItems = this.data?.filter(e => e.checked) || [];
    // console.log('firstUpdated', this.checkedItems)
  }

  private change(e: CustomEvent) {
    // console.log(e);
    this.data.forEach(item => {
      if (e.detail.value === item.value) {
        item.checked = e.detail.checked;
        return;
      }
    });
    this.checkedItems = this.data?.filter(e => e.checked) || [];
    // console.log('change', this.checkedItems)
  }

  protected createRenderRoot(): ShadowRoot | Element {
    return this;
  }

  static get styles() {
    return [
      super.styles,
    ];
  }

}