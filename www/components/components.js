import addDocsNav from './docs-nav.js';

i0.define(`components`,
`
<section i0="components" class="part center m-list">
  <div i0="docsNav"></div>
  <section class="d-w8">
    <h4>Tabs</h4>
    <div class="flex align-center d-reverse t-list">
      <div class="d-col" white>
        <div class="tabs gutter" onclick="Minima.toggleTab(event)">
          <a class="active">One</a>
          <a>Two</a>
          <a>Three</a>
        </div>
        <div class="tabs gutter" onclick="Minima.toggleTab(event)">
          <button class="active">One</button>
          <button>Two</button>
          <button>Three</button>
        </div>
      </div>
      <p class="d-col">
        <b>Minima.toggleTab(</b><i> event </i><b>)</b><br>
        Parameters: <i>event</i><br>
        Activate tab
      </p>
    </div>
    <br>
    <h4>Button Tray</h4>
    <div class="flex align-center d-reverse t-list">
      <div class="d-col text-center">
        <form>
          <label for>Example Form</label>
          <input placeholder="Login">
          <div class="button-tray right">
            <button type="button">Submit</button>
          </div>
        </form>
      </div>
      <p class="d-col">
        <i>.button-tray</i> class
        <br>Use on a <b>div</b> tag inside of a form to create floating buttons that pop.
      </p>
    </div>
    <br>
    <h4>Tab Select</h4>
    <div class="flex align-center d-reverse t-list">
      <div class="d-col text-center">
        <div class="tab-select">
          <a>Tab One</a>
          <a>Tab Two</a>
          <a>Tab Three</a>
          <a class="active">Tab.active</a>
        </div>
      </div>
      <p class="d-col">
        <i>.tab-select</i> class
        <br>Use on <b>div</b> tags with anchor tag children.
      </p>
    </div>
    <br>
    <h4>Edge</h4>
    <div class="flex align-center d-reverse t-list">
      <div class="col">
        <section>
          <a class="edge">Click Me</a>
          <a class="edge">Click Me</a>
          <a class="edge active">a.edge.active</a>
          <p>
            <b>.edge</b> 
            <i class="right">a.edge</i>
          </p>
        </section>
      </div>
      <p class="d-col">
        <i>.edge</i> class
        <br>Use on <b>a</b> tags that are children to sections.
      </p>
    </div>
  </section>  
</section>
<br>
<section class="part h2 b1 text-w">
  <h4>.part</h4>
  <p>
    <i>section.part(.h2.b1)</i>
  </p>
</section>
`,
ui => {
  addDocsNav(ui, 'components');
},
'components')

export default {};