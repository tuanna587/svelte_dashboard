
<script>
    import { writable } from 'svelte/store';
    const { page } = stores();
    // $: {
    //   if (typeof gtag !== "undefined"){
    //     gtag("config", "UA-SOMEANALYTICSID-1", {
    //       page_path: $page.path
    //     });
    //   }
    // }
  </script>