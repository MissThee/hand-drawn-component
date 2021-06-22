/// <reference types="node" />
import { LitElement, TemplateResult, CSSResultArray, PropertyValues } from 'lit';
import { Options } from 'roughjs/bin/core';
import { RoughCanvas } from 'roughjs/bin/canvas';
import { RoughSVG } from 'roughjs/bin/svg';
export declare class HandDrawnButton extends LitElement {
    constructor();
    renderType: 'canvas' | 'svg' | undefined;
    renderEl: HTMLCanvasElement | SVGSVGElement | undefined;
    rc: RoughCanvas | RoughSVG | undefined;
    rcPadding: number;
    drawOption: Options;
    drawInterval: NodeJS.Timeout | null;
    protected button: HTMLElement | undefined;
    protected overlay: HTMLElement | undefined;
    disabled: boolean;
    isHover: boolean;
    value: string;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    mouseHoverHandler(): void;
    mouseLeaveHandler(): void;
    performAnimation(isStart?: boolean): void;
    draw(): void;
    createSVGElement(tag: string): SVGElement;
    render(): TemplateResult;
    static get styles(): CSSResultArray;
}
