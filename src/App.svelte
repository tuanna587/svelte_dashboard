<script>
  import { wrap } from 'svelte-spa-router/wrap';
  import Router, { location, link, querystring } from 'svelte-spa-router';

  // No Layout Pages
  import Index from '@/views/Index.svelte';
  import Landing from '@/views/Landing.svelte';
  import NotFound from '@/views/NotFound.svelte';
  import PWAReload from '@/components/PWAReload.svelte';

  const routes = {
    '/': Index,
    '/landing': Landing,
    '/profile': wrap({
      asyncComponent: () => import('@/views/Profile.svelte'),
    }),
    '/auth/*': wrap({
      asyncComponent: () => import('@/layouts/Auth.svelte'),
    }),
    '/admin/*': wrap({
      asyncComponent: () => import('@/layouts/Admin.svelte'),
    }),
    '/blog': wrap({
      asyncComponent: () => import('@/layouts/Blog.svelte'),
    }),
    '/blog/*': wrap({
      asyncComponent: () => import('@/layouts/Blog.svelte'),
    }),

    // Catch-all route last
    '*': NotFound,
  };
</script>
<PWAReload/>
<Router {routes} />
<p>The current page is: {$location}</p>
<p>The querystring is: {$querystring}</p>