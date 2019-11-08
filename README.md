# pwa-install

`pwa-install` is a [web component](https://meowni.ca/posts/web-components-with-otters/) from the [PWABuilder](https://pwabuilder.com) team that brings an awesome "install" experience to your Progressive Web App!

_Built with [lit-element](https://lit-element.polymer-project.org/)_

### What does it look like?

![An image of what the component looks like](assets/installsnip.png?raw=true "pwa-install")

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
- import with `import '@pwabuilder/pwainstall`

Then you can use the element `<pwa-install></pwa-install>` anywhere in your template, JSX, html etc. An example of using this component can be found here: https://glitch.com/~pwainstall

## API

### Properties

| Property       | Attribute      | Description                                                   | Type      | Default         |
| -------------- | -------------- | ------------------------------------------------------------- | --------- | --------------- |
| `showopen`     | `showopen`     | Will always show install button                               | `boolean` | `false`         |
| `showeligible` | `showeligible` | Will only show install button if user is eligible for install | `boolean` | `false`         |
| `manifestpath` | `manifestpath` | path to your web manifest                                     | `string`  | `manifest.json` |

### Methods

| name         | Description               |
| ------------ | ------------------------- |
| `openPrompt()` | `Opens the install modal` |

### CSS Variables

We recommend using our [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to easliy tweak the style of this component to fit your project. Here are our current
supported CSS variables.

| name         | Description               |
| ------------ | ------------------------- |
| `--install-button-color` | `Changes the color of the install button` |
| `--modal-z-index`        | `Changes the z-index of the install modal`|