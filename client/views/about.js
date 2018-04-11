var Markdown = require('markdown-it')
var raw = require('choo/html/raw')
var Page = require('enoki/page')
var html = require('choo/html')
var css = require('sheetify')

var md = new Markdown()
var styles = css`
  :host {
    animation: loading 750ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  @keyframes loading {
    0% { transform: translateY(1.5rem); opacity: 0 }
    1000% { transform: translateY(0); opacity: 1 }
  }
`

module.exports = view

function view (state, emit) {
  var page = Page(state)

  return html`
    <div class="x xjc sm-py4 ${styles}">
      <div class="p0-5">
        <div class="p0-5 copy wmx-copy">
          ${raw(md.render(page().value('text')))}
        </div>
      </div>
    </div>
  `
}
