import {css, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {HandDrawnBase} from './base/hand-drawn-base';

@customElement('hand-drawn-textarea')
export class HandDrawnTextarea extends HandDrawnBase {
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: String}) value: string | null = '';
  @property({type: Boolean}) autofocus = false;
  @property({type: Boolean}) autoHeight = false;
  @property({type: String}) placeholder = '';
  @property({type: Number}) maxlength?: number;
  @property({type: String}) name?: string;
  @property({type: Boolean}) required = false;
  @property({type: Boolean}) readonly = false;
  @property({type: String}) resize: string = 'both';
  @property({type: Number}) row = 3;

  @query('textarea') private textareaEl?: HTMLTextAreaElement;

  private isMouseDowningInThis = false;
  private textareaResizeHandler = this.textareaResizeHandlerTmp.bind(this);

  protected updateAnimationState() {
    if (!this.disabled) {
      super.updateAnimationState();
    }
  }

  protected render() {
    return html`
        <div class="rough textarea-wrapper" ?disabled="${this.disabled}">
            <textarea class="textarea"
                      style="resize:${(this.disabled || this.autoHeight) ? "none !important" : this.resize}"
                      ?autofocus="${this.autofocus}"
                      ?disabled="${this.disabled}"
                      maxlength="${this.maxlength}"
                      name="${this.name}"
                      placeholder="${this.placeholder}"
                      ?readonly="${this.readonly}"
                      ?required="${this.required}"
                      row="${this.row}"
                      .value="${this.value}"
                      @input="${this.inputHandler}"
                      @change="${this.changeHandler}"
            />
        </div>
    `;
  }


  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('mouseup', this.textareaResizeHandler);
    this.addEventListener('mousedown', this.mouseDownHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('mouseup', this.textareaResizeHandler);
    this.removeEventListener('mousedown', this.mouseDownHandler);
  }


  private mouseDownHandler() {
    this.isMouseDowningInThis = true;
  }

  private textareaResizeHandlerTmp() {
    if (!this.disabled) {
      if (this.isMouseDowningInThis) {
        this.roughRender(true);
      }
    }
    this.isMouseDowningInThis = false;
  }

  private inputHandler(e: Event) {
    this.value = this.textareaEl?.value || null;
    this.setAutoHeight();
    this.emitEvent(e);
  }

  private changeHandler(e: Event) {
    this.value = this.textareaEl?.value || null;
    this.emitEvent(e);
  }

  private setAutoHeight() {
    if (this.autoHeight) {
      if (this.textareaEl) {
        this.textareaEl.style.height = 'auto';
        this.textareaEl.scrollTop = 0;
        this.textareaEl.style.height = this.textareaEl.scrollHeight + 'px';
        this.roughRender();
      }
    }
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
        .textarea-wrapper {
          overflow: hidden;
          padding: 10px;
        }

        .textarea-wrapper[disabled] {
          opacity: 0.5;
          background: rgba(0, 0, 0, 0.08);
          cursor: not-allowed;
        }

        .textarea {
          font: inherit;
          word-break: break-all;
          word-wrap: break-word;
          user-select: none;
          border: none;
          background: none;
          outline: none;
          width: 100%;
          height: 100%;
        }

        .textarea::-webkit-scrollbar {
          display: none;
          width: 4px;
          height: 4px;
        }

        .textarea::-webkit-scrollbar-track {
          border-radius: 4px;
        }

        .textarea::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background: #ddd;
        }

        .textarea::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }

        .textarea::-webkit-scrollbar-thumb:active {
          background: #999;
        }

        .textarea ::-webkit-scrollbar-thumb:window-inactive {
          background: #ddd;
        }

        .textarea[disabled] {
          cursor: not-allowed;
        }
      `
    ];
  }
}