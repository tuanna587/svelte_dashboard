<script>
  import { location } from 'svelte-spa-router';
  import Breadcrumb from '@/components/Breadcrumb.svelte';
  import CardTable from '@/components/Cards/CardTable.svelte';

  export let title;
  let breadcrumbs = [
    {
      title: title,
      link: $location,
    },
  ];
</script>

<Breadcrumb {breadcrumbs} />
<div class="px-4 md:px-8 mx-auto w-full mt-[-7rem]">
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <CardTable />
    </div>
  </div>
</div>
