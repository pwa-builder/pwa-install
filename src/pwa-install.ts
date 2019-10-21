import {
  LitElement, html, customElement, property, css
} from 'lit-element';

@customElement('pwa-install')
export class pwainstall extends LitElement {

  @property() deferredPrompt: any;
  @property() manifestPath: string = "manifest.json";
  @property() iconPath: string;
  @property() manifestData: any;
  @property() openModal: boolean = false;

  static get styles() {
    return css`
     #installModal {
      background: white;
      position: fixed;
      bottom: 4em;
      top: 4em;
      left: 14em;
      right: 14em;
      font-family: sans-serif;
      box-shadow: 0px 25px 26px rgba(32, 36, 50, 0.25), 0px 5px 9px rgba(51, 58, 83, 0.53);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      padding: 0;

      animation-name: opened;
      animation-duration: 250ms;
     }

     @keyframes opened {
      from {
        transform: scale(0.4, 0.4);
        opacity: 0.4;
      }
      to {
        transform: scale(1, 1);
        opacity: 1;
      }
    }

    @keyframes fadein {
      from {
        opacity: 0.2;
      }
      to {
        opacity: 1;
      }
    }

     #background {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #e3e3e3b0;
      backdrop-filter: blur(5px);

      animation-name: fadein;
      animation-duration: 250ms;
     }

     #headerContainer {
      display: flex;
      align-items: flex-start;
      margin: 40px;
     }

     #headerContainer h1 {
       font-size: 34px;
       color: #3C3C3C;
       margin-top: 20px;
       margin-bottom: 7px;
     }

     #headerContainer img {
      height: 122px;
      width: 122px;
      background: lightgrey;
      border-radius: 10px;
      padding: 12px;
      border-radius: 24px;
      margin-right: 24px;
     }

     #buttonsContainer {
      display: flex;
      justify-content: flex-end;
      position: relative;
      bottom: -4em;
      height: 100px;

      background:#dedede75;
      margin-top: auto;
      margin-bottom: 63px;
      width: 100%;
      right: 0em;
      border-radius: 0px 0px 12px 12px;
     }

     #openButton, #installButton {
      text-align: center;
      align-content: center;
      align-self: center;
      vertical-align: middle;
      justify-self: flex-end;
      line-height: 200%;
      flex: 0 0 auto;
      display: inline-block;
      background: #0078d4;
      color: #ffffff;
      cursor: pointer;
      border: solid 1px rgba(0, 0, 0, 0);
     }

     #installButton {
      min-width: 130px;
      margin-right: 30px;
      background: linear-gradient(90deg, #1FC2C8 0%, #9337D8 169.8%);
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      padding-top: 10px;
      padding-bottom: 9px;
     }

     #contentContainer {
       margin-left: 40px;
       margin-right: 40px;
     }

     #contentContainer h3 {
      font-size: 22px;
      color: #3C3C3C;
      margin-bottom: 12px;
     }

     #contentContainer p {
      font-size: 14px;
      color: #3C3C3C;
     }

     #screenshots {
      display: flex;
      justify-content: flex-end;
     }

     #screenshots img {
      height: 200px;
      margin-right: 12px;
     }

     #tagsDiv {
      margin-top: 1em;
      margin-bottom: 1em;
     }

     #desc {
      width: 34em;
      font-size: 14px;
      color: #7E7E7E;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
     }

      #tagsDiv span {
        background: grey;
        color: white;
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 4px;
        font-weight: bold;
        border-radius: 24px;
        margin-right: 12px;
        padding-top: 1px;
      }
    `;
  }

  async firstUpdated(): Promise<void> {
    if (this.manifestPath) {
      await this.getManifestData();
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('e', e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }

  async getManifestData() {
    const response = await fetch(this.manifestPath);
    const data = await response.json();

    console.log(data);
    this.manifestData = data;
  }

  openPrompt() {
    this.openModal = true;
  }

  public async install(): Promise<boolean> {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();

      const choiceResult = await this.deferredPrompt.userChoice;

      if (choiceResult.outcome === 'accepted') {
        console.log('Your PWA has been installed');
        return true;
      } else {
        console.log('User chose to not install your PWA');
        return false;
      }
    }
    else {
      // handle else case
    }
  }

  cancel() {
    this.openModal = false;
  }

  render() {
    return html`
      <button id="openButton" @click="${() => this.openPrompt()}">
        <slot>
          Install
        </slot>
      </button>

      ${this.openModal ? html`<div id="background" @click="${() => this.cancel()}"></div>` : null}

      ${
      this.openModal ?
        html`
          <div id="installModal">
          <div id="headerContainer">
          <img src="${this.iconPath}"></img>

          <div>
            <h1>${this.manifestData.name}</h1>


            <p id="desc">
              ${this.manifestData.description}
            </p>
          </div>
        </div>

        <div id="contentContainer">

          ${this.manifestData.screenshots ?
            html`
            <div id="screenshotsContainer">
              <div id="screenshots">
                ${
              this.manifestData.screenshots.map((screen) => {
                return html`
                        <img src="${screen.src}">
                      `
              })}
              </div>
            </div>
            ` : null}

          <div>
            <h3>Description</h3>
            <p>${this.manifestData.description}</p>
          </div>
        </div>

        <div id="buttonsContainer">
          <button id="installButton" @click="${() => this.install()}">Install ${this.manifestData.short_name}</button>
        </div>
          </div>
        `
        : null
      }
    `;
  }
}