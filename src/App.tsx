import type { Component } from 'solid-js';

import unearthed from './assets/unearthed.svg';
import bandcamp from './assets/bandcamp.svg';
import cohost from './assets/cohost.png';
import styles from './App.module.css';


const App: Component = () => {
  return (
    <div class={styles.app}>
      <header class={styles.header}>
        <h1>jmsfbs</h1>
      </header>
      <div class={styles.links}>
        <a class={styles.logoLink} target="_blank" rel="noopener" href="https://www.abc.net.au/triplejunearthed/artist/jmsfbs/">
          <img src={unearthed} alt="logo" />
        </a>
        <a class={styles.logoLink} target="_blank" rel="noopener" href="https://jmsfbs.bandcamp.com">
          <img src={bandcamp} alt="logo" />
        </a>
        <a class={styles.logoLink} target="_blank" rel="noopener" href="https://cohost.org/jmsfbs">
          <img src={cohost} alt="logo" />
        </a>
      </div>
      <div class={styles.tracks}>
      <iframe 
        style="border: 0; width: 100%; height: 42px;" 
        src="https://bandcamp.com/EmbeddedPlayer/track=2540183254/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/" >
      </iframe>
      <iframe 
        style="border: 0; width: 100%; height: 42px;" 
        src="https://bandcamp.com/EmbeddedPlayer/track=1214371977/size=small/bgcol=ffffff/linkcol=f171a2/transparent=true/">
      </iframe>
      </div>
      <footer class={styles.footer}>
        <p>Background art by <a href="https://unsplash.com/photos/axCBZHXGQKo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Jeremy Bishop</a></p>
        <p>Copyright © {new Date().getFullYear()} James Forbes</p>
      </footer>
    </div>
  );
};

export default App;
