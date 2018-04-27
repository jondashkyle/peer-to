var Markdown = require('markdown-it')
var raw = require('choo/html/raw')
var Page = require('enoki/page')
var html = require('choo/html')
var css = require('sheetify')

var md = new Markdown()
var styles = css`
  @keyframes days {
    0% { transform: translateY(-1.5rem); opacity: 0 }
    50% { transform: translateY(-1.5rem); opacity: 0 }
    100% { transform: translateY(0); opacity: 1 }
  }

  @keyframes loading {
    0% { transform: translateY(1.5rem); opacity: 0 }
    100% { transform: translateY(0); opacity: 1 }
  }
`

module.exports = view

function view (state, emit) {
  var page = Page(state)

  return html`
    <div class="${styles}">
      <div class="x xw xjc xac vhmn100 ff-mono fs2">
        2018-04-28
      </div>
    </div>
  `
}
