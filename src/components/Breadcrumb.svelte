<script>
  import { link } from 'svelte-spa-router';
  export let breadcrumbs;
</script>

<div class="relative bg-red-500 md:pt-16 pb-30 pt-12">
  <div class="px-4 md:px-10 mx-auto w-full">
    <!-- Breadcrumb -->
    <nav class="flex py-3 px-4 text-gray-700" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a href="/" use:link class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-red-900 hover:text-gray-900 dark:hover:text-white">
            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            Home
          </a>
        </li>
        {#each breadcrumbs as item}
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-700 dark:text-red-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
              <a href={item.link} use:link class="ml-1 text-sm font-medium text-gray-700 dark:text-red-900 hover:text-gray-900 md:ml-2 dark:hover:text-white">{item.title}</a>
            </div>
          </li>
        {/each}
      </ol>
    </nav>
  </div>
</div>
