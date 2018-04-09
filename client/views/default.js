var Page = require('enoki/page')
var html = require('choo/html')
var href = require('dat-href')
var renderEntry = require('../components/entry')

module.exports = view

function view (state, emit) {
  var page = Page(state)
  var children = page('/sites')
    .children()
    .visible()
    .sortBy('date', 'asc')
    .toArray()

  return html`
    <div class="tac">
      <div class="p1">
        ${page().value('title')}
      </div>
      <ul class="p0-5">
        ${children.map(createChild)}
      </ul>
    </div>
  `

  function createChild (props) {
    var child = page(props)
    var link = href(child.value('http'), child.value('dat'))

    return html`
      <li class="p0-5">
        <div>${child.value('title')}, ${child.value('date').split('-')[0]}</div>
        <div>${child.value('author')}</div>
        <div><a href="${link}">${link}</a></div>
      </li>
    `
  }
}
