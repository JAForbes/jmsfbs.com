<script lang="ts">
  import type { CohostPost } from "./types";
  export let posts: CohostPost[];
</script>

<div class="posts">
  <ul class="postList">
    {#each posts as x}
      <li class="post">
        <a style="text-decoration:none;" href={x.url}><h4>{x.title}</h4></a>
        <div>{@html x.content_html}</div>
        <p style="color:pink;">
          Posted {new Date(x.date_published).toLocaleDateString("en-au", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <ul class="tags">
          {#each x.tags.filter( x => x != 'crosspost:jmsfbs.com' ) as tag}
            <a href={"https://cohost.org/jmsfbs/tagged/" + tag}
              ><li>#{tag}</li></a
            >
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
  <a class="readMore" href="https://cohost.org/jmsfbs"><p>Read More Posts</p></a
  >
</div>

<style>
  .posts {
    display: grid;
    min-height: 10em;
    gap: 1em;
  }

  .posts .postList {
    list-style: none;
    display: grid;
    gap: 5em;
    padding-left: 0px;
  }

  .post :global(div),
  .post :global(figure) {
    display: grid;
    margin: 0em;
  }

  .post :global(img) {
    max-width: 100%;
    margin: 0em;
    box-sizing: border-box;
  }

  .post :global(img) {
    border-radius: 0.25em;
    border: solid 5px white;
    margin: 1em 0em;
  }

  .post :global(h1),
  .post :global(h2),
  .post :global(h3),
  .post :global(h4) {
    margin: 0em;
  }

  .post {
    background-color: black;
    padding: 1em 1em 2em 1em;
    border-radius: 0.2;
    max-width: 40em;
  }

  .post :global(a) {
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
  }

  .post :global(pre) {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  li.post {
    padding: 1em;
  }

  .post h4:first-child {
    border-bottom: solid 5px #c0ffd9;
    border-left: solid 6px #10d0ff;
    padding: 1em;

    width: calc(100% + 2em);
    left: -1em;
    top: -1em;
    position: relative;
    box-sizing: border-box;
  }

  .tags {
    list-style: none;
    padding-left: 0px;
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
  }

  .readMore {
    text-align: center;
    padding-top: 5em;
  }
</style>
