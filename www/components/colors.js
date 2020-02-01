import addDocsNav from './docs-nav.js';

i0.define(`colorBlock`,
`
<b i0="name"></b>
<div class="flex">
  <div class="col">
    <span i0="text1"></span>
    <div i0="c1" class="cb"></div>
  </div>
  <div class="col">
    <span i0="text2"></span>
    <div i0="c2" class="cb"></div>
  </div>
  <div class="col">
    <span i0="text3"></span>
    <div i0="c3" class="cb"></div>
  </div>
</div>
`,
(ui, props) => {
  // ui.name.innerText = props.name;
  const setBlock = i => {
    ui[`text${i}`].innerText = `.text-${props.color}${i}`;
    ui[`text${i}`].classList.add(`text-${props.color}${i}`);
    ui[`c${i}`].innerText = `.${props.color}${i}`;
    ui[`c${i}`].classList.add(`${props.color}${i}`);
  }
  setBlock(1);
  setBlock(2);
  setBlock(3);
})

i0.define(`colors`,
`
<section i0="components" class="part center m-list">
  <div class="d-w2" i0="docsNav"></div>
  <section class="d-w8 colors">
    <h4>Colors</h4>
    <div i0="container" class=""></div>
    <div>
      <b>White</b> <i>.w .text-w</i><br>
      <b>Black</b> <i>.b .text-b</i>
    </div>
    <div class="flex">
      <div class="r1 col h1"></div>
      <div class="r2 col h1"></div>
      <div class="r3 col h1"></div>
      <div class="o1 col h1"></div>
      <div class="o2 col h1"></div>
      <div class="o3 col h1"></div>
      <div class="y1 col h1"></div>
      <div class="y2 col h1"></div>
      <div class="y3 col h1"></div>
      <div class="g1 col h1"></div>
      <div class="g2 col h1"></div>
      <div class="g3 col h1"></div>
      <div class="b1 col h1"></div>
      <div class="b2 col h1"></div>
      <div class="b3 col h1"></div>
      <div class="i1 col h1"></div>
      <div class="i2 col h1"></div>
      <div class="i3 col h1"></div>
      <div class="v1 col h1"></div>
      <div class="v2 col h1"></div>
      <div class="v3 col h1"></div>
    </div>
  </section>  
</section>
`,
ui => {
  addDocsNav(ui, 'colors');
  [
    {color: 'r', name: 'Red'},
    {color: 'o', name: 'Orange'},
    {color: 'y', name: 'Yellow'},
    {color: 'g', name: 'Green'},
    {color: 'b', name: 'Blue'},
    {color: 'i', name: 'Indigo'},
    {color: 'v', name: 'Violet'},
  ].forEach(props => i0.component('colorBlock', props).append(ui.container));
}, 
'colors');

export default {};