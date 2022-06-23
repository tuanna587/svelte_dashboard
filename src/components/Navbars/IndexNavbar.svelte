<script>
  import { link } from 'svelte-spa-router';

  import IndexDropdown from '@/components/Dropdowns/IndexDropdown.svelte';
  import ThemeSwitcher from "@/components/ThemeSwitcher.svelte";
  let navbarOpen = false;

  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
  }
</script>

<nav class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white dark:bg-slate-900 shadow">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a use:link class="text-slate-700 dark:text-slate-100 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="/"> Notus Svelte </a><a use:link class="text-slate-700 dark:text-slate-100 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="/profile"> Profile </a>
      <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" on:click={setNavbarOpen}>
        <i class="fas fa-bars" />
      </button>
    </div>
    <div class="lg:flex flex-grow items-center {navbarOpen ? 'block' : 'hidden'}" id="example-navbar-warning">
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center">
          <a class="hover:text-slate-500 text-slate-700 dark:text-slate-100 px-3 py-2 flex items-center text-xs uppercase font-bold" href="http://svelte01.IntLighttech.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index-navbar">
            <i class="text-slate-400 far fa-file-alt text-lg leading-lg mr-2" />
            Docs
          </a>
        </li>
      </ul>
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li class="flex items-center">
          <IndexDropdown />
        </li>
        <li class="flex items-center">
          <a class="hover:text-slate-500 text-slate-700 dark:text-slate-100 px-3 py-2 flex items-center text-xs uppercase font-bold" href="https://www.facebook.com/sharer/sharer.php?u=http://svelte01.IntLighttech.com" target="_blank">
            <i class="text-slate-400 fab fa-facebook text-lg leading-lg" />
            <span class="lg:hidden inline-block ml-2">Share</span>
          </a>
        </li>

        <li class="flex items-center">
          <a class="hover:text-slate-500 text-slate-700 dark:text-slate-100 px-3 py-2 flex items-center text-xs uppercase font-bold" href="https://twitter.com/intent/tweet?url=http://svelte01.IntLighttech.com" target="_blank">
            <i class="text-slate-400 fab fa-twitter text-lg leading-lg" />
            <span class="lg:hidden inline-block ml-2">Tweet</span>
          </a>
        </li>

        <li class="flex items-center">
          <a class="hover:text-slate-500 text-slate-700 dark:text-slate-100 px-3 py-2 flex items-center text-xs uppercase font-bold" href="https://github.com/tuanna587/svelte_dashboard" target="_blank">
            <i class="text-slate-400 fab fa-github text-lg leading-lg" />
            <span class="lg:hidden inline-block ml-2">Star</span>
          </a>
        </li>

        <li class="flex items-center">
          <ThemeSwitcher />
        </li>
        <li class="flex items-center">
          <a href="https://github.com/tuanna587/svelte_dashboard" class="bg-red-400 text-white active:bg-red-500 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150" type="button">
            <i class="fas fa-arrow-alt-circle-down" /> Download
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
