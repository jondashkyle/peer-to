var objectValues = require('object-values')
var objectKeys = require('object-keys')
var html = require('choo/html')

var views = require('./')

module.exports = view

function view (state, emit) {
  var page = state.content[state.href || '/']

  // loading
  if (!state.site.loaded || !state.ui.loaded) {
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
    <body class="bgc-black fc-white ff-sans fs1">
      ${view(state, emit)} 
    </body>
  `
}

function renderLoading (state, emit) {
  return html`
    <body class="bgc-black ff-sans">
      <svg class="loading" width="364px" height="325px" viewBox="0 0 364 325" version="1.1">
        <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Group-2" fill="#FFFFFF">
            <path d="M30.2795699,308 L30.2795699,94.5555556 L0,85.1111111 L49.2043011,70 L49.2043011,105.888889 C49.2043011,105.888889 66.2365591,70 105.978495,70 C140.043011,70 176,90.7777778 176,160.666667 C176,224.888889 136.258065,251.333333 102.193548,251.333333 C64.344086,251.333333 50.3397849,224.133333 49.2043011,221.488889 L49.2043011,308 L79.483871,325 L0,325 L30.2795699,308 Z M49.2043011,124.777778 L49.2043011,187.111111 C49.2043011,215.444444 68.1290323,240 100.301075,240 C129.066667,240 155.182796,213.555556 155.182796,160.666667 C155.182796,104 129.066667,81.3333333 100.301075,81.3333333 C62.4516129,81.3333333 49.2043011,124.777778 49.2043011,124.777778 Z" id="p"/>
            <path d="M364,247 L206.043764,247 L206.043764,225.778873 L291.980306,144.373239 C303.809687,133.240789 313.319439,121.934564 320.509847,110.454225 C327.700255,98.9738863 331.295405,86.8559323 331.295405,74.1 L331.295405,67.4901408 C331.295405,52.4149481 327.062406,40.4129554 318.59628,31.4838028 C310.130155,22.5546502 297.547129,18.0901408 280.846827,18.0901408 C264.610422,18.0901408 252.027397,22.0908051 243.097374,30.0922535 C234.167351,38.093702 227.614901,48.8201205 223.439825,62.271831 L205,55.6619718 C207.319486,48.2403385 210.450746,41.1667003 214.393873,34.4408451 C218.337,27.7149898 223.381807,21.8009645 229.528446,16.6985915 C235.675085,11.5962186 243.039344,7.53757376 251.621444,4.52253521 C260.203544,1.50749666 270.061213,0 281.194748,0 C292.792181,0 303.055754,1.68143858 311.985777,5.0443662 C320.9158,8.40729381 328.454017,13.1037257 334.600656,19.1338028 C340.747296,25.1638799 345.386199,32.41146 348.517505,40.8767606 C351.648812,49.3420611 353.214442,58.7929056 353.214442,69.2295775 C353.214442,86.3921046 348.807484,101.988897 339.993435,116.020423 C331.179387,130.051948 319.350184,143.909321 304.50547,157.592958 L227.962801,228.909859 L364,228.909859 L364,247 Z" id="2"/>
          </g>
        </g>
      </svg>
      <span class="fc-black pen">sans</span>
      <span class="fc-black pen"><b>bold</b></span>
      <span class="fc-black pen ff-mono">mono</span>
    </body>
  `
}

function renderNotFound (state, emit) {
  return html`
    <body>
      <div class="notfound p1">
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
