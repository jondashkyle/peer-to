var Markdown = require('markdown-it')
var raw = require('choo/html/raw')
var Page = require('enoki/page')
var html = require('choo/html')
var href = require('dat-href')
var renderEntry = require('../components/entry')

var md = new Markdown()

module.exports = view

function view (state, emit) {
  var page = Page(state)
  var children = page('/sites')
    .children()
    .visible()
    .sortBy('date', 'asc')
    .toArray()
  var text = page().value('text')

  if (!state.site.p2p) {
    text += '\n\n' + page().value('fallback')
  }

  return html`
    <div class="x xw p0-5">
      <div class="p0-5 copy wmx-copy" style="min-height: 50vh;">
        ${raw(md.render(text))}
      </div>
      <ul class="c12 tc1 sm-tc2">
        ${children.map(createChild)}
      </ul>
    </div>
  `

  function createChild (props) {
    var child = page(props)
    var link = child.value('dat')

    return html`
      <li class="p0-5">
        <a href="${link}" target="_blank" class="db ti1">
          ${child.value('title')}, <span class="ff-mono" style="font-size: 0.65em">${child.value('date').split('-')[0]}</span><br>
          ${child.value('author')}
        </a>
      </li>
    `
  }
}
