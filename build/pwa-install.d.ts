import { LitElement } from "lit-element";
interface ManifestData {
    name: string;
    short_name: string;
    description: string;
    screenshots: Array<any>;
    features: Array<any>;
    icons: Array<any>;
}
export declare class pwainstall extends LitElement {
    manifestpath: string;
    iconpath: string;
    manifestdata: ManifestData;
    openmodal: boolean;
    showopen: boolean;
    isSupportingBrowser: boolean;
    isIOS: boolean;
    installed: boolean;
    hasprompt: boolean;
    usecustom: boolean;
    relatedApps: any[];
    explainer: string;
    featuresheader: string;
    descriptionheader: string;
    installbuttontext: string;
    cancelbuttontext: string;
    iosinstallinfotext: string;
    deferredprompt: any;
    static get styles(): import("lit-element").CSSResult;
    constructor();
    firstUpdated(): Promise<void>;
    handleInstallPromptEvent(event: any): void;
    checkManifest(manifestData: any): void;
    getManifestData(): Promise<ManifestData>;
    scrollToLeft(): void;
    scrollToRight(): void;
    openPrompt(): void;
    closePrompt(): void;
    shouldShowInstall(): boolean;
    install(): Promise<boolean>;
    getInstalledStatus(): boolean;
    cancel(): Promise<void>;
    render(): import("lit-element").TemplateResult;
}
export {};
