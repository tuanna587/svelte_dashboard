<script>
  // import { Router, Route } from "svelte-spa-router";
  import { wrap } from 'svelte-spa-router/wrap';
  import Router, { location, link, querystring } from 'svelte-spa-router';

  // components for this layout
  import AuthNavbar from '@/components/Navbars/AuthNavbar.svelte';
  import FooterSmall from '@/components/Footers/FooterSmall.svelte';

  const registerBg2 = '/assets/img/register_bg_2.png';
  const routes = {
    '/auth/login': wrap({
      asyncComponent: () => import('@/views/auth/Login.svelte'),
    }),
    '/auth/register': wrap({
      asyncComponent: () => import('@/views/auth/Register.svelte'),
    }),
    '/auth/forgotpass': wrap({
      asyncComponent: () => import('@/views/auth/Forgotpass.svelte'),
    }),
  };
</script>

<div>
  <AuthNavbar />
  <main>
    <section class="relative w-full h-full py-40 min-h-screen">
      <div class="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full" style="background-image: url({registerBg2});" />
      <Router {routes} />
      <FooterSmall absolute={true} />
    </section>
  </main>
</div>
