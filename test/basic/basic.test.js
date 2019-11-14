import { expect, fixture } from '@open-wc/testing';

import '../../dist/pwa-install.js';

it('does instantiate', async () => {
  const el = await fixture('<pwa-install></pwa-install>');
  expect(el.tagName).to.equal('PWA-INSTALL');
});
