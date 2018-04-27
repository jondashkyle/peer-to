var gr8 = require('gr8')

var utils = [ ]

var typography = {
  sans: '"Wremena Light", helvetica, arial, sans-serif',
  mono: '"Plex Mono", menlo, monospace'
}

var colors = {
  white: '#fff',
  grey_15: '#ccc',
  grey_90: '#333',
  highlight: '#ff0',
  black: '#000'
}

utils.push({
  prop: { fsvmin: 'font-size' },
  unit: 'vmin',
  vals: [0, 1, 1.5, 2, 2.5, 3, 5]
})

utils.push({
  prop: 'font-family',
  join: '-',
  vals: typography
})

utils.push({
  prop: { bgc: 'background-color' },
  join: '-',
  vals: colors
})

utils.push({
  prop: { fc: 'color' },
  join: '-',
  vals: colors
})

utils.push({
  prop: { fsvw: 'font-size' },
  unit: 'vw',
  vals: [ 6, 12 ]
})

var borderWeights = [0, 1, 2]
var borders = {}
borderWeights.forEach(border => {
  Object.keys(colors).forEach(key => {
    borders[border + '-' + key] = `${border}px solid ${colors[key]}`
  })
})

utils.push({
  prop: [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left'
  ],
  vals: borders
})

module.exports = gr8({
  lineHeight: [1, 1.1, 1.25, 1.5],
  spacing: [0, { '0-5': 0.75 }, { '1': 1.5 }, 4],
  fontSize: [1, 2, 3, 4],
  utils: utils,
  responsive: true,
  breakpointSelector: 'class'
})
