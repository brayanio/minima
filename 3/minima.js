if (!window.Minima)
  window.Minima = {};

Minima.death = function (el, fn, dur) {
  el.classList.add('death');
  setTimeout(function () {
    el.classList.remove('death');
    if (fn)
      fn();
  }, dur || 300);
}

Minima.toggleBackground = function (autoClose, setter, onclose) {
  if(!Minima.minimaBg){
    var div = document.createElement('div');
    div.classList.add('minima-bg');
    div.addEventListener('click', function () {
      if (Minima.minimaBg.classList.contains('autoClose')) {
        if(Minima.minimaBg.closefn)
          Minima.minimaBg.closefn();
        Minima.toggleBackground(false, false);
      }
    });
    Minima.minimaBg = div;
  }
  Minima.minimaBg.classList[autoClose !== false ? 'add' : 'remove']('autoClose');
  Minima.minimaBg.closefn = onclose;
  if (Minima.minimaBg.parentElement !== null && setter !== true)
    Minima.minimaBg.parentElement.removeChild(Minima.minimaBg);
  else if(Minima.minimaBg.parentElement === null && setter !== false)
    document.body.appendChild(Minima.minimaBg);
}

Minima.toggleDialog = function (el, autoClose, setter) {
  var isOpen = el.getAttribute('open');
  autoClose = autoClose !== false;
  if (!isOpen && setter !== false){
    el.setAttribute('open', 'true');
    Minima.toggleBackground(autoClose, true, function() {
      Minima.toggleDialog(el, undefined, false);
    });
  } else if (isOpen && setter !== true) {
    el.removeAttribute('open');
    Minima.toggleBackground(autoClose, false);
  }
};

Minima.toggleMobile = function (el, autoClose, setter) {
  var isOpen = el.classList.contains('active');
  autoClose = autoClose !== false;
  if (!isOpen && setter !== false){
    el.classList.add('active');
    Minima.toggleBackground(autoClose, true, function() {
      Minima.toggleMobile(el, undefined, false);
    });
  } else if (isOpen && setter !== true) {
    el.classList.remove('active');
    Minima.toggleBackground(autoClose, false);
  }
};

Minima.toggleTab = function (event) {
  var active = event.target.parentElement.querySelector('.active');
  if (active)
    active.classList.remove('active');
  Minima.activate(event);
}

Minima.activate = function (e, setter) {
  var el = e instanceof Element ? e : e.target;
  if(setter === undefined)
    setter = !el.classList.contains('active');
  el.classList[setter ? 'add' : 'remove']('active');
};

Minima.initNav = function () {
  var nav = document.querySelector('nav');
  document.body.classList[nav ? 'add' : 'remove']('hasNav');
}

Minima.getState = function () {
  return innerWidth > 800 ? (innerWidth > 1000 ? "d" : "t") : "m";
}

Minima.init = function () {
  Minima.state = Minima.getState();
  Minima.initNav();
};

addEventListener('load', Minima.init);
addEventListener('hashchange', Minima.init);
addEventListener('resize', Minima.init);