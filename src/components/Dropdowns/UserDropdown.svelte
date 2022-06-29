<script>
  import { onMount } from 'svelte';
  import { createPopper } from '@popperjs/core';
  import adminAuthStore from '@/stores/adminAuth';
  import { push } from 'svelte-spa-router';
  import loadImage from '@/services/loadImage';
  import { clickOutside } from '@/libs/clickOutside';

  let dropdownPopoverShow = false;

  let btnDropdownRef;
  let popoverDropdownRef;
  let user = {
    fullname: 'Svelte PWA',
    avatar: '/assets/img/avatar_default.jpg',
    role: 'administrator',
    email: 'admin@admin.com',
    uid: '1',
  };
  clickOutside(popoverDropdownRef);

  adminAuthStore.subscribe(async (data) => {
    if (data.user !== null) {
      // console.log('data user', data);
      user.fullname = data.user.displayName;
      user.avatar = await loadImage(data.user.photoURL);
      user.email = data.user.email;
      user.uid = data.user.uid;
      // console.log('user', user);
    }
  });

  const toggleDropdown = (event) => {
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: 'top-start',
      });
    }
  };
  function logoutAdmin() {
    adminAuthStore.set({
      isLoggedIn: false,
      user: null,
    });
    push('/admin/auth/login');
  }

  function loadUserProfile() {}

  onMount(async () => {
    // let data = adminAuthStore.get();
    // if (data.user) {
    //   user.fullname = data.user.displayName;
    //   user.avatar = await loadImage(data.user.photoURL);
    //   user.email = data.user.email;
    //   user.uid = data.user.uid;
    // }
  });
</script>

<div class="dropdown">
  <a class="text-slate-500 block" href="#pablo" bind:this={btnDropdownRef} on:click={toggleDropdown}>
    <div class="items-center flex">
      <span class="w-12 h-12 md:w-8 md:h-8 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
        <img alt={user.fullname} class="w-full rounded-full align-middle border-none shadow-lg" src={user.avatar} />
      </span>
    </div>
  </a>
  <div bind:this={popoverDropdownRef} class="bg-white text-base z-50 float-left py-2 top-100 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block' : 'hidden'}">
    <div class="divide-y divide-gray-200 dark:divide-gray-600">
      <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div class="text-center font-bold">{user.fullname}</div>
        <div class="text-center font-medium truncate">{user.email}</div>
      </div>
      <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Profile </a>
    </div>
    <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Settings </a>
    <div class="divide-y divide-gray-200 dark:divide-gray-600">
      <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Change Password </a>
      <button on:click={logoutAdmin} class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"> Logout </button>
    </div>
  </div>
</div>
