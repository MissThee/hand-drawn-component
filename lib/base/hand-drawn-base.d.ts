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
interface RoughObjSvg {
    roughParentEl: HTMLElement;
    roughEl: SVGSVGElement;
    roughInstance: RoughSVG;
}
interface RoughObjCanvas {
    roughParentEl: HTMLElement;
    roughEl: HTMLCanvasElement;
    roughInstance: RoughCanvas;
}
export declare abstract class HandDrawnBase extends LitElement {
    protected roughParentElArray: HTMLElement[] | undefined;
    protected drawOption: Options;
    protected renderType: RenderType;
    protected animationTpe: AnimationTpe;
    protected roughObjArray: (RoughObjSvg | RoughObjCanvas)[];
    private drawInterval;
    protected roughPadding: number;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private mouseHoverHandler;
    private mouseLeaveHandler;
    private roughInit;
    private performAnimation;
    protected roughRefresh(): void;
    private roughSize;
    protected roughDraw(): void;
}
export declare const BaseCss: import("lit").CSSResultGroup;
export {};
