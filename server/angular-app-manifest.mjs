
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/fullStack_developer_portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/fullStack_developer_portfolio/home",
    "route": "/fullStack_developer_portfolio"
  },
  {
    "renderMode": 2,
    "route": "/fullStack_developer_portfolio/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: 'e8568fb813dd1971c0f2df6eeececf57f65395594b5674821dd77cb9427fe479', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '9ad400eb7596f60c671cd29db4844371c146c4c2bb8837a32c75c60ecacd2534', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16171, hash: '5bfd4cb09283ba2ea55b039536691a32b2c420dfb2302ced20e0dde01d7f57df', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
