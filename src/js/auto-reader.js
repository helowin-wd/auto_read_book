;(function () {
  // 可视窗口尺寸
  var wHeight = getViewportSize().height,
    // 文档尺寸
    sHeight = getScrollSize().height,
    // 播放状态
    playing = false,
    t = null

  var AutoReader = function (opt) {
    this.playBtn = opt.playBtn
    this.sTopBtn = opt.sTopBtn
    this.playImg = opt.playImg
    this.pauseImg = opt.pauseImg

    if(!this.playBtn || !this.sTopBtn || !this.playImg || !this.pauseImg) {
      console.log('4个配置项必须全部配置');
      return
    }

    var _self = this
    addEvent(this.sTopBtn, 'click', function () {
      window.scrollTo(0, 0)
      clearInterval(t)
      _self.playBtn.style.backgroundImage = 'url(' + _self.playImg + ')'
      playing = false
    })
    addEvent(window, 'scroll', function () {
      _self.sTopBtnShow.call(_self)
    })

    addEvent(this.playBtn, 'click', function () {
      _self.setAutoPlay()
    })
  }

  AutoReader.prototype = {
    setAutoPlay: function () {
      var sTop = getScrollOffset().top,
        _self = this
      // 文档高度 = 窗口高度 + 滚动距离，到达底部
      if (sHeight === wHeight + sTop) return
      if (!playing) {
        t = setInterval(function() {
          var sTop = getScrollOffset().top

          if (sHeight <= wHeight + sTop) {
            clearInterval(t)
            _self.playBtn.style.backgroundImage = 'url(' + _self.playImg + ')'
            playing = false
            return
          } else {
            // 实现页面滚动
            window.scrollBy(0, 10)
            _self.playBtn.style.backgroundImage = 'url(' + _self.pauseImg + ')'
          }
        }, 1)
        playing = true
      } else {
        clearInterval(t)
        _self.playBtn.style.backgroundImage = 'url(' + _self.playImg + ')'
        playing = false
      }
    },
    sTopBtnShow: function () {
      var sTop = getScrollOffset().top,
        sTopBtn = this.sTopBtn
      sTopBtn.style.display = sTop ? 'block' : 'none'
    }
  }

  window.AutoReader = AutoReader
})()
