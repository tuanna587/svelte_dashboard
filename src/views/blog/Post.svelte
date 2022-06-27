<script>
  import { link } from 'svelte-spa-router';

  function popupCenter(url, width, height) {
    var leftPosition, topPosition;
    width = width == undefined ? 800 : width;
    height = height == undefined ? 480 : height;
    //Allow for borders.
    leftPosition = window.screen.width / 2 - (width / 2 + 10);
    //Allow for title and status bars.
    topPosition = window.screen.height / 2 - (height / 2 + 50);
    //Open the window.
    window.open(url, 'Window2', 'status=no,height=' + height + ',width=' + width + ',resizable=yes,left=' + leftPosition + ',top=' + topPosition + ',screenX=' + leftPosition + ',screenY=' + topPosition + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
  }
  function share(type) {
    let URLENCODED_URL = encodeURIComponent(location.href);
    let TITLE = '';
    switch (type) {
      case 'facebook':
        popupCenter('https://www.facebook.com/sharer/sharer.php?u=' + URLENCODED_URL + '&t=' + TITLE);
        break;
      case 'twitter':
        popupCenter('http://twitter.com/share?rl=' + URLENCODED_URL + '&text=' + TITLE);
        break;
    }
  }
  function savePost() {
    let local_post = localStorage.getItem('intlight-save-post');
    if (local_post) {
      try {
        local_post = JSON.parse(local_post);
        local_post.push(location.href);
      } catch (error) {
        console.log('fail to parse local_post', error.message);
      }
    }
  }
  function print() {}
  function comment() {}
</script>

<div>
  <div class=" px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg !pt-0">
    <div class="max-w-screen-md mx-auto ">
      <div class="text-center"><div><a href="/category/personal-growth"><span class="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-emerald-700">Personal Growth</span></a></div></div>
      <h1 class="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">10 Simple Practices That Will Help You Get 1% Better Every Day</h1>
      <div class="flex justify-center mt-3 space-x-3 text-gray-500 ">
        <div class="flex items-center gap-3">
          <div class="relative flex-shrink-0 w-10 h-10">
            <a href="/blog/author/1" use:link> <img alt="Erika Oliver" src="https://cdn.sanity.io/images/cijrdavx/production/4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format" class="object-cover w-10 h-10 rounded-full shadow-sm" /></a>
          </div>
          <div>
            <p class="text-gray-800 dark:text-gray-400">Erika Oliver</p>
            <div class="flex items-center space-x-2 text-sm"><time class="text-gray-500 dark:text-gray-400" datetime="2022-05-20T09:33:00Z">May 20, 2022</time><span>· 15 min read</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
    <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
      ><img
        alt="Thumbnail"
        sizes="100vw"
        srcset="https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=640&amp;q=75&amp;fit=clip&amp;auto=format 640w, https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=750&amp;q=75&amp;fit=clip&amp;auto=format 750w, https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=828&amp;q=75&amp;fit=clip&amp;auto=format 828w, https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=1080&amp;q=75&amp;fit=clip&amp;auto=format 1080w, https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=1200&amp;q=75&amp;fit=clip&amp;auto=format 1200w, https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=1920&amp;q=75&amp;fit=clip&amp;auto=format 1920w, https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=2048&amp;q=75&amp;fit=clip&amp;auto=format 2048w, https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format 3840w"
        src="https://cdn.sanity.io/images/cijrdavx/production/86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
        decoding="async"
        data-nimg="fill"
        style=""
      /></span
    >
  </div>
  <div class=" px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
    <article class="max-w-screen-md mx-auto relative">
      <div class="artilce-content relative flex">
        <div class="article-left w-[80px] my-3 relative">
          <ul class="social-pin sticky text-center left-0 top-10 hidden md:block">
            <li>
              <a class="p-2 bg-gray-300 bg-opacity-50 focus:bg-slate-700 hover:bg-slate-700 transition hover:text-white focus:bg-opacity-50 rounded-full text-black h-8 w-8 shadow-lg font-normal flex items-center justify-center align-center mt-2" href="https://www.facebook.com/ngayaybaygio" on:click|preventDefault={() => share('facebook')}>
                <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </a>
            </li>
            <li>
              <a href="http://twitter.com/midinthenight" on:click|preventDefault={() => share('twitter')} class="social-twitter p-2 bg-gray-300 bg-opacity-50 focus:bg-slate-700 hover:bg-slate-700 transition hover:text-white focus:bg-opacity-50 rounded-full text-black h-8 w-8 shadow-lg font-normal flex items-center justify-center align-center mt-2" data-type="tw" rel="nofollow" title="Share twitter">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  ><path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  /></svg
                >
              </a>
            </li>
            <li class="social-save-post p-2 bg-gray-300 bg-opacity-50 focus:bg-slate-700 hover:bg-slate-700 transition hover:text-white focus:bg-opacity-50 rounded-full text-black h-8 w-8 shadow-lg font-normal flex items-center justify-center align-center mt-2 flex flex-col" data-token="" data-article-id="" title="Save post" on:click={savePost}>
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" /></svg>
            </li>
            <li>
              <a href="." on:click={comment} class="social-comment p-2 bg-gray-300 bg-opacity-50 focus:bg-slate-700 hover:bg-slate-700 transition hover:text-white focus:bg-opacity-50 rounded-full text-black h-8 w-8 shadow-lg font-normal flex items-center justify-center align-center mt-2 relative" title="Comment">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z" /></svg>
                <span class="social-comment-count absolute top-[-5px] right-0 bg-red-700 focus:bg-red-500 focus:bg-opacity-50 rounded-full text-white p-1 text-[8px] mw-[16px]">5</span></a
              >
            </li>
            <li>
              <a href="." on:click={print} class="social-print p-2 bg-gray-300 bg-opacity-50 focus:bg-slate-700 hover:bg-slate-700 transition hover:text-white focus:bg-opacity-50 rounded-full text-black h-8 w-8 shadow-lg font-normal flex items-center justify-center align-center mt-2" title="In">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  ><path
                    d="M448 192H64C28.65 192 0 220.7 0 256v96c0 17.67 14.33 32 32 32h32v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h32c17.67 0 32-14.33 32-32V256C512 220.7 483.3 192 448 192zM384 448H128v-96h256V448zM432 296c-13.25 0-24-10.75-24-24c0-13.27 10.75-24 24-24s24 10.73 24 24C456 285.3 445.3 296 432 296zM128 64h229.5L384 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v128h64V64z"
                  /></svg
                >
              </a>
            </li>
            <li>
              <a href="/blog/category" use:link class="social-return p-2 bg-gray-300 bg-opacity-50 focus:bg-slate-700 hover:bg-slate-700 transition hover:text-white focus:bg-opacity-50 rounded-full text-black h-8 w-8 shadow-lg font-normal flex items-center justify-center align-center mt-2" title="Back to Category">
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" /></svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="article-right">
          <div class="ml-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
            <p>How do we become better every single day? We develop practices that will help move us incrementally forward. Small steps, taken consistently. This is the path to a good life.</p>
            <blockquote>
              “Seneca gives a pretty simple prescription for the good life. “Each day,” he wrote, “acquire something that will fortify you against poverty, against death, indeed against other misfortunes, as well and after you have run over many thoughts, select one to be thoroughly digested that day.” One gain per day. That’s it.”- <a
                href="https://forge.medium.com/all-you-need-are-a-few-small-wins-every-day-f1a6d2bf9fb3"
                target="_blank"
                rel="noopener">Ryan Holiday</a
              >
            </blockquote>
            <p>While routines can be important for consistency and productivity, what is even more important is our practices. These are things we do, no matter what our routine looks like, no matter if something comes up that derails us.</p>
            <p>But we need to start small and make sure our practices are sustainable. The idea is to take small but consistent steps, every single day — 1% improvement.</p>
            <blockquote>“Success is not a destination. Success is a decision you make on a daily, hourly, and even moment-to-moment basis.” — Nicolas Cole</blockquote>
            <p>Epictetus called this incremental action “fueling the habit bonfire.”</p>
            <p>Focus on the following 10 practices, and you will begin to see consistent improvement in your life.</p>
            <h2>1. Meditate</h2>
            <p>Meditation is number one for a reason.</p>
            <p>While I know we’ve all heard we should meditate, I truly believe it is key to moving forward every single day.</p>
            <p>Meditation provides stillness. It’s time alone with your breath and your body. It’s time to get to know yourself, to be aware of what is going on inside of you — both mentally and physically.</p>
            <p />
            <p>
              <img
                alt=" "
                sizes="(max-width: 800px) 100vw, 800px"
                srcset="https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=640&amp;q=75&amp;fit=clip&amp;auto=format 640w, https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=750&amp;q=75&amp;fit=clip&amp;auto=format 750w, https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=828&amp;q=75&amp;fit=clip&amp;auto=format 828w, https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=1080&amp;q=75&amp;fit=clip&amp;auto=format 1080w, https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=1200&amp;q=75&amp;fit=clip&amp;auto=format 1200w, https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=1920&amp;q=75&amp;fit=clip&amp;auto=format 1920w, https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=2048&amp;q=75&amp;fit=clip&amp;auto=format 2048w, https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format 3840w"
                src="https://cdn.sanity.io/images/cijrdavx/production/28c861b5f36dc477305307ea5697affbdd71cf1c-4500x3000.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
                decoding="async"
                data-nimg="responsive"
                style=""
              />
            </p>
            <p>Having this self-awareness is the first step toward growth. If you don’t know yourself, how can you expect to make meaningful progress?</p>
            <p>Develop a regular meditation practice by following <a href="https://12ft.io/proxy?ref=&amp;q=https://medium.com/change-your-mind/everyone-should-meditate-heres-the-single-reason-why-1f88186e4c5f" target="_blank" rel="noopener">these 4 steps</a>:</p>
            <ul>
              <li><strong>Start small:</strong> Aim for 5 minutes, or even just one minute if you think that’s all you can commit to. The idea is to commit to a length of time you can do consistently — ideally every single day.</li>
              <li><strong>Decide on a time of day to practice:</strong> Deciding on a time and doing your meditation at the same time each day makes it much more likely you’ll do it consistently.</li>
              <li><strong>Commit to this practice:</strong> While each session of meditation does produce benefits on its own, the real magic of meditation comes from consistent practice, and compounds over time.</li>
              <li><strong>Utilize supports:</strong> There are so many ways to support your practice. One of the most accessible supports is a meditation app. While using an app may not seem like “traditional” meditation, it can be incredibly helpful, especially when you’re starting out.</li>
            </ul>
            <h2>2. Journal</h2>
            <p>Building on the point above, time alone with your journal is time alone in stillness — a chance to get to know yourself on a deeper level, and to understand who you really are.</p>
            <p />
            <p>
              <img
                alt=" "
                sizes="(max-width: 800px) 100vw, 800px"
                srcset="https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=640&amp;q=75&amp;fit=clip&amp;auto=format 640w, https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=750&amp;q=75&amp;fit=clip&amp;auto=format 750w, https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=828&amp;q=75&amp;fit=clip&amp;auto=format 828w, https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=1080&amp;q=75&amp;fit=clip&amp;auto=format 1080w, https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=1200&amp;q=75&amp;fit=clip&amp;auto=format 1200w, https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=1920&amp;q=75&amp;fit=clip&amp;auto=format 1920w, https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=2048&amp;q=75&amp;fit=clip&amp;auto=format 2048w, https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format 3840w"
                src="https://cdn.sanity.io/images/cijrdavx/production/a41bf391d0cc8c5dc6116aaab574cc61b5ae1362-5472x3648.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
                decoding="async"
                data-nimg="responsive"
                style=""
              />
            </p>
            <p>Journaling allows you to reflect, to plan, to meditate on thoughts and ideas. To always be a better human than you were the day before. This is how you move forward every single day.</p>
            <p>You may find it helpful to bookend your day with journaling — having both a morning and evening practice.</p>
            <p>The stillness of the morning is the perfect time to reflect on your purpose, to consider your path, and to create a plan for the day.</p>
            <p>The end of the day is a great time to reflect on what went well during the day, what you could do differently tomorrow, and where you could be more — more loving, more patient, more valuable. You can reflect on whether you have lived in alignment with your values, and whether you fulfilled your purpose.</p>
            <p>Find a journaling template and mode that works for you. Maybe you like the traditional pen and paper. Maybe you prefer a document on your computer. Maybe you’d do best with a phone app. Find something that resonates with you, and stick with this practice.</p>
            <h2>3. Monitor your input and be grateful</h2>
            <p>What we allow into our minds is crucial.</p>
            <p>Therefore, being cognizant of your input in the morning is so important. Do you scroll on social media? Read the news? Read texts from your friends complaining about their life?</p>
            <p>Or do you listen to or read something positive and uplifting?</p>
            <p>This simple shift can make a huge difference in the trajectory of your day.</p>
            <p>The morning is also a great time to bring to mind all that you are grateful for, and to think of the joyful moments in your life. Think about the house you slept in, your friends and family that support you, and the fact that you woke up at all.</p>
            <p>We must always remind ourselves of the privilege of being alive, and be grateful for all that we have been given. Remind yourself of this when you wake up. Marcus Aurelius said,</p>
            <blockquote>“When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.”</blockquote>
            <p>If we view each day as a bonus day — to live, to love, to do the things we love to do — we can’t help but experience gratitude. Viewing each day in this way will ensure that you live your day mindfully.</p>
            <p>Be cognizant of your input beyond just the morning; throughout your entire day, it’s good to be aware of what you’re allowing into your mind.</p>
            <p>This is key to moving forward every single day — you can’t expect to improve and grow if you are constantly being held back by negative input.</p>
            <p>Similarly, regularly reminding yourself of everything you already have and cultivating a sense of gratitude will allow you to continue striving and growing, knowing that you already have enough and you are enough. You will always be enough.</p>
            <h2>4. Take 6000 steps every day</h2>
            <p>Moving your body is crucial.</p>
            <p>And walking may be the most important way to move our bodies. Think of how our ancestors lived — constantly foraging, hunting, and walking everywhere. This is how we have evolved to live.</p>
            <p>If we want to move forward, we need to take care of our bodies.</p>
            <p>But more than that, movement allows deep access into who we are; what it’s like to be in this body, right now. It’s a powerful form of meditation. You can’t help but feel the breath going in and out of your lungs. The sun on your skin. The grass beneath your feet. Movement forces you to be present in this moment, within yourself.</p>
            <p />
            <p>
              <img
                alt=" "
                sizes="(max-width: 800px) 100vw, 800px"
                srcset="https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=640&amp;q=75&amp;fit=clip&amp;auto=format 640w, https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=750&amp;q=75&amp;fit=clip&amp;auto=format 750w, https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=828&amp;q=75&amp;fit=clip&amp;auto=format 828w, https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=1080&amp;q=75&amp;fit=clip&amp;auto=format 1080w, https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=1200&amp;q=75&amp;fit=clip&amp;auto=format 1200w, https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=1920&amp;q=75&amp;fit=clip&amp;auto=format 1920w, https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=2048&amp;q=75&amp;fit=clip&amp;auto=format 2048w, https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format 3840w"
                src="https://cdn.sanity.io/images/cijrdavx/production/19832828476644b6146ef67a20459de18cd087c0-2942x1956.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
                decoding="async"
                data-nimg="responsive"
                style=""
              />
            </p>
            <p>Dr. Suhas Kshirsagar, author of “<a href="https://www.amazon.com/Change-Your-Schedule-Life-Optimize/dp/006268485X#:~:text=Blending%20ancient%20Ayurvedic%20wisdom%20with,your%20specific%20body%20type%2C%20Dr." target="_blank" rel="noopener">Change Your Schedule, Change Your Life</a>,” explains this well:</p>
            <blockquote>
              “Through exercise and movement, you breathe deeply and unblock the body’s channels…. It gives you energy, mental clarity, passion, and a general enthusiasm for life…. When you breathe deeply, you connect your heart and your brain instantly…. Conscious exercise puts your daily problems on the back burner and enlivens the heart and mind.… While it’s tempting to think of exercise solely
              as a means to fitness or weight loss, it’s really much more about making you feel alive in your body.”
            </blockquote>
            <p>Movement is therefore a tool to help you grow and move forward every single day.</p>
            <p>Your body will stay healthy, your mind will remain clear, you will have deeper access into who you are and improved clarity on where it is you want to go.</p>
            <p>We can’t expect to continue growing and moving forward if we don’t take care of our body and mind. Move every single day.</p>
            <h2>5. Get outside</h2>
            <p>Being in nature is connecting to the universe — the force greater than ourselves.</p>
            <p>Nature has been here far longer than us and will remain long after we’re gone. The trees you see have experienced far more than you. They have lived through some of the greatest hardships the world has faced. Nature has the capacity to connect us to all of history.</p>
            <p>Connecting to nature in this way reminds us of our tiny place in the universe and how little we really know. It puts things in perspective. It humbles us. We must respect nature, for these trees were here first, and they know much more than we do.</p>
            <p>
              I think we’ve all felt it, the sense of calm and contentment that comes from being among nature. Science even shows that looking at <a href="https://12ft.io/proxy?ref=&amp;q=https://medium.com/live-your-life-on-purpose/a-simple-hack-to-help-you-de-stress-right-now-ebaef01d40ee" target="_blank" rel="noopener">nature can instantly quieten our fight-or-flight response</a>. We inherently
              know that being in nature is good for us.
            </p>
            <p>But nature is also crucial for our health. <a href="https://chriskresser.com/go_outside/" target="_blank" rel="noopener">Chris Kresser</a> explains,</p>
            <blockquote>
              “Contact with nature is an integral part of our well-being as humans…. While we evolved outdoors and amongst nature for most of the last two million years of our species’ existence, the movement to a largely indoor environment has been a recent development for humans. Much like our diet, our physical environment has changed drastically in a comparatively short amount of time…. <strong
                >Our relationship with nature is a vital component of our wellbeing, and one often neglected due to the concerns of modern life. In order to more fully address our health and wellness as humans, we must consider the biological appropriateness of our environment to be just as important as that of our diet and exercise choices.</strong
              >”
            </blockquote>
            <p><a href="https://12ft.io/proxy?ref=&amp;q=https://medium.com/curious/this-little-known-concept-can-increase-your-well-being-7fd5905d940c" target="_blank" rel="noopener">Get outside every single day</a>. Prioritize time in nature. It will keep things in perspective while also boosting your wellbeing, allowing you to keep moving forward.</p>
            <h2>6. Read</h2>
            <blockquote>“Ordinary people seek entertainment. Extraordinary people seek education and learning…. It is common for the world’s most successful people to read at least one book per week. They are constantly learning.” — Benjamin Hardy, <em>How to Consciously Design Your Ideal Future</em></blockquote>
            <p>How often do you read?</p>
            <p>Hopefully, you make time to read every single day. Even if it’s just one page.</p>
            <p>Reading may be the most accessible tool available to us to help us grow. We can learn from anyone in the world, living or not. We can learn from those who have already achieved what we want to achieve. We can learn from others’ successes and mistakes.</p>
            <p>Being a perpetual student is key to moving forward. If you’re not constantly learning, how will you grow?</p>
            <p>Make reading a priority in your day. Spend 15 minutes in the morning reading a book. Download an audiobook for your commute. Read an article online during your lunch break. Just find the time to read.</p>
            <h2>7. Reflect and measure</h2>
            <p>We must always be reflecting on our lives and measuring the important metrics.</p>
            <p>With reflection, we can achieve anything. You try something, reflect on it, do more of what worked and less of what didn’t.</p>
            <p>This is how you will grow.</p>
            <p>A great way to do this is through bookending the day with journaling, as illustrated above. In the morning, write your plan for the day. In the evening, reflect on what worked and what you will do differently tomorrow. In just a few minutes each day, you can massively change your life for the better.</p>
            <p>Do this at the end of each week, month, quarter, and year. Growth will become inevitable.</p>
            <blockquote>“End your week holding a five-minute meeting with yourself and review what’s working and everything making you miserable. And do more of what works.” — <a href="https://12ft.io/proxy?ref=&amp;q=https://medium.com/p/95364dacd4d5" target="_blank" rel="noopener">Thomas Oppong</a></blockquote>
            <p>Similarly, keep track of the most important metrics of your life — how much weight you’re squatting, how many dates you went on with your partner each month, how many times you called your mom, how many days in a row you meditated. Identify what is most important to you, and keep track of it. You may be more off-course than you realize:</p>
            <blockquote>“If you’re not tracking the key areas of your life, than you’re probably more off-course than you think.” — Benjamin Hardy, <em>How to Consciously Design Your Ideal Future</em></blockquote>
            <h2>8. Eat well</h2>
            <p>We must always take care of our bodies.</p>
            <p>Without a body, we can not achieve anything. Your health must always come first. Running yourself into the ground will achieve nothing.</p>
            <p>Make sure you make the time to eat nourishing foods, and make sure you’re eating enough. Our bodies need fuel — good quality fuel:</p>
            <ul>
              <li><a href="https://12ft.io/proxy?ref=&amp;q=https://medium.com/in-fitness-and-in-health/how-much-protein-do-we-need-to-maximize-muscle-growth-c18f4d2f4562" target="_blank" rel="noopener">Eat adequate protein</a> (aim for 30g each meal)</li>
              <li>Eat loads of plants — vegetables, fruit, nuts, seeds</li>
              <li><a href="https://12ft.io/proxy?ref=&amp;q=https://medium.com/live-your-life-on-purpose/the-truth-about-coffee-1c362b2d260d" target="_blank" rel="noopener">Drink coffee</a> — it’s full of antioxidants (drink decaf if you don’t like caffeine, or black or green teas which have a smaller amount of caffeine)</li>
              <li>Avoid processed and refined foods</li>
              <li>Only eat what our cavemen ancestors would recognize</li>
            </ul>
            <h2>9. Incorporate hormetic stressors</h2>
            <p>If you want to become stronger and more resilient, you need to stress your body.</p>
            <p>And the best way to do this is through hormetic stressors.</p>
            <p>A hormetic stressor is something that, in a small dose makes you stronger, but in a big dose will kill you. Think cold, heat, fasting, and exercise.</p>
            <h2>10. Pay attention</h2>
            <p>You can learn a lot simply by paying attention.</p>
            <p>When people speak, really listen. They likely know at least a few things that you don’t, and the simple act of listening is a great way to learn and to improve yourself.</p>
            <p>I work with an older woman from Burundi, and until recently, I never really listened deeply to what she was saying. But the other day, I got myself into the present moment and really listened. And I learned that she has had a life like I could never imagine, and she holds so much wisdom and perspective.</p>
            <p>She told me, “My dad was killed in front of me when I was 15. Every day you have with your parents is a gift from God. Celebrate every day with them and never forget how lucky you are.”</p>
            <p>This was a great dose of perspective at 8am on a Wednesday morning.</p>
            <p>Furthermore, paying attention is one of the greatest gifts you can give someone. All anyone wants is to be listened to and understood. You have the power to change your own life, as well as the lives of those around you.</p>
            <p>This is how you will move forward every single day.</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-7 mb-7"><a class="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 " href="/blog/category" use:link>← View all posts</a></div>
      <div class="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <div class="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
          <div class="relative flex-shrink-0 w-24 h-24 mt-1 ">
            <a href="/blog/author/1" use:link> <img alt="Erika Oliver" src="https://cdn.sanity.io/images/cijrdavx/production/4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg?w=3840&amp;q=75&amp;fit=clip&amp;auto=format" class="object-cover w-24 h-24 rounded-full shadow-sm" /></a>
          </div>
          <div>
            <div class="mb-3"><h4 class="text-lg font-medium text-gray-800 dark:text-gray-300">About Erika Oliver</h4></div>
            <div><p>Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.</p></div>
          </div>
        </div>
      </div>
    </article>
  </div>
</div>
