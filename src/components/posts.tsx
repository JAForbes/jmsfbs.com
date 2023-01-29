import { createSignal, createResource, Show, For } from "solid-js";
import style from './posts.module.css'

const feedURL = '/feed/cohost.json'

const example = {
    "id": "915980",
    "content_html": "",
    "url": "https://cohost.org/jmsfbs/post/915980-starting-the-next-so",
    "title": "Starting the next song",
    "summary": "",
    "date_modified": "2023-01-27T06:56:51.650Z",
    "date_published": "2023-01-27T06:56:51.647Z",
    "author": {
      "name": "@jmsfbs",
      "url": "https://cohost.org/jmsfbs"
    },
    "tags": [
      "Midi",
      "home recording",
      "songwriting"
    ]
}
type CohostPost = typeof example;

async function fetchFeed(){
    const res = await fetch(feedURL).then( x => x.ok ? x.json() : Promise.reject([x.statusText]) )
    const { items } = res as ({ items: CohostPost[] })

    
    return items
        .filter( 
            x => (
                x.tags.includes('music') 
                || x.tags.includes('home recording')
            )
            && x.author.name === '@jmsfbs'
        )
        .slice(0,10)
}

export default () => {
    const [now] = createSignal(Date.now())
    const [feed] = createResource(now, fetchFeed)

    return (
        <div class={style.posts}>
            <Show when={feed.state== 'ready'} fallback={null}>
                <ul class={style.postList}>
                    <For each={feed()}>
                        { x => 
                        <li class={style.post}>    
                            <h4>{x.title}</h4>
                            <div innerHTML={x.content_html}></div>
                            <p style="color:pink;">Posted {
                                new Date('2019-07-31')
                                .toLocaleDateString(window.navigator.language, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }</p>
                            <ul class={style.tags}>{
                                x.tags.map( x => <a href={"https://cohost.org/jmsfbs/tagged/"+x}><li>#{x}</li></a>)
                            }</ul>
                        </li>
                            
                        }
                    </For>
                </ul>
                <a class={style.readMore} href="https://cohost.org/jmsfbs"><p>Read More Posts</p></a>
            </Show>
        </div>
        
    )
}