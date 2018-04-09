var custom = `
  html {
    font-size: 110%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings:"kern" 1;
    -ms-font-feature-settings:"kern" 1;
    -o-font-feature-settings:"kern" 1;
    -webkit-font-feature-settings:"kern" 1;
    font-feature-settings:"kern" 1;
    font-kerning: normal;
  }

  body {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 767px) {
    html {
      font-size: 4vw;
    }
  }

  a {
    color: currentColor;
    border-bottom: currentColor solid 0;
  }

  @media (min-width: 767px) {
    .abbh a:hover {
      border-bottom-width: 0.05em;
    }
  }

  .flickity-slider {
    height: 100%;
  }

  .mxwidth { max-width: 1000px }

  .bb0 { border-bottom: 0; padding-bottom: 0; }
  .oph100:hover { opacity: 1 }

  .contrast { filter: grayscale(100%) contrast(1.5) }
  .grayscale { filter: grayscale(100%) }

  .usn {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }

  .angle {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    pointer-events: none;
  }

  .shadow {

  }

  input, button, label {
    outline: 0;
    border-radius: 0;
    background: none;
  }

  .button-rsvp {
    transform: translate3d(0, calc(-100% - 8rem), 0) rotate(5deg);
    transition: 500ms transform cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .button-rsvp.button-rsvp-active {
    transform: translate3d(0, 0, 0) rotate(15deg);
  }

  .copy-width {
    max-width: 32rem;
  }

  a {
    text-decoration: none;
  }

  .lh1-5 a { padding-bottom: 0.2em }
  .lh1-25 a { padding-bottom: 0 }
  .lh1 a { padding-bottom: 0 }

  .hyphen {
    margin-top: 1px;
    height: 1px;
    width: 100%;
    background: #000;
  }

  .copy h2 {
    font-size: 1em;
  }

  .copy { hyphens: auto; }
  .copy a { border-bottom: 0.05em solid currentColor }

  .footnotes a {
    border-bottom: 2px solid currentColor;
    padding-bottom: 0.1em;
  }

  .ic {
    background: #000;
    color: #fff;
    display: inline-block;
    line-height: 1rem;
    height: 1rem;
    width: 1rem;
    margin-bottom: 0.4em;
    vertical-align: bottom;
    font-size: 0.7em;
    text-align: center;
    font-family: "Lars Mono", menlo, monospace;
    border-radius: 50%;
  }

  .copy p {
    text-indent: 1.5em;
  }

  .copy h2:not(:first-child) {
    margin-top: 1.5em;
  }

  .copy ul li, .copy ol li {
    padding-left: 1.5em;
    position: relative !important;
  }

  .copy ol li:before {
    position: absolute;
    left: 0;
  }

  .copy ol li:nth-child(1):before { content: '1' }
  .copy ol li:nth-child(2):before { content: '2' }
  .copy ol li:nth-child(3):before { content: '3' }
  .copy ol li:nth-child(4):before { content: '4' }

  .mxa { margin-left: auto; margin-right: auto; }

  .copy-simple {
    hyphens: auto;
  }

  .copy-simple > *+* {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .copy-simple ul li {
    list-style: disc;
    margin-left: 1rem;
    padding-left: 0.5rem;
  }

  .copy-simple h2 {
    margin-top: 3rem;
  }

  .copy-simple p {
    text-indent: 0;
  }

  strong {
    font-weight: bold;
  }

  code {
    font-family: 'Lars Mono', menlo, manaco, monospace;
  }

  .ofc { object-fit: cover }

  .img-grid {
    background-image: url(/assets/imgs/grid.svg);
    background-size: 4px 4px;
    background-repeat: repeat;
  }

  .pixelate {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  .psst { position: sticky }

  .blink {
    animation: blink 500ms steps(1, end) infinite;
  }

  .blink-sec {
    animation: blink 2s steps(1, end) infinite;
  }

  @keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
  }

  ::-webkit-input-placeholder { color: #000 }
  ::-moz-placeholder { color: #000 }
  :-ms-input-placeholder { color: #000 }
  :-moz-placeholder { color: #000 }

  @font-face {
    font-family: 'Lars Light';
    src: url(/assets/fonts/Lars-Light.woff);
  }

  @font-face {
    font-family: 'Lars Mono';
    src: url(/assets/fonts/Lars-Mono.woff);
  }
`

module.exports = custom
