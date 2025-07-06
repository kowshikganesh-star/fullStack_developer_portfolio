
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: '4e32b43c093cfd5d132e0ea1c9b11871f6946f36522fdcb1d67c2e23d4675980', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '8918250385d9daba35415e689427a77a768af547f49d41818c4dcf2ac0939ee9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15965, hash: '546a4604665a2a4723688c6498a26dcedcd8c22e2581adce5793d84dc6bd80d7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
