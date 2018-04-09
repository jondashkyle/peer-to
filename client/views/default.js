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

  return html`
    <div class="x xw p0-5">
      <div class="p0-5 copy wmx-copy">
        ${raw(md.render(page().value('text')))}
      </div>
      <ul class="c12">
        ${children.map(createChild)}
      </ul>
    </div>
  `

  function createChild (props) {
    var child = page(props)
    var link = href(child.value('http'), child.value('dat'))

    return html`
      <li class="p0-5">
        <div class="ti1">
          <a href="${link}" target="_blank">${child.value('title')}, ${child.value('date').split('-')[0]}<br>
          ${child.value('author')}</a>
        </div>
      </li>
    `
  }
}
