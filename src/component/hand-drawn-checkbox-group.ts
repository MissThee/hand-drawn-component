import {css, html, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';
import './hand-drawn-checkbox';

export interface CheckboxItem {
  value: string
  name: string
  disabled?: boolean
  checked?: boolean
}

export interface CheckboxEl extends CheckboxItem, HTMLElement {
}

@customElement('hand-drawn-checkbox-group')
export class HandDrawnCheckboxGroup extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @query('slot') slotEl: HTMLSlotElement | undefined;
  @property({type: Array}) checkedValues: string[] = [];

  protected render() {
    return html`
        <slot id="slot" .class="slot"></slot>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    const els = ((this.slotEl?.assignedNodes() || []) as CheckboxEl[]).filter(e=>e.tagName === 'HAND-DRAWN-CHECKBOX');
    els.forEach(checkboxEl => {
        checkboxEl.disabled = this.disabled || checkboxEl.disabled;
        checkboxEl.checked = this.checkedValues.indexOf(checkboxEl.value) >= 0;
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.change);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.change);
  }

  private change() {
    // two ways to update checked value
    // 1. collecting value of checked child
    const els = (this.slotEl?.assignedNodes() || []) as CheckboxEl[];
    this.checkedValues = els
      .filter(el => (<CheckboxEl>el).tagName === 'HAND-DRAWN-CHECKBOX' && (<CheckboxEl>el).checked)
      .map(el => (<CheckboxEl>el).value);
    // 2. change collected value. need param: e:Event
    // if (e instanceof CustomEvent) {
    //   if (e.detail.checked) {
    //     this.checkedValues.push(e.detail.value);
    //   } else {
    //     const index = this.checkedValues.indexOf(e.detail.value);
    //     if (index >= 0) {
    //       this.checkedValues.splice(index, 1);
    //     }
    //   }
    //   this.checkedValues = [...this.checkedValues];
    // }
  }

  static get styles() {
    return [
      super.styles,
      //all children of slot, in this html root level
      css`
        ::slotted(*) {
          margin: 0 1em 0 0
        }
      `
    ];
  }

}
