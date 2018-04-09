var objectValues = require('object-values')
var objectKeys = require('object-keys')
var html = require('choo/html')

var views = require('./')

module.exports = view

function view (state, emit) {
  var page = state.content[state.href || '/']

  // loading
  if (!state.site.loaded) {
    return renderLoading(state, emit)
  }

  // 404
  if (!page) {
    return renderNotFound(state, emit)
  }

  // view
  var view = views[page.view] || views.default

  // title
  var title = getTitle(state, page)
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)

  // template
  return html`
    <body class="ff-sans fs1 lh1-5">
      ${view(state, emit)} 
    </body>
  `
}

function renderLoading (state, emit) {
  return html`
    <body>
      <div class="loading"></div>
    </body>
  `
}

function renderNotFound (state, emit) {
  return html`
    <body>
      <div class="notfound">
        Page not found
      </div>
    </body>
  `
}

function getTitle (state, page) {
  var siteTitle = state.content['/'].title
  var pageTitle = page.title
  
  return siteTitle !== pageTitle
    ? siteTitle + ' | ' + pageTitle
    : siteTitle
}