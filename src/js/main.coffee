

addClass = (el, classN) ->
  el.className += " " + classN
removeClass = (el, classN) ->
  elClass = el.className
  until elClass.indexOf(classN) is -1
    elClass = elClass.replace(classN, "")
    elClass = elClass.trim()
  el.className = elClass


scrollMenu = (e) ->
  scrollTop = document.documentElement.scrollTop or document.body.scrollTop
  if scrollTop > 50
    el = document.getElementById 'menu'
    addClass el, 'scrolled'
  else
    el = document.getElementById 'menu'
    removeClass el, 'scrolled'


document.getElementById('down').onclick = ->
  window.scroll 0, 800

window.onscroll = scrollMenu
