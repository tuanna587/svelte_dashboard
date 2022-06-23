<script>
  import { link } from "svelte-spa-router";
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";

  
  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;

  const toggleDropdown = (event) => {
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };
</script>

<div>
  <a
    class="hover:text-slate-500 text-slate-700 dark:text-slate-100 px-3 py-2 flex items-center text-xs uppercase font-bold"
    href="#pablo"
    bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}"
  >
    Demo Pages
  </a>
  <div
    bind:this="{popoverDropdownRef}"
    class="bg-white dark:bg-slate-700 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <span
      class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
    >
      Admin Layout
    </span>
    <a
      use:link
      href="/admin/dashboard"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Dashboard
    </a>
    <a
      use:link
      href="/admin/settings"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Settings
    </a>
    <a
      use:link
      href="/admin/tables"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Tables
    </a>
    <a
      use:link
      href="/admin/maps"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Maps
    </a>
    <div class="h-0 mx-4 my-2 border border-solid border-slate-100" />
    <span
      class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
    >
      Auth Layout
    </span>
    <a
      use:link
      href="/auth/login"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Login
    </a>
    <a
      use:link
      href="/auth/register"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Register
    </a>
    <div class="h-0 mx-4 my-2 border border-solid border-slate-100" />
    <span
      class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
    >
      No Layout
    </span>
    <a
      use:link
      href="/landing"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Landing
    </a>
    <a
      use:link
      href="/profile"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
    >
      Profile
    </a>
    <a
    use:link
    href="/blog"
    class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-slate-100"
  >
    Blog
  </a>
  </div>
</div>
