import {
  LitElement, html, customElement, property, css
} from 'lit-element';

@customElement('pwb-install')
export class pwbinstall extends LitElement {

  @property() deferredPrompt: any;
  @property() manifestPath: string;
  @property() iconPath: string;
  @property() manifestData: any;
  @property() openModal: boolean = false;

  static get styles() {
    return css`
     #installModal {
      background: white;
      position: fixed;
      top: 6em;
      bottom: 12em;
      left: 16em;
      right: 16em;
      padding: 2em;
      padding-top: 1em;
      font-family: sans-serif;
      box-shadow: 0 28px 48px rgba(0, 0, 0, .4);

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
      background: #7b7b7ba6;

      animation-name: fadein;
      animation-duration: 250ms;
     }

     #headerContainer {
      display: flex;
      align-items: center;
     }

     #headerContainer img {
      height: 6em;
      margin-right: 1em;
      background: lightgrey;
      border-radius: 10px;
      padding: 12px;
     }

     #buttonsContainer {
      display: flex;
      justify-content: flex-end;
      position: relative;
      bottom: -4em;
      right: -1em;
     }

     #openButton, #installButton {
      text-align: center;
      align-content: center;
      align-self: center;
      vertical-align: middle;
      justify-self: flex-end;
      max-width: 90px;
      min-width: 90px;
      line-height: 200%;
      flex: 0 0 auto;
      display: inline-block;
      background: #0078d4;
      color: #ffffff;
      cursor: pointer;
      border: solid 1px rgba(0, 0, 0, 0);
     }

     #cancelButton {
      background: #ee1111;
      color: white;
      max-width: 90px;
      min-width: 90px;
      line-height: 200%;
      margin-right: 10px;
      outline: none;
      border: solid 1px rgba(0, 0, 0, 0);
      cursor: pointer;
      margin-left: 10px;
     }

     #screenshots img {
      height: 12em;
      margin-right: 12px;
     }

     #tagsDiv {
      margin-top: 1em;
      margin-bottom: 1em;
     }

     #desc {
      width: 34em;
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

            ${this.manifestData.categories ? html`<div id="tagsDiv">
              ${this.manifestData.categories.map((tag) => {
          return html`
                  <span>${tag}</span>
                `
        })}
            </div>` : null}

            <p id="desc">
              ${this.manifestData.description}
            </p>
          </div>
        </div>

        <div id="contentContainer">
          ${this.manifestData.screenshots ?
            html`
            <div>
              <h3>Screenshots</h3>
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
        </div>

        <div id="buttonsContainer">
          <button id="installButton" @click="${() => this.install()}">Install</button>
          <button id="cancelButton"  @click="${() => this.cancel()}">Cancel</button>
        </div>
          </div>
        `
        : null
      }
    `;
  }
}