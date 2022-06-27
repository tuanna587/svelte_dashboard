<script>
  import { push, pop, replace, link } from 'svelte-spa-router';
  let bg_image = '/assets/img/login_bg_01.jpg';
  let bg_image2 = '/assets/img/pattern_svelte.png';
  function submitLogin() {
    push('/admin/dashboard');
  }
</script>

<div class="flex items-center justify-center min-h-screen w-full bg-slate-100">
  <div class="flex-1 flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
    <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image:url({bg_image2})" />
    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <h2 class="text-slate-400 text-lg mt-3 font-bold uppercase text-center">Svelte Admin</h2>
      <p class="text-sm text-center text-slate-500 dark:text-slate-200">Welcome to Admin</p>
      <div class="relative mt-4">
        <input type="text" id="floating_fullname" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " />
        <label for="floating_fullname" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Fullname</label>
      </div>
      <div class="relative mt-4">
        <input type="text" id="floating_email" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " />
        <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
      </div>
      <div class="relative mt-4">
        <input type="password" id="floating_password" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " />
        <label for="floating_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
      </div>
      <div class="relative mt-4">
        <input type="password" id="floating_password_confirm" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " />
        <label for="floating_password_confirm" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm Password</label>
      </div>
      <div class="mt-5">
        <button class="signin-btn w-full text-white font-bold px-5 py-3 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150" on:click={submitLogin}> Register </button>
      </div>

      <div class="signin-other flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
        <a href="." class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up with</a>
        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
      </div>

      <a href="." class="signin-facebook flex items-center justify-center mt-4 text-gray-600 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-600 shadow hover:shadow-lg ease-linear transition-all duration-150">
        <div class="px-4 py-2">
          <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
        </div>
        <span class="w-5/6 px-4 py-3 font-bold text-center">Sign up with Facebook</span>
      </a>

      <a href="." class="signin-google flex items-center justify-center mt-4 text-gray-600 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-slate-600 shadow hover:shadow-lg ease-linear transition-all duration-150">
        <div class="px-4 py-2">
          <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
        </div>
        <span class="w-5/6 px-4 py-3 font-bold text-center">Sign up with Google</span>
      </a>

      <div class="signup flex items-center justify-center mt-4">
        <a href="/admin/login" use:link class="text-xs text-slate-600 hover:text-slate-800 hover:underline">sign in</a>
      </div>
    </div>
  </div>
</div>
