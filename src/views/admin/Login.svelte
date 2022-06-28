<script>
  import { push, pop, replace, link } from 'svelte-spa-router';
  import { initFirebase } from '@/services/firebase';
  import { onMount } from 'svelte';

  onMount(() => {});

  let bg_image2 = '/assets/img/pattern_svelte.png';
  function submitLogin() {
    // admin_logged_in.set(true);
    // push('/admin/dashboard');
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

        <div class="mt-4">
          <div class="flex justify-between">
            <label class="block uppercase text-slate-600 text-xs font-bold mb-2" for="loggingPassword">Password</label>
            <a href="." class="text-xs text-slate-500 dark:text-slate-300 hover:underline">Forget Password?</a>
          </div>

          <input id="loggingPassword" class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="password" />
        </div>

        <div class="mt-5">
          <button class="signin-btn w-full text-white font-bold px-5 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" on:click={submitLogin}> Login </button>
        </div>

        <div class="signin-other flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
          <span class="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or sign in with</span>
          <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
        </div>

        <a href="/admin/auth/login" on:click|preventDefault={() => initFirebase('facebook')} class="signin-facebook flex items-center justify-center mt-4 text-gray-600 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-600 shadow hover:shadow-lg ease-linear transition-all duration-150">
          <div class="px-4 py-2">
            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
          </div>
          <span class="w-5/6 px-4 py-3 text-xs md:text-md font-bold text-center">Sign in with Facebook</span>
        </a>

        <a href="/admin/auth/login" on:click|preventDefault={() => initFirebase('google')} class="signin-google flex items-center justify-center mt-4 text-gray-600 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-600 shadow hover:shadow-lg ease-linear transition-all duration-150">
          <div class="px-4 py-2">
            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
          </div>
          <span class="w-5/6 px-4 py-3 text-xs md:text-md font-bold text-center">Sign in with Google</span>
        </a>

        <div class="signup flex items-center justify-center mt-4">
          <a href="/admin/auth/register" use:link class="text-xs text-slate-600 hover:text-slate-800 hover:underline">sign up</a>
        </div>
      </div>
    </div>
    <div class="text-center p-3 text-xs text-gray-300">
      Powered by <a href="https://IntLighttech.com/" target="_new">IntLighttech</a>
    </div>
  </div>
</div>
