
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
    'index.csr.html': {size: 541, hash: 'b4f3cdccd13c048522ecb6799341f106ca635d73c555a1f857d337943da0ac37', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: '5b616acc44aeeb5302fde7fa7cb2164b071474f25abafff036062d3253a06ebb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16074, hash: 'ea6332e764cd7f3ad8101986da05871e38b58197e989faae21855ba5ee61b154', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
