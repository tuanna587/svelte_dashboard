<script>
  import { wrap } from 'svelte-spa-router/wrap';
  import Router, { location } from 'svelte-spa-router';
  import { hide_sidebar } from '@/stores.js';

  import AdminNavbar from '@/components/Navbars/AdminNavbar.svelte';
  import Sidebar from '@/components/Sidebar/Sidebar.svelte';

  import FooterAdmin from '@/components/Footers/FooterAdmin.svelte';
  import AdminSearch from '@/components/Search/AdminSearch.svelte';

  const routes = {
    '/admin/auth/login': wrap({
      asyncComponent: () => import('@/views/admin/Login.svelte'),
      props: {
        title: 'Login',
      },
    }),
    '/admin/auth/register': wrap({
      asyncComponent: () => import('@/views/admin/Register.svelte'),
      props: {
        title: 'Register',
      },
    }),
    '/admin/auth/forgotpass': wrap({
      asyncComponent: () => import('@/views/admin/Forgotpass.svelte'),
      props: {
        title: 'Forgotpass',
      },
    }),
    '/admin/dashboard': wrap({
      asyncComponent: () => import('@/views/admin/Dashboard.svelte'),
      props: {
        title: 'Dashboard',
      },
    }),
    '/admin/settings': wrap({
      asyncComponent: () => import('@/views/admin/Settings.svelte'),
      props: {
        title: 'Settings',
      },
    }),
    '/admin/tables': wrap({
      asyncComponent: () => import('@/views/admin/Tables.svelte'),
      props: {
        title: 'Tables',
      },
    }),
    '/admin/maps': wrap({
      asyncComponent: () => import('@/views/admin/Maps.svelte'),
      props: {
        title: 'Maps',
      },
    }),
    '/admin/blog/category': wrap({
      asyncComponent: () => import('@/views/admin/blog/category/Index.svelte'),
      props: {
        title: 'Blog Category',
      },
    }),
    '/admin/blog/article': wrap({
      asyncComponent: () => import('@/views/admin/blog/article/Index.svelte'),
      props: {
        title: 'Blog Article',
      },
    }),
  };

  let hide_sidebar_value;
  hide_sidebar.subscribe((value) => {
    hide_sidebar_value = value;
  });
</script>

{#if /(login|register|forgotpass)/.test($location)}
  <div class="main">
    <Router {routes} />
  </div>
{:else}
  <div class="main">
    <Sidebar />
    <div class="relative md:ml-64 bg-slate-100 dark:bg-slate-900 transition-all" class:md:ml-0={hide_sidebar_value}>
      <AdminNavbar />
      <AdminSearch />
      <Router {routes} />
      <FooterAdmin />
    </div>
  </div>
{/if}
