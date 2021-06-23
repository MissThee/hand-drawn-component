import { LitElement, PropertyValues } from 'lit';
import { Options } from 'roughjs/bin/core';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { RoughSVG } from 'roughjs/bin/svg';
declare enum RenderType {
    CANVAS = "canvas",
    SVG = "svg"
}
declare enum AnimationTpe {
    HOVER = "hover",
    ALWAYS = "always",
    NONE = "none"
}
export declare abstract class HandDrawnBase extends LitElement {
    protected roughWrapperEl: HTMLElement | undefined;
    protected drawOption: Options;
    protected renderType: RenderType | undefined;
    protected animationTpe: AnimationTpe;
    private drawInterval;
    protected roughDrawEl: HTMLCanvasElement | SVGSVGElement | undefined;
    protected roughDrawInstance: RoughCanvas | RoughSVG | undefined;
    protected roughPadding: number;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private mouseHoverHandler;
    private mouseLeaveHandler;
    private roughInit;
    private performAnimation;
    protected abstract roughDraw(): void;
}
export declare const BaseCss: import("lit").CSSResultGroup;
export {};
