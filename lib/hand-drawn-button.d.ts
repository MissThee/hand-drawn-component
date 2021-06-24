import { HandDrawnBase } from './base/hand-drawn-base';
export declare class HandDrawnButton extends HandDrawnBase {
    protected button: HTMLElement | undefined;
    disabled: boolean;
    value: string;
    protected render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup[];
}
