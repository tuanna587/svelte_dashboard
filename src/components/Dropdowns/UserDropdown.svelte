<script>
  import { createPopper } from '@popperjs/core';
  import { admin_logged_in } from '@/stores';
  import { push } from 'svelte-spa-router';
  const image = '/assets/img/team-1-800x800.jpg';

  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;
  let is_logged_in;

  admin_logged_in.subscribe((value) => {
    is_logged_in = value;
  });

  const toggleDropdown = (event) => {
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: 'bottom-start',
      });
    }
  };
  function logoutAdmin() {
    admin_logged_in.set(false);
    console.log('is_logged_in',is_logged_in);
    // push('/admin/login');
  }
</script>

<div>
  <a class="text-slate-500 block" href="#pablo" bind:this={btnDropdownRef} on:click={toggleDropdown}>
    <div class="items-center flex">
      <span class="w-12 h-12 md:w-8 md:h-8 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
        <img alt="..." class="w-full rounded-full align-middle border-none shadow-lg" src={image} />
      </span>
    </div>
  </a>
  <div bind:this={popoverDropdownRef} class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block' : 'hidden'}">
    <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Profile </a>
    <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Settings </a>
    <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Change Password </a>
    <div class="h-0 my-2 border border-solid border-slate-100" />
    <a href="/admin/logout" on:click|preventDefault={logoutAdmin} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Logout </a>
  </div>
</div>
