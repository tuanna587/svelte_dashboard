<script>
  import { link } from 'svelte-spa-router';
  import ThemeSwitcher from "@/components/ThemeSwitcher.svelte";
  const toggleSearch = () => {
    document.getElementById('searchInput').classList.toggle('hidden');
  };
  const mdOptionsToggle = () => {
    document.getElementById('md-searchbar').classList.toggle('hidden');
    document.getElementById('md-searchbar').classList.toggle('flex');
  };
  const openMenu = () => {
    document.getElementById('mobile-menu').classList.remove('hidden');
  };
  const closeMenu = () => {
    document.getElementById('mobile-menu').classList.add('hidden');
  };
</script>

<!-- For md screen size -->
<div id="md-searchbar" class="bg-white dark:bg-slate-900 hidden lg:hidden py-5 px-6 items-center justify-between">
  <div class="flex items-center space-x-3 text-gray-800 dark:text-white">
    <div>
      <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg" alt="search" />
      <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg" alt="search" />
    </div>
    <input type="text" placeholder="Search for products" class="text-sm leading-none dark:text-gray-300 dark:bg-slate-900 text-gray-600 focus:outline-none" />
  </div>
  <div class="space-x-6">
    <button aria-label="view favourites" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
      <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg" alt="favourites" />
      <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg" alt="favourites" />
    </button>
    <button aria-label="go to cart" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
      <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg" alt="bag" />
      <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg" alt="bag" />
    </button>
  </div>
</div>
<!-- For md screen size -->

<!-- For large screens -->
<div class="dark:bg-slate-900 bg-gray-50 px-6 py-9">
  <div class="container mx-auto flex items-center justify-between">
    <a href="/" use:link class="md:w-2/12 cursor-pointer text-gray-800 dark:text-white uppercase font-extrabold">
      <h1 class="flex">
        <img class="dark:hidden h-8" src="/assets/svelte.png" alt="logo" />
        <img class="dark:block hidden h-8" src="/assets/svelte.png" alt="logo" />
        <span class="ml-3">Notus Svelte</span>
      </h1>
    </a>
    <ul class="hidden w-8/12 md:flex items-center justify-center space-x-8">
      <li>
        <a href="/blog" use:link class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Home</a>
      </li>
      <li>
        <a href="/blog/category" use:link class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Furniture</a>
      </li>
      <li>
        <a href="/blog/category" use:link class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Lookbook</a>
      </li>
      <li>
        <a href="/blog/category" use:link class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Support</a>
      </li>
    </ul>

    <div class="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
      <div class="hidden lg:flex items-center">
        <button on:click={toggleSearch} aria-label="search items" class="w-5 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
          <img class="transform rotate-90 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg" alt="search" />
          <img class="transform rotate-90 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg" alt="search" />
        </button>
        <input id="searchInput" type="text" placeholder="search" class="hidden text-sm dark:bg-slate-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1" />
      </div>
      <!-- <div class="hidden lg:flex items-center space-x-4 xl:space-x-8">
        <button aria-label="view favourites" class="w-6 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
          <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg" alt="favourites" />
          <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg" alt="favourites" />
        </button>
        <button aria-label="go to cart" class="w-6 text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
          <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg" alt="bag" />
          <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg" alt="bag" />
        </button>
      </div> -->

      <div class="flex lg:hidden order-2 md-order-1">
        <button aria-label="show options" on:click={mdOptionsToggle} class="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
          <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5.svg" alt="toggler" />
          <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg" alt="toggler" />
        </button>

        <button aria-label="open menu" on:click={openMenu} class="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
          <img class=" dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5.svg" alt="toggler" />
          <img class=" dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg5dark.svg" alt="toggler" />
        </button>
      </div>
      
      <div class="flex order-1 md-order-2"> 
        <ThemeSwitcher/>
      </div>
    </div>
  </div>
</div>
<!-- For small screen -->
<div id="mobile-menu" class="hidden absolute dark:bg-slate-900 z-10 inset-0 md:hidden bg-white flex flex-col h-screen w-full">
  <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
    <div class="flex items-center space-x-3">
      <div>
        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2.svg" alt="search" />
        <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg2dark.svg" alt="search" />
      </div>
      <input type="text" placeholder="Search for products" class="text-sm dark:bg-slate-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
    </div>

    <button class="focus:outline-none focus:ring-2 rounded focus:ring-gray-600" on:click={closeMenu}>
      <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg6.svg" alt="cross" />
      <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg6dark.svg" alt="cross" />
    </button>
  </div>
  <div class="mt-6 p-4">
    <ul class="flex flex-col space-y-6">
      <li>
        <a href="/blog" use:link class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
          Home
          <div>
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow" />
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow" />
          </div>
        </a>
      </li>
      <li>
        <a href="/blog/category" use:link class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
          Furniture
          <div>
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow" />
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow" />
          </div>
        </a>
      </li>
      <li>
        <a href="/blog/category" use:link class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
          Lookbook
          <div>
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow" />
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow" />
          </div>
        </a>
      </li>
      <li>
        <a href="/blog/category" use:link class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
          Support
          <div>
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7.svg" alt="arrow" />
            <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg7dark.svg" alt="arrow" />
          </div>
        </a>
      </li>
    </ul>
  </div>
  <!-- <div class="h-full flex items-end">
    <ul class="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
      <li>
        <a href="/blog" use:link class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
          <div>
            <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4.svg" alt="bag" />
            <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg4dark.svg" alt="bag" />
          </div>
          <p class="text-base">Cart</p>
        </a>
      </li>
      <li>
        <a href="/blog" use:link class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
          <div>
            <img class="w-5 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3.svg" alt="favourites" />
            <img class="w-5 dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/navigation-I-svg3dark.svg" alt="favourites" />
          </div>
          <p class="text-base">Wishlist</p>
        </a>
      </li>
    </ul>
  </div> -->
</div>
