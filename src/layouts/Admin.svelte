<script>
  // import { Router, Route } from "svelte-spa-router";
  import { wrap } from 'svelte-spa-router/wrap';
  import Router, { location, link, querystring } from 'svelte-spa-router';

  // components for this layout
  import AdminNavbar from '@/components/Navbars/AdminNavbar.svelte';
  import Sidebar from '@/components/Sidebar/Sidebar.svelte';
  import HeaderStats from '@/components/Headers/HeaderStats.svelte';
  import FooterAdmin from '@/components/Footers/FooterAdmin.svelte';

  const routes = {
    '/admin/dashboard': wrap({
      asyncComponent: () => import('@/views/admin/Dashboard.svelte'),
    }),
    '/admin/settings': wrap({
      asyncComponent: () => import('@/views/admin/Settings.svelte'),
    }),
    '/admin/tables': wrap({
      asyncComponent: () => import('@/views/admin/Tables.svelte'),
    }),
    '/admin/maps': wrap({
      asyncComponent: () => import('@/views/admin/Maps.svelte'),
    }),
  };
</script>

<div>
  <Sidebar />
  <div class="relative md:ml-64 bg-slate-100 dark:bg-slate-900">
    <AdminNavbar />
    <HeaderStats />
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router {routes} />
      <FooterAdmin />
    </div>
  </div>
</div>
