var FontFaceObserver = require('fontfaceobserver')

module.exports = plugin

var normal = new FontFaceObserver('Spectral Light')
var italic = new FontFaceObserver('Spectral Light', { style: 'italic' })
var mono = new FontFaceObserver('Plex Mono')

function plugin (state, emitter) {
  state.ui = {
    loaded: false
  }

  emitter.on(state.events.DOMCONTENTLOADED, handleLoad)

  function handleLoad () {
    Promise.race([
      timer(1000),
      normal.load(),
      italic.load(),
      mono.load()
    ]).then(function () {
      state.ui.loaded = true
      emitter.emit(state.events.RENDER)
    }).catch(function (err) {
      state.ui.loaded = true
      emitter.emit(state.events.RENDER)
    })
  }
}

function timer(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(reject, time)
  })
}