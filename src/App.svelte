<script>
  import { wrap } from 'svelte-spa-router/wrap';
  import Router, { location, querystring } from 'svelte-spa-router';

  // No Layout Pages
  import Index from '@/views/Index.svelte';
  import Landing from '@/views/Landing.svelte';
  import NotFound from '@/views/NotFound.svelte';
  import PWAReload from '@/components/PWAReload.svelte';
  import authMiddleware from '@/middlewares/admin/authMiddleware';

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
      // Adding one pre-condition that's an async function
      conditions: [
        async (detail) => {
          // using multi middleware (conditions) to valid route
          return authMiddleware(detail.location);
        },
      ],
    }),
    '/blog': wrap({
      asyncComponent: () => import('@/layouts/Blog.svelte'),
    }),
    '/blog/*': wrap({
      asyncComponent: () => import('@/layouts/Blog.svelte'),
    }),
    '/page/*': wrap({
      asyncComponent: () => import('@/layouts/Page.svelte'),
    }),

    // Catch-all route last
    '/404': NotFound,
    '*': NotFound,
  };

  // Handles the "routeLoaded" event dispatched by the router when a component was loaded
  function routeLoaded(event) {
    console.log('routeLoaded event', event.detail);
  }
</script>

<PWAReload />
<Router {routes} on:routeLoaded={routeLoaded} />

