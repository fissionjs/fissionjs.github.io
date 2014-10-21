(function() {
  var addClass, removeClass, scrollMenu;

  addClass = function(el, classN) {
    return el.className += " " + classN;
  };

  removeClass = function(el, classN) {
    var elClass;
    elClass = el.className;
    while (elClass.indexOf(classN) !== -1) {
      elClass = elClass.replace(classN, "");
      elClass = elClass.trim();
    }
    return el.className = elClass;
  };

  scrollMenu = function(e) {
    var el, scrollTop;
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 50) {
      el = document.getElementById('menu');
      return addClass(el, 'scrolled');
    } else {
      el = document.getElementById('menu');
      return removeClass(el, 'scrolled');
    }
  };

  document.getElementById('down').onclick = function() {
    return window.scroll(0, 800);
  };

  window.onscroll = scrollMenu;

}).call(this);
