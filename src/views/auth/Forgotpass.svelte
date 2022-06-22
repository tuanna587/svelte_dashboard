<script>
  import { link } from 'svelte-spa-router';
</script>

<div class="container mx-auto px-4 h-full">
  <div class="flex content-center items-center justify-center h-full">
    <div class="w-full lg:w-6/12 px-4">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
        <div class="rounded-t mb-0 px-6 py-6">
          <div class="text-center mb-3">
            <h6 class="text-slate-500 text-lg font-bold">Forgot password</h6>
          </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div class="text-slate-400 text-center mb-3 font-bold">
            <small>Enter your email and username to reset password</small>
          </div>
          <form>
            <div class="relative w-full mb-3">
              <label class="block uppercase text-slate-600 text-xs font-bold mb-2" for="grid-name"> Name </label>
              <input id="grid-name" type="email" class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Name" />
            </div>

            <div class="relative w-full mb-3">
              <label class="block uppercase text-slate-600 text-xs font-bold mb-2" for="grid-email"> Email </label>
              <input id="grid-email" type="email" class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
            </div>

            <div class="text-center mt-6">
              <button class="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"> Submit forgot password </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex flex-wrap mt-6 relative">
        <div class="w-1/2">
          <a href="/auth/login" use:link class="text-slate-200">
            <small>Login</small>
          </a>
        </div>
        <div class="w-1/2 text-right">
          <a use:link href="/auth/register" class="text-slate-200">
            <small>Create new account</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
