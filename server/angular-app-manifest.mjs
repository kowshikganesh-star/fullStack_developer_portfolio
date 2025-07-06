
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FullStack_Developer_portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/FullStack_Developer_portfolio/home",
    "route": "/FullStack_Developer_portfolio"
  },
  {
    "renderMode": 2,
    "route": "/FullStack_Developer_portfolio/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: 'd8770061d34dd1edd77f235cfd1eb28980edf6a45b69bdd9f0f764332b356a3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '52234852e949a2be7a71f877b486320e75705744dfa7fa0e9079687ad3e79eaf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15995, hash: '71c805628b54727f66a242c13f15cd920fb106c07440389f038ca0b85018fe15', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
