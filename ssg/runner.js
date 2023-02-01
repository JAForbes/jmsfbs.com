import path from "path";
import * as url from 'url'
import renderStatic from "solid-ssr/static";

const PAGES = ["index"];

const pathToServer = url.fileURLToPath(new URL('dist/lib/entry-ssr.js', import.meta.url))
const pathToPublic = url.fileURLToPath(new URL('dist', import.meta.url))

renderStatic(
  PAGES.map(p => ({
    entry: pathToServer+'',
    output: path.join(pathToPublic+'', `${p}.html`),
    url: `/${p}`
  }))
);