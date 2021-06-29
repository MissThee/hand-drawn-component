import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-input')
export class HandDrawnInput extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: String}) autocomplete = '';
  @property({type: Boolean}) autofocus = false;
  @property({type: Number}) max?: number;
  @property({type: Number}) maxlength?: number;
  @property({type: Number}) min?: number;
  @property({type: String}) name?: string;
  @property({type: String}) placeholder = '';
  @property({type: Boolean}) required = false;
  @property({type: Boolean}) readonly = false;
  @property({type: String}) type: 'text' | 'password' | 'tel' | 'number' = 'text';
  @property({type: String}) value: string | null = '';
  @query('input') private inputEl?: HTMLInputElement;

  protected updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }

  protected render() {
    return html`
        <div class="rough input-wrapper">
            <input class="input"
                   autocomplete="${this.autocomplete}"
                   ?autofocus="${this.autofocus}"
                   ?disabled="${this.disabled}"
                   max="${this.max}"
                   maxlength="${this.maxlength}"
                   min="${this.min}"
                   name="${this.name}"
                   placeholder="${this.placeholder}"
                   ?required="${this.required}"
                   ?readonly="${this.readonly}"
                   type="${this.type}"
                   .value="${this.value}"
                   @input="${this.inputHandler}"
                   @change="${this.changeHandler}"
            />
        </div>
    `;
  }

  private inputHandler(e: Event) {
    this.value = this.inputEl?.value || null;
    this.emitEvent(e);
  }

  private changeHandler(e: Event) {
    this.value = this.inputEl?.value || null;
    this.emitEvent(e);
  }

  emitEvent(event: Event) {
    this.dispatchEvent(new CustomEvent(event.type, {
      composed: true,
      bubbles: true,
      detail: event
    }));
  }

  static get styles() {
    return [
      super.styles,
      css`
        .input-wrapper {
          overflow: hidden;
          padding: 10px;
        }

        .input {
          font: inherit;
          overflow: hidden;
          user-select: none;
          border: none;
          background: none;
          outline: none;
          width: 100%;
        }

        .input[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }
      `
    ];
  }
}