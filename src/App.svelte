<script>
  import { wrap } from 'svelte-spa-router/wrap';
  import Router from 'svelte-spa-router';

  // No Layout Pages
  import Index from '@/views/Index.svelte';
  import NotFound from '@/views/NotFound.svelte';
  import PWAReload from '@/components/PWAReload.svelte';
  import authMiddleware from '@/middlewares/admin/authMiddleware';

  const routes = {
    '/': Index,
    '/landing': wrap({
      asyncComponent: () => import('@/views/Landing.svelte'),
    }),
    '/profile': wrap({
      asyncComponent: () => import('@/views/Profile.svelte'),
    }),
    '/privacy': wrap({
      asyncComponent: () => import('@/views/Privacy.svelte'),
    }),
    '/auth/*': wrap({
      asyncComponent: () => import('@/layouts/Auth.svelte'),
    }),
    '/admin/*': wrap({
      asyncComponent: () => import('@/layouts/Admin.svelte'),
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

