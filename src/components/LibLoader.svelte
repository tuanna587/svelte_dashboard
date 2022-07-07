<svelte:head>
  <script bind:this={script} src={url}></script>
</svelte:head>

<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let url;
  let script;

  onMount(async () => {
    script.addEventListener('load', () => {
      dispatch('loaded');
    })

    script.addEventListener('error', (event) => {
      console.error("something went wrong", event);
      dispatch('error');
    });
  });
</script>

<!-- example
<LibLoader url="myExternalLib.js" on:loaded="{onLoaded}" />


<script>
  import LibLoader from './LibLoader.svelte';

  function onLoaded() {
    myExternalLib.doStuff();
  }
</script> -->