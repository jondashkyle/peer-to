var Markdown = require('markdown-it')
var raw = require('choo/html/raw')
var Page = require('enoki/page')
var html = require('choo/html')
var href = require('dat-href')
var renderEntry = require('../components/entry')

var md = new Markdown()
var one_minute = 1000*60
var one_hour = 1000*60*60
var live = new Date('Fri Apr 28 2018 12:00:00 GMT-0700 (PDT)')
var now = new Date()

module.exports = view

function view (state, emit) {
  var page = Page(state)
  var children = page('/sites')
    .children()
    .visible()
    .sortBy('date', 'asc')
    .toArray()
  var text = page('/').value('text')

  if (!state.site.p2p) {
    text += '\n\n' + page('/').value('fallback')
  }

  // if (live > now) return createSoon()

  return html`
    <div class="x xw p0-5">
      <div class="p0-5 copy wmx-copy" style="min-height: 50vh;">
        ${raw(md.render(text))}
      </div>
      <ul class="c12 tc1 sm-tc2">
        ${children.map(createChild)}
      </ul>
      <div class="ff-mono ttu op25 p0-5 mt4" style="font-size: 0.5rem">
        ${raw(md.render(page('/').value('footer')))}
      </div>
    </div>
  `

  function createChild (props) {
    var child = page(props)
    var link = child.value('dat')

    return html`
      <li class="p0-5">
        <a href="${link}" target="_blank" class="db ti1">
          ${child.value('title')}<br>
          ${child.value('author')}
        </a>
      </li>
    `
  }
}

function createSoon () {
  var minutes = Math.round((live.getTime() - now.getTime()) / one_minute)
  return html`
    <div class="x xw xjc xac vhmn100 ff-mono">
      — ${minutes}
    </div>
  `
}
