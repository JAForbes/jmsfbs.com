<script lang="ts">
	import type { PageData } from './$types'
	import Posts from './posts.svelte'
	
	export let data : PageData
</script>
<svelte:head>
  <title>jmsfbs</title>
  <meta name="description" content="jmsfbs is a musician and songwriter from the Blue Mountains, Australia"/>
</svelte:head>
<div class="app">
	<div class="landing">
		<header class="header">
			<h1>jmsfbs</h1>
		</header>
	  <div class="links">
			<a class="logoLink" target="_blank" rel="noreferrer noopener" href="https://www.abc.net.au/triplejunearthed/artist/jmsfbs/">
				<img src={'/unearthed.svg'} alt="logo" />
			</a>
			<a class="logoLink" target="_blank" rel="noreferrer noopener" href="https://jmsfbs.bandcamp.com">
				<img src={'/bandcamp.svg'} alt="logo" />
			</a>
			<a class="logoLink" target="_blank" rel="noreferrer noopener" href="https://cohost.org/jmsfbs">
				<img src={'/cohost.png'} alt="logo" />
			</a>
		</div>
		<div class="tracks">
			<iframe 
				title="Bandcamp"
				style="border: 0; width: 100%; height: 42px;" 
				src="https://bandcamp.com/EmbeddedPlayer/track=2540183254/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" >
			</iframe>
			<iframe 
				title="Bandcamp"
				style="border: 0; width: 100%; height: 42px;" 
				src="https://bandcamp.com/EmbeddedPlayer/track=1214371977/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/">
			</iframe>
		</div>
	</div>
	<Posts posts={data.posts}/>
	<footer class="footer">
	  <p>Background art by <a href="https://unsplash.com/photos/axCBZHXGQKo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Jeremy Bishop</a></p>
	  <p>Copyright © {new Date().getFullYear()} James Forbes</p>
    <p>Source Code on <a href="https://github.com/JAForbes/jmsfbs.com">Github</a></p>
	</footer>
</div>
<style>
:global(html) {
  display: grid;
  min-height: 100vh;
  background-color: black;
}
:global(body) {
  display: grid;
  color: white;
  background: linear-gradient(#707070, #5a99c1), url(/desert-bg.jpg);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: none;
  background-blend-mode: multiply;
  background-attachment: fixed;
}

:global(body > div) {
  display: grid;
  justify-content: center;
}

.app {
  display: grid;
  padding: 1em;
  gap: 10em;
  align-items: center;
}

.app .landing {
  display: grid;
  padding: 1em;
  gap: 10em;
  align-items: center;
  max-width: 30em;
  justify-self: center;
}


.links {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
}

.logoLink {
  background-color: white;
  border-radius: 0.25em;
  max-width: 5em;
  min-height: 5em;
  max-height: 5em;
  overflow: hidden;
}

.header {
  display: grid;
  justify-content: center;
}

@keyframes color-change {
  0% {
    color: pink;
  }
  50% {
    color: lightskyblue
  }
  100% {
    color: pink;
  }
}

.header h1 {
  font-size: 4em;
  letter-spacing: 10px;
  margin: 0em;
  animation: color-change 10s ease-in-out alternate infinite;
  mix-blend-mode: difference;
}

.logoLink img {
  min-height: 100%;
  max-height: 100%;
}

.tracks {
  display: grid;
  justify-content: center;
  gap: 2em;
}

.footer {
  color: #595e68;
  align-self: end;
  justify-content: center;
  justify-items: center;
  text-align: center;
  font-size: 0.7em;
}

.footer a:visited, .footer a {
  color: currentColor;
}

:global(.app a, .app a:visited) {
  color: white;
}

:global(.app a:hover) {
  color: pink;
}

:global(body) {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:global(code) {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
</style>

