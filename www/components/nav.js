i0.define(`nav`,
`
<nav i0="nav" class="space-between align-center">
  <a class="brand" href="#/home">
    <img src="./www/assets/minima-logo.png" height="50px">
  </a>
  <div class="t-hidden d-tab-select">
    <a href="#/home" i0="home">Home</a>
    <a href="#/documentation" i0="documentation">Documentation</a>
    <a href="#/support" i0="support">Support</a>
  </div>
  <button i0="menu" class="d-hidden flex align-center">
    <i class="material-icons">menu</i>
  </button>
</nav>
<div i0="mobile" class="mobile d-hidden controls">
  <a href="#/home" i0="mhome">Home</a>
  <a href="#/documentation" i0="mdocumentation">Documentation</a>
  <a href="#/support" i0="msupport">Support</a>
</div>
`,
ui => {
  document.body.appendChild(ui.nav);
  document.body.appendChild(ui.mobile);
  const links = [ui.home, ui.documentation, ui.support]
    .concat([ui.mhome, ui.mdocumentation, ui.msupport]);

  i0.view.onChange(route => {
    if(ui[route]){
      links.forEach(el => el.classList.remove('active'));
      ui[route].classList.add('active');
      ui[`m${route}`].classList.add('active');
    }
  })

  ui.menu.on('click', () => {
    Minima.toggleMobile(ui.mobile);
  })

  ui.mobile.on('click', () => {
    Minima.toggleMobile(ui.mobile);
  })
});

i0.component('nav');

export default {};