<script>
  import Select from 'svelte-select';

  import fetchPosts from '@/services/fetchPosts.js';
  import { onMount } from 'svelte';

  async function getPosts(filterText) {
    // Put your async code here...
    // For example call an API using filterText as your search params
    // When your API responds resolve your Promise
    let res = await fetchPosts(filterText);
    return res;
  }

  onMount(() => {
    getPosts();
  });
</script>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
