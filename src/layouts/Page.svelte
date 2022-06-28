<script>
  import { wrap } from 'svelte-spa-router/wrap';
  import Router, { location, link, querystring } from 'svelte-spa-router';
  import Gotop from '@/components/Gotop.svelte';
  import HeaderBlog from '@/components/Headers/HeaderBlog.svelte';
  import FooterBlog from '@/components/Footers/FooterBlog.svelte';

  const routes = {
    '/page': wrap({
      asyncComponent: () => import('@/views/page/Index.svelte'),
    }),
    '/page/:slug': wrap({
      asyncComponent: () => import('@/views/page/Content.svelte'),
    }),
  };
</script>

<div class="main-blog">
  <HeaderBlog />
  <Router {routes} />
  <Gotop />
  <FooterBlog />
</div>
