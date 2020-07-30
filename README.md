# pwa-install

![CI](https://github.com/pwa-builder/pwa-install/workflows/CI/badge.svg)

`pwa-install` is a [web component](https://meowni.ca/posts/web-components-with-otters/) from the [PWABuilder](https://pwabuilder.com) team that brings an awesome "install" experience to your Progressive Web App!

_Built with [lit-element](https://lit-element.polymer-project.org/)_

### What does it look like?

<img loading="lazy" alt="An image of what the component looks like" src="https://raw.githubusercontent.com/pwa-builder/pwa-install/master/assets/installsnip.png">

## Supported Browsers
- Edge
- Chrome
- Firefox
- Safari

## Using this component

## Install

There are two ways to use this component. For simple projects or just to get started fast, we recommend using the component by script tag. If your project is using [npm](https://www.npmjs.com/) then we recommend using the npm package.

### Script tag

- Put this script tag in the head of your index.html:

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwainstall"
></script>
```

### NPM

- Run `npm install @pwabuilder/pwainstall`
- import with `import '@pwabuilder/pwainstall'`

Then you can use the element `<pwa-install></pwa-install>` anywhere in your template, JSX, html etc. 
live demo: https://pwainstall.glitch.me

## API

### Properties

| Property             | Attribute            | Description                                                                     | Type      | Default                                             |
| -------------------- | -------------------- | ------------------------------------------------------------------------------- | --------- | --------------------------------------------------- |
| `showopen`           | `showopen`           | Will always show the install button                                             | `boolean` | `false`                                             |
| `usecustom`          | `usecustom`          | Hides default button                                                            | `boolean` | `false`                                             |
| `manifestpath`       | `manifestpath`       | path to your web manifest                                                       | `string`  | `manifest.json`                                     |
| `explainer`          | `explainer`          | Controls the text of the explainer text just below the titlee of the app header | `string`  | `This app can be installed on`                      |
| `featuresheader`     | `featuresheader`     | Controls the text of the features header                                        | `string`  | `Key Features`                                      |
| `descriptionheader`  | `descriptionheader`  | Controls the text of the description header                                     | `string`  | `Description`                                       |
| `installbuttontext`  | `installbuttontext`  | Controls the text of the install button                                         | `string`  | `Install`                                           |
| `cancelbuttontext`   | `cancelbuttontext`   | Controls the text of the cancel button                                          | `string`  | `Cancel`                                            |
| `iosinstallinfotext` | `iosinstallinfotext` | Controls the iOS installation info text                                         | `string`  | `Tap the share button and then 'Add to Homescreen'` |

### Methods

| name            | Description                |
| --------------- | -------------------------- |
| `openPrompt()`  | `Opens the install modal`  |
| `closePrompt()` | `Closes the install modal` |
| `getInstalledStatus()` | `Tell if the PWA is installed or not` |


## Styling

### CSS Variables

We recommend using our [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to easliy tweak the style of this component to fit your project. Here are our current
supported CSS variables.

| name                       | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `--install-button-color`   | `Changes the color of the install button`             |
| `--modal-z-index`          | `Changes the z-index of the install modal`            |
| `--modal-background-index` | `Changes the z-index of the install modal background` |
| `--modal-background-color` | `Changes the background color of the install modal`   |

### Shadow Parts

If you need to style this component more comprehensively, you can use [Shadow Parts](https://dev.to/webpadawan/css-shadow-parts-are-coming-mi5) to style both the install button and the install modal. To target these two elements you can use `pwa-install::part(openButton)` and `pwa-install::part(installModal)` respectively. For example, to make the background of the install button grey, I would need this CSS:

```css
pwa-install::part(openButton) {
  background: grey;
}
```
