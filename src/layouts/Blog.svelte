<script>
  import { wrap } from 'svelte-spa-router/wrap';
  import Router, { location, link, querystring } from 'svelte-spa-router';
  import Gotop from '@/components/Gotop.svelte';
  import HeaderBlog from '@/components/Headers/HeaderBlog.svelte';
  import FooterBlog from '@/components/Footers/FooterBlog.svelte';

  const routes = {
    '/blog': wrap({
      asyncComponent: () => import('@/views/blog/Index.svelte'),
    }),
    '/blog/': wrap({
      asyncComponent: () => import('@/views/blog/Index.svelte'),
    }),
    '/blog/category': wrap({
      asyncComponent: () => import('@/views/blog/Category.svelte'),
    }),
    '/blog/:id': wrap({
      asyncComponent: () => import('@/views/blog/Post.svelte'),
    }),
  };
</script>

<div class="main-blog">
  <HeaderBlog />
  <Router {routes} />
  <Gotop />
  <FooterBlog />
</div>
