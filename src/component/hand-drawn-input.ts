import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-input')
export class HandDrawnInput extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: String}) value: string | undefined = '';
  @property({type: String}) placeholder = '';
  @property({type: String}) name?: string;
  @property({type: String}) min?: string;
  @property({type: String}) max?: string;
  @property({type: String}) step?: string;
  @property({type: String}) type = 'text';
  @property({type: String}) autocomplete = '';
  @property({type: String}) autocapitalize = '';
  @property({type: String}) autocorrect = '';
  @property({type: Boolean}) required = false;
  @property({type: Boolean}) autofocus = false;
  @property({type: Boolean}) readonly = false;
  @property({type: Number}) minlength?: number;
  @property({type: Number}) maxlength?: number;
  @property({type: Number}) size?: number;
  @query('input') private inputEl?: HTMLInputElement;

  protected updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }

  protected render() {
    return html`
        <div class="rough input-wrapper">
            <input class="input" .value="${this.value}" placeholder="${this.placeholder}" @input="${this.input}" @change="${this.change}" ?disabled="${this.disabled}"
                   name="${this.name}" ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
                   maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
                   size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}"
            />
        </div>
    `;
  }

  private input(e: Event) {
    this.value = this.inputEl?.value;
    this.emitEvent(e);
  }

  private change(e: Event) {
    this.value = this.inputEl?.value;
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

        .input:active {
        }

        .input[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .input[disabled]:active {
        }
      `
    ];
  }
}