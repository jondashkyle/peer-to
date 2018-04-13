var Markdown = require('markdown-it')
var raw = require('choo/html/raw')
var Page = require('enoki/page')
var html = require('choo/html')
var css = require('sheetify')

var md = new Markdown()
var styles = css`
  :host .twosix {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 3;
    pointer-events: none;
    font-size: 150vmax;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    -moz-text-stroke-color: red;
    -webkit-text-stroke-color: red;
    -moz-text-stroke-width: 2px;  
    -webkit-text-stroke-width: 2px;
  }

  :host .copy {
    animation: loading 750ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  :host .days {
    font-size: 0.85em;
    animation: days 1550ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
  }

  :host .day {
    position: relative;
  }

  :host .day.passed > div {
    background: red;
    position: absolute;
    top: 50%;
    left: -0.25rem;
    right: -0.25rem;
    height: 2px;
  }

  :host .day.today > div {
    border: 2px solid red;
    position: absolute;
    border-radius: 50%;
    top: -0.25rem;
    bottom: -0.25rem;
    left: -0.25rem;
    right: -0.25rem;
  }

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

var twosix = {
  rotate: (Math.random() * 30) - 15
}

var total = 26
var today = new Date().getDate()
var days = Array(total).fill(null).map(function () {
  return (Math.random() * 90) - 45
})

module.exports = view

function view (state, emit) {
  var page = Page(state)

  return html`
    <div class="${styles}">
      <div class="twosix" style="transform: translate(-50%, -50%) rotate(${twosix.rotate}deg)">26</div>
      <div id="days" class="days c12 p1 x xw xjb ff-mono">
        ${days.reduce(createDay, [ ])}
      </div>
      <div class="x xw xjc">
        <div id="call" class="p1 sm-py4 copy wmx-copy">
          ${raw(md.render(page('/open-call').value('text')))}
        </div>
      </div>
      <div class="tac ff-mono ttu op25 p1" style="font-size: 0.5rem">
        ${raw(md.render(page('/').value('footer')))}
      </div>
    </div>
  `

  function createDay (res, cur, i) {
    i = i + 1
    res.push(html`
      <div class="day ${i <= today ? 'passed' : ''} ${i === total ? 'today' : ''}">
        ${i}
        <div style="transform: rotate(${cur}deg">
      </div>
    `)
    if (i === total / 2) res.push(html`<div class="w100 sm-dn"></div>`)
    return res
  }
}
