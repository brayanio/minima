import nav from './components/nav.js';
import home from './components/home.js';
import documentation from './components/documentation.js';
import examples from './components/examples.js';
import support from './components/support.js';
import components from './components/components.js';
import elements from './components/elements.js';
import layout from './components/layout.js';
import colors from './components/colors.js';

import snippets from './snippets.js';

i0.router('home');

// google analytics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-123344128-1');

if(localStorage.theme === 'dark')
  document.getElementById('dark').href = './themes/dark.css';