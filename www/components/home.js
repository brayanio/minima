i0.define(`home`,
`
<section class="part flex t-list t-reverse d-h8 d-align-center">
  <div class="d-w2 t-h3 t-list t-reverse t-flex">
    <section class="hidden">
      <b class="center">Themes</b>
      <a i0="normal" href class="edge">Default</a>
      <a i0="dark" href class="edge">Dark</a>
      <b class="center t-hidden">Versions</b>
      <a i0="version3" href class="edge t-hidden">Version 3.0</a>
      <a i0="version2" href class="edge t-hidden">Version 2.0</a>
      <a i0="version1" href class="edge t-hidden">Version 1.0</a>
    </section>
  </div>
  <div class="flex t-list align-center d-w8 t-h5 t-reverse">
    <div class="col">
      <h1 class="center align-center">
        <img src="./www/assets/minima.png" height="64px">
        <span class="gutter">Minima Design</span>
      </h1>
      <div class="center">
        <p class="d-w6">
          Quickly build responsive modern design websites with regular elements. Go through the light documentation to get inspiration!
          <span class="right">
            <a href="#/documentation">Get Started</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</section>
`,
(ui, props) => {
  //change version
  let versionVal = 3;
  const version = (val, e) => {
    e.preventDefault();
    let style = document.querySelector(`[href="./${versionVal}/minima.css"]`);
    versionVal = val;
    style.href = `./${versionVal}/minima.css`;
  }

  ui.version1.on('click', e=>version(1, e));
  ui.version2.on('click', e=>version(2, e));
  ui.version3.on('click', e=>version(3, e));

  ui.normal.on('click', e => {
    e.preventDefault();
    document.getElementById('dark').href = '';
    localStorage.theme = '';
  })
  ui.dark.on('click', e => {
    e.preventDefault();
    ui.normal.click();
    document.getElementById('dark').href = './themes/dark.css';
    localStorage.theme = 'dark';
  })
},
'home')

export default {};