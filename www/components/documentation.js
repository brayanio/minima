import addDocsNav from './docs-nav.js';

i0.define(`documentation`,
`
<section i0="documentation" class="part center m-list">
  <div class="d-w2" i0="docsNav"></div>
  <section class="d-w8">
    <div class="flex m-list">
      <div class="col center list gutter">
        <h4 class="text-center">Introduction</h4>
        <p>
          Get started with Minima, the light-weight CSS library that provides modern responsive designs with basic HTML. Minima styles the html elements directly without having to memorize a class for each.
        </p>
      </div>
    </div>
    <br class="m-hidden">
    <div class="m-hidden">
      <h4 class="text-center">Import into your projects</h4>
      <div class="space-even">
        <button i0="linkBtn" tabindex="0">
          HTML link <h6><b>&lt;link/&gt;</b></h6>
        </button>
        <button i0="importBtn" tabindex="0">
          CSS import <h6><b>@import</b></h6>
        </button>
        <button i0="codeBtn" tabindex="0">
          JS import <h6><b>&lt;script&gt;</b></h6>
        </button>
      </div>
      <i class="right">Click to copy to clipboard</i>
    </div>
  </section>
</section>
`,
ui => {
  addDocsNav(ui, 'setup');
  // copy
  const copy = id => {
    const input = document.createElement('input');
    input.value = {
      linkBtn: `<link href="https://minima.design/3/minima.css" rel="stylesheet" type="text/css" />`,
      importBtn: `@import url("https://minima.design/3/minima.css");`,
      codeBtn: `<script src="https://minima.design/3/minima.js"></script>`
    }[id];
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.parentElement.removeChild(input);
  };

  ui.linkBtn.on('click', ()=>copy('linkBtn'));
  ui.importBtn.on('click', ()=>copy('importBtn'));
  ui.codeBtn.on('click', ()=>copy('codeBtn'));
},
'documentation')

export default {};