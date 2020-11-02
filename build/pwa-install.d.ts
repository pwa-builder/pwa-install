import { LitElement } from "lit-element";
export interface PWAInstallAttributes {
    openmodal?: boolean;
    usecustom?: boolean;
    manifestpath?: string;
    explainer?: string;
    featuresheader?: string;
    descriptionheader?: string;
    installbuttontext?: string;
    cancelbuttontext?: string;
    iosinstallinfotext?: string;
}
export interface PWAInstallMethods {
    openPrompt(): void;
    closePrompt(): void;
    getInstalledStatus(): boolean;
}
export declare type PWAInstall = PWAInstallAttributes & PWAInstallMethods;
interface ManifestData {
    name: string;
    short_name: string;
    description: string;
    screenshots: Array<any>;
    features: Array<any>;
    icons: Array<any>;
}
export declare class pwainstall extends LitElement implements PWAInstall {
    manifestpath: string;
    iconpath: string;
    manifestdata: ManifestData;
    openmodal: boolean;
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
    handleInstallPromptEvent(event: Event): void;
    checkManifest(manifestData: ManifestData): void;
    getManifestData(): Promise<ManifestData | null>;
    scrollToLeft(): void;
    scrollToRight(): void;
    openPrompt(): void;
    closePrompt(): void;
    shouldShowInstall(): boolean;
    install(): Promise<boolean>;
    getInstalledStatus(): boolean;
    cancel(): Promise<void>;
    focusOut(): void;
    render(): import("lit-element").TemplateResult;
}
export {};
