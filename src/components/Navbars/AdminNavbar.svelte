<script>
  import UserDropdown from '@/components/Dropdowns/UserDropdown.svelte';
  import ThemeSwitcher from '@/components/ThemeSwitcher.svelte';
  import { link } from 'svelte-spa-router';
  import { hide_sidebar } from '@/stores.js';

  let hide_sidebar_value;

  hide_sidebar.subscribe((value) => {
    hide_sidebar_value = value;
    console.log('hide_sidebar_value', hide_sidebar_value);
  });

  function toggleSidebar() {
    hide_sidebar.set(!hide_sidebar_value);
  }
</script>

<!-- Navbar -->
<nav class="absolute top-0 left-0 w-full z-10 bg-transparent dark:bg-slate-900 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
  <div class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-5 px-3">
    <!-- Toggler -->
    <button class="md:flex hidden cursor-pointer text-black dark:text-red-600 opacity-50 dark:opacity-80 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" on:click={toggleSidebar}>
      <i class="fas fa-bars" />
    </button>
    <!-- Brand -->
    <a class="text-white dark:text-red-600 text-sm uppercase hidden lg:inline-block font-semibold" href="/admin" use:link> Dashboard </a>
    <!-- Form -->
    <form class="md:flex hidden flex-row flex-wrap items-center lg:mr-auto ml-3">
      <div class="relative flex w-full flex-wrap items-stretch">
        <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <i class="fas fa-search" />
        </span>
        <input type="text" placeholder="Search here..." class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10" />
      </div>
    </form>
    <!-- Theme switcher -->
    <div class="text-white text-sm uppercase hidden lg:inline-block font-semibold">
      <ThemeSwitcher />
    </div>
    <!-- User -->
    <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
      <UserDropdown />
    </ul>
  </div>
</nav>
<!-- End Navbar -->
