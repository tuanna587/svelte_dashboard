<script lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/svelte';

  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(swr) {
      console.log('SW registered', swr);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  function close() {
    offlineReady.set(false);
    needRefresh.set(false);
  }

  $: toast = $offlineReady || $needRefresh;
</script>

<!-- {#if toast}
  <div class="pwa-toast" role="alert">
    <div class="message">
      {#if $offlineReady}
        <span> App ready to work offline </span>
      {:else}
        <span> New content available, click on reload button to update. </span>
      {/if}
    </div>
    {#if $needRefresh}
      <button on:click={() => updateServiceWorker(true)}> Reload </button>
    {/if}
    <button on:click={close}> Close </button>
  </div>
{/if} -->
{#if toast}
  <div class="pwa-toast bg-white fixed top-10 left-0 right-0 w-11/12 mx-auto py-3 px-5 rounded flex items-center justify-between shadow-xl">
    <div class="pwa-toast-logo"><img src="/assets/svelte.png" alt="svelte" class="w-10" /></div>
    <div class="pwa-toast-content">
      ⏰
      {#if $offlineReady}
        <b> App ready to work offline </b>
      {:else}
        <b> New content available, click on reload button to update. </b>
      {/if}
    </div>
    <div class="pwa-toast-right">
      {#if $needRefresh}
        <button on:click={() => {updateServiceWorker(true); close(); }} class="reload text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"> Reload </button>
      {/if}
      <button on:click={close} class="close ml-1 text-white font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 shadow-md"> Close </button>
    </div>
  </div>
{/if}

<style>
  .pwa-toast {
    z-index: 1000000;
  }
</style>
