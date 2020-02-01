import addDocsNav from './docs-nav.js';

i0.define(`elements`,
`
<section class="part center m-list">
  <div class="d-w2" i0="docsNav"></div>
  <section class="d-w8">
    <h6>Section</h6>
    <section>
      <p>Sections are automatically rendered as cards and are useful for making page content pop.</p>
    </section>
    
    <hr>
    
    <h6>Paragraph</h6>
    <p>Paragraphs render with larger font size and thick padding</p>

    <hr>

    <h6>CTA</h6>
    <button>Click Me</button>
    <a>Click Me</a>

    <hr>

    <h6>Input</h6>
    <input placeholder="Email">

    <hr>

    <h6>Select</h6>
    <select>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </select>

    <hr>

    <h6>Progress</h6>
    <progress value="75" max="100"></progress>

    <hr>

    <h6>Form</h6>
    <form>
      <label for>Email</label>
      <input placeholder="Email">
      <label for>Password</label>
      <input placeholder="Password" type="password">
      <label for>Select</label>
      <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
      <div class="button-tray right">
        <button type="button">Submit</button>
      </div>
    </form>

    <hr>

    <h6>Dialog</h6>
    <button i0="openDialog">Open Dialog</button>
    <dialog i0="dialog">
      <h3>Dialog element example</h3>
      <p>Click me to close me</p>
    </dialog>
    <p>The dialog element sometimes known as a modal creates a pop-out that can hold large amounts of data. Check out w3schools <a target="_blank" href="https://www.w3schools.com/tags/tag_dialog.asp">example</a> to learn how to open/close the element.</p>

    <hr>

    <h6>Table</h6>
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
    </table>
    <p>
      Table elements are rendered as cards.
    </p>

    <hr>

    <h6>Ordered List</h6>
    <ol>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ol>

    <hr>

    <h6>Unordered List</h6>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>

    <hr>

    <h6>Headers</h6>
    <div>
      <h1>header 1</h1>
      <h2>header 2</h2>
      <h3>header 3</h3>
      <h4>header 4</h4>
      <h5>header 5</h5>
      <h6>header 6</h6>
      <b>Bold Text for scale</b>
    </div>
  </section>
</section>
`,
ui => {
  addDocsNav(ui, 'elements');

  ui.openDialog.on('click', ()=>Minima.toggleDialog(ui.dialog));
  ui.dialog.on('click', ()=>Minima.toggleDialog(ui.dialog));
},
'elements')

export default {};