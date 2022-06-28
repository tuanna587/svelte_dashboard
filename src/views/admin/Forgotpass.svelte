<script>
  import { push, pop, replace, link } from 'svelte-spa-router';
  let bg_image2 = '/assets/img/pattern_svelte.png';
  function submitForgotpass() {
    return false;
  }
</script>

<div class="relative">
  <div class="absolute top-3 left-3">
    <a href="/" use:link class="rounded-full text-white overflow-hidden">
      <img src="/assets/svelte.png" alt="Home" class="w-10 h-10 p-2 rounded-full shadow-md hover:shadow-lg bg-gray-100 dark:bg-slate-700" />
    </a>
  </div>
  <div class="flex flex-col items-center justify-center min-h-screen w-full bg-slate-100">
    <div class="flex w-11/12 md:w-auto md:w-screen-md lg:w-screen-lg md:mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image:url({bg_image2})" />
      <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2 class="text-slate-400 text-lg mt-3 font-bold uppercase text-center">Svelte Admin</h2>
        <p class="text-sm text-center text-slate-500 dark:text-slate-200">Welcome back!</p>
        <div class="mt-4">
          <label class="block uppercase text-slate-600 text-xs font-bold mb-2" for="LoggingEmailAddress">Email / Phone</label>
          <input id="LoggingEmailAddress" class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="email" />
        </div>
        <div class="mt-5">
          <button class="signin-btn w-full text-white font-bold px-5 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" on:click={submitForgotpass}> Reset password </button>
        </div>
        <div class="signup flex items-center justify-center mt-4">
          <a href="/admin/auth/login" use:link class="text-xs text-slate-600 hover:text-slate-800 hover:underline">sign in</a> |
          <a href="/admin/auth/register" use:link class="text-xs text-slate-600 hover:text-slate-800 hover:underline">sign up</a>
        </div>
      </div>
    </div>
    <div class="text-center p-3 text-xs text-gray-300">
      Powered by <a href="https://IntLighttech.com/" target="_new">IntLighttech</a>
    </div>
  </div>
</div>
