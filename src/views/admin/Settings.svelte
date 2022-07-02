<script>
  import { location } from 'svelte-spa-router';
  import CardSettings from '@/components/Cards/CardSettings.svelte';
  import CardProfile from '@/components/Cards/CardProfile.svelte';
  import Breadcrumb from '@/components/Breadcrumb.svelte';
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
    <div class="w-full lg:w-8/12 px-4">
      <CardSettings />
    </div>
    <div class="w-full lg:w-4/12 px-4">
      <CardProfile />
    </div>
  </div>
</div>
