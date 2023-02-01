// import type { Component } from 'solid-js';

import { lazy, Suspense } from 'solid-js';
import styles from './App.module.css';
const Posts = lazy( () => import('./components/posts') )


const App = () => {
  return (
    <div class={styles.app}>

      <div class={styles.landing}>
        <header class={styles.header}>
          <h1>jmsfbs</h1>
        </header>
        <div class={styles.links}>
          <a class={styles.logoLink} target="_blank" rel="noopener" href="https://www.abc.net.au/triplejunearthed/artist/jmsfbs/">
            <img src={'/assets/unearthed.svg'} alt="logo" />
          </a>
          <a class={styles.logoLink} target="_blank" rel="noopener" href="https://jmsfbs.bandcamp.com">
            <img src={'/assets/bandcamp.svg'} alt="logo" />
          </a>
          <a class={styles.logoLink} target="_blank" rel="noopener" href="https://cohost.org/jmsfbs">
            <img src={'/assets/cohost.png'} alt="logo" />
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
        
      </div>
      <Suspense>
        <Posts />
      </Suspense>
      <footer class={styles.footer}>
        <p>Background art by <a href="https://unsplash.com/photos/axCBZHXGQKo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Jeremy Bishop</a></p>
        <p>Copyright © {new Date().getFullYear()} James Forbes</p>
      </footer>
    </div>
  );
};

export default App;
