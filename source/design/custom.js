var custom = `
  html {
    font-size: 140%;
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
    text-decoration: none;
    border-bottom: currentColor solid 0;
  }

  .copy { hyphens: auto; }
  .copy a { border-bottom: 0.05em solid currentColor }

  .copy > *+* {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .copy ul li {
    position: relative;
    list-style: none;
    margin: 0;
    padding-left: 1.5rem;
  }

  .copy ul li + li {
    margin: 1rem 0;
  }

  .copy ul li:before {
    content: '—';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  .wmx-copy { max-width: 26rem }

  .ti1 {
    text-indent: -1.5rem;
    padding-left: 1.5rem;
  }

  strong {
    font-weight: bold;
  }

  code {
    font-family: 'Plex Mono', menlo, manaco, monospace;
    font-size: 0.85em;
  }

  ::-webkit-input-placeholder { color: #000 }
  ::-moz-placeholder { color: #000 }
  :-ms-input-placeholder { color: #000 }
  :-moz-placeholder { color: #000 }

  @font-face {
    font-family: 'Wremena Light';
    src: url(/assets/fonts/Wremena-Light.woff);
  }

  @font-face {
    font-family: 'Wremena Light';
    font-weight: bold;
    src: url(/assets/fonts/Wremena-Bold.woff);
  }

  @font-face {
    font-family: 'Spectral Light';
    src: url(/assets/fonts/Spectral-ExtraLight.ttf);
  }

  @font-face {
    font-family: 'Spectral Light';
    font-style: italic;
    src: url(/assets/fonts/Spectral-ExtraLightItalic.ttf);
  }

  @font-face {
    font-family: 'Plex Mono';
    src: url(/assets/fonts/IBMPlexMono-Light.ttf);
  }
`

module.exports = custom
