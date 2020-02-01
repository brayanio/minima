i0.define(`docsNav`,
`
<section class="part sidebar d-w2 mr ml">
  <h6 class="ml">Documentation</h6>
  <a class="edge" href="#/documentation" i0="setup">Setup</a>
  <hr>
  <a class="edge" href="#/elements" i0="elements">Elements</a>
  <a class="edge" href="#/components" i0="components">Components</a>
  <a class="edge" href="#/layout" i0="layout">Layout</a>
  <a class="edge" href="#/colors" i0="colors">Colors</a>
</section>
`,
(ui, active) => {
  ui[active].classList.add('active');
})

export default (ui, active) => i0.component('docsNav', active, ui.docsNav);