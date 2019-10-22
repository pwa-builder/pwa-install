import {
  LitElement, html, customElement, property, css
} from 'lit-element';

import 'infinite-carousel-wc/dist/esm/infinite-carousel-wc.min.js';

@customElement('pwa-install')
export class pwainstall extends LitElement {

  @property() deferredprompt: any;
  @property() manifestpath: string = "manifest.json";
  @property() iconpath: string;
  @property() manifestdata: any;
  @property({type: Boolean }) openmodal: boolean;
  @property({type: Boolean }) showopen: boolean;

  static get styles() {
    return css`

     :host {
       --install-button-color: linear-gradient(90deg, #1FC2C8 0%, #9337D8 169.8%);
     }

     button {
       outline: none;
     }

     #installModal {
      background: white;
      position: fixed;
      bottom: 3em;
      top: 3em;
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
      margin-bottom: 32px;
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
      outline: none;
     }

     #installButton {
      min-width: 130px;
      margin-right: 30px;
      background: var(--install-button-color);
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      padding-top: 10px;
      padding-bottom: 9px;
      outline: none;
     }

     #closeButton {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #f0f0f0;
      border: none;
      color: black;
      padding-left: 12px;
      padding-right: 12px;
      padding-top: 4px;
      padding-bottom: 4px;
      border-radius: 20px;
      font-weight: 600;
      display: none;
      outline: none;
      cursor: pointer;
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

     #featuresScreenDiv {
      display: flex;
      justify-content: space-between;
      margin-right: 20px;
     }

     #featuresScreenDiv h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 225%;
      margin-top: 0px;
     }

     #keyFeatures {
      max-height: 220px;
      overflow: hidden;
     }

     #keyFeatures ul {
      padding-inline-start: 22px;
      margin-block-start: 12px;
     }

     #featuresScreenDiv #keyFeatures li {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 29px;
      color: rgba(51, 51, 51, 0.72);
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

     infinite-carousel-wc {
      background: #f0f0f0;
      padding-top: 14px;
      padding-bottom: 14px;
      border-radius: 22px;
      max-width: 27em;
      min-height: 180px;
     }

     infinite-carousel-wc > div {
      display: flex;
      justify-content: center;
      align-items: center;
     }

     infinite-carousel-wc > div > img {
       max-width: 20em;
       object-fit: contain;
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

      @media(max-width: 1200px) {
        #installModal {
          bottom: 0em;
          top: 0em;
          left: 0em;
          right: 0em;
          border-radius: 0px;
        }
      }

      @media (max-width: 800px) {

        #background {
          display: none;
        }

        #closeButton {
          display: block;
        }

         #installModal {
           overflow: scroll;
           box-shadow: none;
         }

         infinite-carousel-wc {
           width: 100%;
         }

         #screenshotsContainer {
           width: 100%;
         }

         #screenshots img {
           height: 180px;
         }

         #buttonsContainer {
          display: flex;
          justify-content: center;
          bottom: 0;
          margin-bottom: 0;
          border-radius: 0;
         }

         #buttonsContainer #installButton {
           margin-right: 0px;
         }

        #featuresScreenDiv {
          flex-direction: column;
          align-items: flex-start;
          margin-right: 0px;
        }

        #headerContainer {
          margin: 20px;
        }

        #desc {
          display: none;
        }

        #contentContainer {
          margin-left: 20px;
          margin-right: 20px;
        }

        #headerContainer img {
          height: 60px;
          width: 60px;
          margin-right: 12px;
        }
      }

    `;
  }

  async firstUpdated(): Promise<void> {
    console.log(this.showopen);
    if (this.manifestpath) {
      await this.getManifestData();
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('e', e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredprompt = e;
    });

    document.onkeyup = (e) => {
      if (e.key === "Escape") {
        this.cancel();
      }
    }
  }

  async getManifestData() {
    const response = await fetch(this.manifestpath);
    const data = await response.json();

    console.log(data);
    this.manifestdata = data;
  }

  openPrompt() {
    this.openmodal = true;
  }

  public async install(): Promise<boolean> {
    if (this.deferredprompt) {
      this.deferredprompt.prompt();

      const choiceResult = await this.deferredprompt.userChoice;

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
    this.openmodal = false;
  }

  render() {
    return html`
      ${this.showopen ? html`<button id="openButton" @click="${() => this.openPrompt()}">
        <slot>
          Install
        </slot>
      </button>` : null}

      ${this.openmodal ? html`<div id="background" @click="${() => this.cancel()}"></div>` : null}

      ${
      this.openmodal ?
        html`
          <div id="installModal">
          <div id="headerContainer">
          <img src="${this.iconpath ? this.iconpath : this.manifestdata.icons[0].src}"></img>

          <div>
            <h1>${this.manifestdata.name}</h1>


            <p id="desc">
              ${this.manifestdata.description}
            </p>
          </div>

          <button id="closeButton" @click="${() => this.cancel()}">Close</button>
        </div>

        <div id="contentContainer">

        <div id="featuresScreenDiv">

          ${this.manifestdata.features ? html`<div id="keyFeatures">
            <h3>Key Features</h3>
            <ul>
              ${
            this.manifestdata.features ? this.manifestdata.features.map((feature) => {
              return html`
                          <li>${feature}</li>
                        `
            }) : null
            }
            </ul>
          </div>` : null}

          ${this.manifestdata.screenshots ?
            html`
            <div id="screenshotsContainer">
              <div id="screenshots">
                <infinite-carousel-wc>
                ${
              this.manifestdata.screenshots.map((screen, index) => {
                return html`
                              <div slot="${index + 1}"><img src="${screen.src}"></div>
                            `
              })}
                </infinite-carousel-wc>
              </div>
            </div>
            ` : null}
          </div>

          <div>
            <h3>Description</h3>
            <p>${this.manifestdata.description}</p>
          </div>
        </div>

        <div id="buttonsContainer">
          ${this.deferredprompt ? html`<button id="installButton" @click="${() => this.install()}">Install ${this.manifestdata.short_name}</button>` : html`<button @click="${() => this.cancel()}" id="installButton">Close</button>`}
        </div>
          </div>
        `
        : null
      }
    `;
  }
}