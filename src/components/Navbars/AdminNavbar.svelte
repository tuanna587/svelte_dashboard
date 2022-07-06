<script>
  import UserDropdown from '@/components/Dropdowns/UserDropdown.svelte';
  import ThemeSwitcher from '@/components/ThemeSwitcher.svelte';
  import { link } from 'svelte-spa-router';
  import { hide_sidebar, open_search } from '@/stores.js';

  let hide_sidebar_value;
  let open_search_value;

  hide_sidebar.subscribe((value) => {
    hide_sidebar_value = value;
  });
  open_search.subscribe((value) => {
    open_search_value = value;
  });

  function toggleSidebar() {
    hide_sidebar.set(!hide_sidebar_value);
  }
  function toggleSearch() {
    open_search.set(!open_search_value);
  }

</script>

<!-- Navbar -->
<nav class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
  <div class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-8 px-3">
    <!-- Toggler -->
    <button class="md:flex hidden cursor-pointer text-black dark:text-red-900 opacity-50 dark:opacity-80 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" on:click={toggleSidebar}>
      <i class="fa-solid" class:fa-toggle-off={!hide_sidebar_value} class:fa-toggle-on={hide_sidebar_value}></i>
    </button>
    <!-- Brand -->
    <a class="text-white dark:text-red-900 text-sm uppercase hidden lg:inline-block font-semibold" href="/admin/" use:link> Dashboard </a>
    <div class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
      <!-- Search -->
      <button class="p-2 bg-gray-700 bg-opacity-50 focus:bg-slate-500 focus:bg-opacity-50 rounded-full text-sky-400 h-8 w-8 shadow-lg font-normal flex items-center justify-center align-center outline-none focus:outline-none mr-2" type="button" on:click={toggleSearch}>
        <svg  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="pointer-events-none fill-white" xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"
            
          /></svg
        >
      </button>
      <!-- Theme switcher -->
      <div class="text-white text-sm uppercase hidden lg:inline-block font-semibold">
        <ThemeSwitcher icon_style='hasbg'/>
      </div>
    </div>

    <!-- User -->
    <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
      <UserDropdown />
    </ul>
  </div>
</nav>
<!-- End Navbar -->
