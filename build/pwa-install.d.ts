import { LitElement } from 'lit-element';
import 'infinite-carousel-wc/dist/esm/infinite-carousel-wc.min.js';
export declare class pwainstall extends LitElement {
    deferredprompt: any;
    manifestpath: string;
    iconpath: string;
    manifestdata: any;
    openmodal: boolean;
    showopen: boolean;
    static readonly styles: import("lit-element").CSSResult;
    firstUpdated(): Promise<void>;
    getManifestData(): Promise<void>;
    updateButtonColor(data: any): void;
    openPrompt(): void;
    install(): Promise<boolean>;
    cancel(): void;
    render(): import("lit-element").TemplateResult;
}
