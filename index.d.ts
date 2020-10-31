export as namespace PWAInstall;
declare module "@pwabuilder/pwainstall";

declare namespace PWAInstall {
  interface PublicMembers {
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

  interface Methods {
    openPrompt(): void;
    closePrompt(): void;
    getInstalledStatus(): boolean;
  }

  type Interface = PublicMembers & Methods;
}

export = PWAInstall;
