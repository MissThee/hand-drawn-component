import {css, html, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';
import './hand-drawn-radio';

export interface RadioItem {
  value: string
  name: string
  disabled?: boolean
  checked?: boolean
}

export interface RadioEl extends RadioItem, HTMLElement {
}

@customElement('hand-drawn-radio-group')
export class HandDrawnRadioGroup extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @query('slot') slotEl: HTMLSlotElement | undefined;
  @property({type: String}) checkedValue: string | null = null;

  protected render() {
    return html`
        <slot id="slot" .class="slot"></slot>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.setSubRadioState();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.change);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.change);
  }

  private change(e: Event) {
    // console.log('change', e);
    if (e instanceof CustomEvent) {
      this.checkedValue = e.detail.value;
    }
    this.setSubRadioState();
    this.requestUpdate();
  }

  private setSubRadioState() {
    const els = (this.slotEl?.assignedNodes() || []) as RadioEl[];
    els.forEach(radioEl => {
      radioEl.disabled = this.disabled || radioEl.disabled;
      if (radioEl.tagName === 'HAND-DRAWN-RADIO') {
        radioEl.checked = this.checkedValue === radioEl.value;
      }
    });
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