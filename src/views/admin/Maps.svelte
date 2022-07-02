<script>
  import { location } from 'svelte-spa-router';
  import Breadcrumb from '@/components/Breadcrumb.svelte';
  import MapExample from '@/components/Maps/MapExample.svelte';

  export let title;
  let breadcrumbs = [
    {
      title: title,
      link: $location,
    },
  ];
</script>

<Breadcrumb {breadcrumbs} />
<div class="px-4 md:px-8 mx-auto w-full mt-[-6rem]">
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <MapExample />
      </div>
    </div>
  </div>
</div>
