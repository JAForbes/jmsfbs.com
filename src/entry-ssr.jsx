/* @refresh reload */
import { renderToStringAsync, generateHydrationScript } from 'solid-js/web';

import './index.css';
import App from './App.jsx'
import fs from 'fs'

export default async function(){

  const html = `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" type="image/ico" href="/assets/favicon/favicon.ico" />
        <title>jmsfbs</title>
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link rel="stylesheet" href="/hydrate.css" />
        ${generateHydrationScript()}
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">
        ${
          await renderToStringAsync(() => <App />)
        }
        </div>  
        <script type="module" src="/hydrate.js" async></script>
      </body>
    </html>
  `;

  return html;
}


