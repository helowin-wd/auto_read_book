var sTopBtn = document.getElementsByClassName('s-top-btn')[0],
  header = document.getElementsByClassName('list-hd')[0]

addEvent(window, 'scroll', function () {
  var sTop = getScrollOffset().top
  sTopBtn.style.display = sTop ? 'block' : 'none'
})

addEvent(sTopBtn, 'click', function () {
  window.scrollTo(0, 0)
})
addEvent(header, 'click', function () {
  window.scrollTo(0, 0)
})
