<script>
    // import { Router, Route } from 'svelte-spa-router';
    import {wrap} from 'svelte-spa-router/wrap';
    import Router, {location, link, querystring} from 'svelte-spa-router';

    // Admin Layout
    import Admin from '@/layouts/Admin.svelte';
    // Auth Layout
    import Auth from '@/layouts/Auth.svelte';

    // No Layout Pages
    import Index from '@/views/Index.svelte';
    import Landing from '@/views/Landing.svelte';
    import NotFound from '@/views/NotFound.svelte';

    const routes = {
      '/': Index,
      '/landing': Landing,
      '/profile': wrap({
          asyncComponent: () => import('@/views/Profile.svelte'),
      }),
      '/auth/*': wrap({
          asyncComponent: () => import('@/layouts/Auth.svelte')
      }),
      '/admin/*': wrap({
          asyncComponent: () => import('@/layouts/Admin.svelte')
      }),

      // Catch-all route last
      '*': NotFound,
  }
  </script>
<main>
  <Router routes={routes} />

</main>
