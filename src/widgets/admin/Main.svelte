<script>
  import { location } from 'svelte-spa-router';
  import { hide_sidebar } from '@/stores.js';

  import AdminNavbar from '@/components/Navbars/AdminNavbar.svelte';
  import Sidebar from '@/components/Sidebar/Sidebar.svelte';
  import HeaderStats from '@/components/Headers/HeaderStats.svelte';
  import FooterAdmin from '@/components/Footers/FooterAdmin.svelte';
  import AdminSearch from '@/components/Search/AdminSearch.svelte';
  import Breadcrumb from '@/components/Breadcrumb.svelte';

  let hide_sidebar_value;
  hide_sidebar.subscribe((value) => {
    hide_sidebar_value = value;
  });
  export let title;
  let breadcrumbs = [{ title: title, link: $location }];

</script>

<Sidebar />
<div class="relative md:ml-64 bg-slate-100 dark:bg-slate-900 transition-all" class:md:ml-0={hide_sidebar_value}>
  <AdminNavbar />
  <AdminSearch />
  <slot name="header">
    {#if $location == '/' || $location == '/admin/dashboard'}
      <HeaderStats />
    {:else}
      <HeaderStats>
        <Breadcrumb {breadcrumbs} />
      </HeaderStats>
    {/if}
  </slot>
  <div class="px-4 md:px-10 mx-auto w-full -m-24">
    
    <slot name="content">This default content for slot content</slot>
    <FooterAdmin />
  </div>
</div>
