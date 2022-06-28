<script>
  // import { link } from "svelte-spa-router";
  import Router, { location, link, querystring } from 'svelte-spa-router';

  import NotificationDropdown from '@/components/Dropdowns/NotificationDropdown.svelte';
  import UserDropdown from '@/components/Dropdowns/UserDropdown.svelte';
  import { toggle_sidebar_mobile, hide_sidebar } from '@/stores.js';
  let collapseShow = 'hidden';

  let hide_sidebar_value;

  hide_sidebar.subscribe((value) => {
    hide_sidebar_value = value;
  });

  function toggleCollapseShow(classes) {
    collapseShow = classes;
    toggle_sidebar_mobile.set(!hide_sidebar_value);
  }
</script>

<nav class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 scrollbar md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between relative md:w-64 z-11 md:z-10 py-4 px-6 transition-all" class:hide-sidebar={hide_sidebar_value}>
  <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
    <!-- Toggler -->
    <button class="cursor-pointer text-black dark:text-red-600 opacity-50 dark:opacity-80 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" on:click={() => toggleCollapseShow('bg-white p-2 show')}>
      <i class="fas fa-bars" />
    </button>
    <!-- Brand -->
    <a use:link class="flex items-center text-left md:pb-2 text-slate-600 mr-0 whitespace-nowrap text-sm uppercase font-bold p-4 px-0" href="/"> 
      <img src="/assets/svelte.png" alt="Home" class="w-10 h-10 p-2 rounded-full shadow-md hover:shadow-lg bg-white dark:bg-slate-700 mr-3">
      <span class="logo-text">Admin Svelte</span> 
    </a>
    <!-- User -->
    <ul class="md:hidden items-center flex flex-wrap list-none">
      <li class="inline-block relative">
        <NotificationDropdown />
      </li>
      <li class="inline-block relative">
        <UserDropdown />
      </li>
    </ul>
    <!-- Collapse -->
    <div class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden md:h-auto h-full items-center flex-1 rounded absolute {collapseShow}" class:absolute={!toggle_sidebar_mobile} class:fixed={toggle_sidebar_mobile}>
      <!-- Collapse header -->
      <div class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
        <div class="flex flex-wrap">
          <div class="w-6/12">
            <a use:link class="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0" href="/"> IntLight Svelte </a>
          </div>
          <div class="w-6/12 flex justify-end">
            <button type="button" class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" on:click={() => toggleCollapseShow('hidden')}>
              <i class="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
      <!-- Heading -->
      <h6 class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Admin Layout Pages</h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none">
        <li class="items-center">
          <a use:link href="/admin/dashboard" class="text-xs uppercase py-3 font-bold block {$location.indexOf('/admin/dashboard') !== -1 ? 'text-red-500 hover:text-red-600' : 'text-slate-700 hover:text-slate-500'}">
            <i class="fas fa-tv mr-2 text-sm {$location.indexOf('/admin/dashboard') !== -1 ? 'opacity-75' : 'text-slate-300'}" />
            Dashboard
          </a>
        </li>

        <li class="items-center">
          <a use:link href="/admin/settings" class="text-xs uppercase py-3 font-bold block {$location.indexOf('/admin/settings') !== -1 ? 'text-red-500 hover:text-red-600' : 'text-slate-700 hover:text-slate-500'}">
            <i class="fas fa-tools mr-2 text-sm {$location.indexOf('/admin/settings') !== -1 ? 'opacity-75' : 'text-slate-300'}" />
            Settings
          </a>
        </li>

        <li class="items-center">
          <a use:link href="/admin/tables" class="text-xs uppercase py-3 font-bold block {$location.indexOf('/admin/tables') !== -1 ? 'text-red-500 hover:text-red-600' : 'text-slate-700 hover:text-slate-500'}">
            <i class="fas fa-table mr-2 text-sm {$location.indexOf('/admin/tables') !== -1 ? 'opacity-75' : 'text-slate-300'}" />
            Tables
          </a>
        </li>

        <li class="items-center">
          <a use:link href="/admin/maps" class="text-xs uppercase py-3 font-bold block {$location.indexOf('/admin/maps') !== -1 ? 'text-red-500 hover:text-red-600' : 'text-slate-700 hover:text-slate-500'}">
            <i class="fas fa-map-marked mr-2 text-sm {$location.indexOf('/admin/maps') !== -1 ? 'opacity-75' : 'text-slate-300'}" />
            Maps
          </a>
        </li>
      </ul>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6 class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Auth Layout Pages</h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
        <li class="items-center">
          <a use:link class="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block" href="/admin/login">
            <i class="fas fa-fingerprint text-slate-300 mr-2 text-sm" />
            Login
          </a>
        </li>

        <li class="items-center">
          <a use:link class="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block" href="/admin/register">
            <i class="fas fa-clipboard-list text-slate-300 mr-2 text-sm" />
            Register
          </a>
        </li>
      </ul>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6 class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">No Layout Pages</h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
        <li class="items-center">
          <a use:link class="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block" href="/landing">
            <i class="fas fa-newspaper text-slate-300 mr-2 text-sm" />
            Landing Page
          </a>
        </li>

        <li class="items-center">
          <a use:link class="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block" href="/profile">
            <i class="fas fa-user-circle text-slate-300 mr-2 text-sm" />
            Profile Page
          </a>
        </li>
      </ul>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6 class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Documentation</h6>
      <!-- Navigation -->
      <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
        <li class="inline-flex">
          <a href="http://svelte01.IntLighttech.com/docs/colors" target="_blank" class="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold">
            <i class="fas fa-paint-brush mr-2 text-slate-300 text-base" />
            Styles
          </a>
        </li>

        <li class="inline-flex">
          <a href="http://svelte01.IntLighttech.com/docs/components" target="_blank" class="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold">
            <i class="fab fa-css3-alt mr-2 text-slate-300 text-base" />
            CSS Components
          </a>
        </li>

        <li class="inline-flex">
          <a href="https://svelte.dev/docs" target="_blank" class="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold">
            <i class="fab fa-link mr-2 text-slate-300 text-base" />
            Svelte
          </a>
        </li>

        <li class="inline-flex">
          <a href="https://vite-plugin-pwa.netlify.app/" target="_blank" class="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold">
            <i class="fas fa-link mr-2 text-slate-300 text-base" />
            Vite PWA
          </a>
        </li>

        <li class="inline-flex">
          <a href="https://windicss.org/" target="_blank" class="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold">
            <i class="fab fa-vuejs mr-2 text-slate-300 text-base" />
            WindiCSS
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
