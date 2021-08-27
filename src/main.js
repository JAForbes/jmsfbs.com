import x from './api/test.js'
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`


// x.amazing('James').then(console.log, console.error)

x('James').then(console.log, console.error)

