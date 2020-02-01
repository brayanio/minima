import addDocsNav from './docs-nav.js';

i0.define(`layout`,
`
<section class="part center m-list">
  <div i0="docsNav"></div>
  <section class="d-w4">
    <h4 class="text-center">Containers</h4>
    <h6>.space-around</h6>
    <div class="space-around example">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <hr>
    <h6>.space-between</h6>
    <div class="space-between example">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <hr>      
    <h6>.space-even</h6>
    <div class="space-even example">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <hr>      
    <h6>.flex</h6>
    <div class="flex example-2">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <hr>      
    <h6>.left</h6>
    <div class="left">
      <button>left</button>
    </div>
    <hr>      
    <h6>.right</h6>
    <div class="right">
      <button>right</button>
    </div>
    <hr>      
    <h6>.center</h6>
    <div class="center">
      <button>center</button>
    </div>
    <hr>
    <p>Containers are classes that you typically apply to div elements to organize your page's layout. Containers use <i>display: flex</i> to give flexibilty with responsiveness. <i>(pun intended)</i></p>
    <h4 class="text-center">Container Styles</h4>
    <h6>.list</h6>
    <div class="center list">
      <button>one</button>
      <button>two</button>
      <button>three</button>
    </div>
    <p>
      Display container content in a column. <i>(flex-direction: column)</i>
    </p>

    <hr>

    <h6>.x-scroll .y-scroll</h6>
    <p>Makes an element scroll auto. <i>(overflow: auto)</i></p>

    <hr>

    <h6>.wrap</h6>
    <p>Wraps a container. <i>(flex-wrap: wrap)</i></p>

    <hr>

    <h6>.align-center</h6>
    <p>
      Vertically center align a container. <i>(align-items: center)</i>
    </p>
  </section>
  <section class="d-w4">
    <h4 class="text-center">Styles</h4>

    <h6>.col</h6>
    <p>
      Makes an element's width: 100%
      <br>
      <i>Use this on children elementes of a .flex container to create even columns.</i>
    </p>

    <hr>

    <h6>.gutter</h6>
    <div class="example-2 flex">
      <div class="gutter col"></div>
      <div class="gutter col"></div>
      <div class="gutter col"></div>
    </div>
    <p>
      Adds margin. <i>(margin: 3px 6px)</i>
    </p>

    <hr>

    <h6>.text-center</h6>
    <p>
      Center's an elements text. <i>(text-align: center)</i>
    </p>
    
    <hr>

    <h6>.fixed</h6>
    <p>Makes an element fixed. <i>(position: fixed)</i></p>

    <hr>

    <h6>.hidden</h6>
    <p>Use to completely hide an element from the page. <i>(display: none)</i></p>

    <h4 class="text-center">Grid</h4>
    <h6 class="space-between">.w1<span>.w10</span></h6>
    <div class="flex list example-2 nope">
      <div class="w1"></div>
      <div class="w2"></div>
      <div class="w3"></div>
      <div class="w4"></div>
      <div class="w5"></div>
      <div class="w6"></div>
      <div class="w7"></div>
      <div class="w8"></div>
      <div class="w9"></div>
      <div class="w10"></div>
    </div>

    <h4 class="text-center">Device Specific Prefixes</h4>
    <table>
      <tr>
        <th><i>.m-</i></th>
        <th><i>.t-</i></th>
        <th><i>.d-</i></th>
      </tr>
      <tr>
        <td><b>Mobile</b></td>
        <td><b>Tablet</b></td>
        <td><b>Desktop</b></td>
      </tr>
      <tr>
        <td>0 - 800px</td>
        <td>0 - 1000px</td>
        <td>1000px+</td>
      </tr>
    </table>
    <p>
      Prefix any class with <i><b>m- t-</b> or <b>d-</b></i> to make them target specific devices. 
      <br>
      <i>tablet classes will also apply to mobile devices for convinence.</i>
      <br>
      <i>Examples (.m-hidden, .m-list, .t-col, .t-space-between, .d-flex, .d-hidden, etc)</i>
    </p>
  </section>
</section>
<section>
  <h4>Minima is Reaching New Heights!</h4>
  <p>
    <b>Below are .h1 to .h10</b>
    <i class="right">Manipulate the height of elements via view height</i>
    <i class="right">h1 = height: 10vh</i>
    <i class="right">h2 = height: 20vh</i>
    <i class="right">etc</i>
  </p>
</section>
<section class="part h1 b1"><h4>.h1</h4></section>
<section class="part h2 b2"><h4>.h2</h4></section>
<section class="part h3 b3"><h4>.h3</h4></section>
<section class="part h4 b1"><h4>.h4</h4></section>
<section class="part h5 b2"><h4>.h5</h4></section>
<section class="part h6 b3"><h4>.h6</h4></section>
<section class="part h7 b1"><h4>.h7</h4></section>
<section class="part h8 b2"><h4>.h8</h4></section>
<section class="part h9 b3"><h4>.h9</h4></section>
<section class="part h10 b1"><h4>.h10</h4></section>
`,
ui => {
  addDocsNav(ui, 'layout');
},
'layout')

export default {};
