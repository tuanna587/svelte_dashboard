<script>
  import { location } from 'svelte-spa-router';
  import Breadcrumb from '@/components/Breadcrumb.svelte';
  import CardTable from '@/components/Cards/CardTable.svelte';
import { escape } from 'svelte/internal';

  export let title;
  let breadcrumbs = [
    {
      title: title,
      link: $location,
    },
  ];
  let open = false;
  function toggleOpen() {
    open = !open;
  }  let inboxSidebarOpen = false;
  function toggleSidebar() {
    inboxSidebarOpen = !inboxSidebarOpen;
  }
</script>

<div class="td flex">
  <!-- Inbox sidebar -->
  <div id="inbox-sidebar" class="tp ny tk ty oq qb jj qn qr sp qq fe ws wf wc -translate-x-full" class:translate-x-0={inboxSidebarOpen} class:-translate-x-full={!inboxSidebarOpen}>
    <div class="tv np bg-white ct ce ta ap cj border-slate-200 qj tnu ox">
      <!-- #Marketing group -->
      <div>
        <div class="tv tk nv">
          <div class="flex items-center bg-white cx border-slate-200 mn op">
            <div class="oq flex items-center fg">
              <div class="td">
                <button class="ad flex items-center ci" aria-haspopup="true" on:click|preventDefault={toggleOpen} :aria-expanded="open" aria-expanded="false">
                  <img class="uu of rounded-full mr-2" src="images/user-avatar-32.png" width="32" height="32" alt="Group 01" />
                  <div class="ci"><span class="g_ text-slate-800">#Marketing</span></div>
                  <svg class="w-3 h-3 ap rq db yu" viewBox="0 0 12 12"> <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" /> </svg>
                </button>
                <div
                  class="am nv tp tq tb uz bg-white border border-slate-200 ms rounded by lq iu"
                  on:click|preventDefault={toggleOpen}
                  on:keydown|preventDefault={toggleOpen}
                  x-show="open"
                  x-transition:enter="wr wh wf fe"
                  x-transition:enter-start="opacity-0 aw"
                  x-transition:enter-end="bv ax"
                  x-transition:leave="wr wh wf"
                  x-transition:leave-start="bv"
                  x-transition:leave-end="opacity-0"
                  style="display: none;"
                >
                  <ul>
                    <li>
                      <a class="gk text-sm ys xy block ms me" href="#0" on:click={toggleOpen} on:focus={toggleOpen} on:focusout={toggleOpen}>
                        <div class="flex items-center fg">
                          <div class="ad flex items-center ci">
                            <img class="ul oh rounded-full mr-2" src="images/channel-01.png" width="28" height="28" alt="Channel 01" />
                            <div class="ci">#Marketing</div>
                          </div>
                          <svg class="w-3 h-3 ap db text-indigo-500 rq" viewBox="0 0 12 12"> <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" /> </svg>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="gk text-sm ys xy block ms me" href="#0" on:click={toggleOpen} on:focus={toggleOpen} on:focusout={toggleOpen}>
                        <div class="flex items-center fg">
                          <div class="ad flex items-center ci">
                            <img class="ul oh rounded-full mr-2" src="images/channel-02.png" width="28" height="28" alt="Channel 02" />
                            <div class="ci">#Developing</div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="gk text-sm ys xy block ms me" href="#0" on:click={toggleOpen} on:focus={toggleOpen} on:focusout={toggleOpen}>
                        <div class="flex items-center fg">
                          <div class="ad flex items-center ci">
                            <img class="ul oh rounded-full mr-2" src="images/channel-03.png" width="28" height="28" alt="Channel 03" />
                            <div class="ci">#ProductSupport</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button class="vp ap rounded border border-slate-200 hover--border-slate-300 bw r_"> <svg class="ue on db text-slate-500" viewBox="0 0 16 16"> <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" /> </svg> </button>
            </div>
          </div>
        </div>
        <div class="mn mr">
          <form class="td">
            <label for="inbox-search" class="tc">Search</label> <input id="inbox-search" class="tn oq mf kn" type="search" placeholder="Search…" />
            <button class="tp tm tg kp" type="submit" aria-label="Search">
              <svg class="ue on ap db yu kv ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" /> <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" /> </svg>
            </button>
          </form>
          <div class="td ij">
            <div class="tp ty oq ov hw" aria-hidden="true" />
            <ul class="td text-sm gk flex fp rl _u teo cn ta">
              <li class="ik last--mr-0 w_ jx ttc xt jk tth"><a class="block m_ text-indigo-500 co c_ hf" href="#0">Primary</a></li>
              <li class="ik last--mr-0 w_ jx ttc xt jk tth"><a class="block m_ text-slate-500 hover--text-slate-600 co" href="#0">Social</a></li>
              <li class="ik last--mr-0 w_ jx ttc xt jk tth"><a class="block m_ text-slate-500 hover--text-slate-600 co" href="#0">Promotions</a></li>
            </ul>
          </div>
          <div class="ij">
            <div class="gb g_ yu gq it">Inbox (44)</div>
            <ul class="rb">
              <li class="rv">
                <button class="flex oq vc rounded pi gh" on:click={toggleSidebar}>
                  <img class="uu of rounded-full mr-2" src="images/user-32-01.jpg" width="32" height="32" alt="User 01" />
                  <div class="ad ci">
                    <div class="flex items-center fg sc">
                      <div class="ci"><span class="text-sm g_ text-slate-800">Dominik Lamakani</span></div>
                      <div class="gb text-slate-500 gk">4 Aug</div>
                    </div>
                    <div class="gb gk text-slate-800 ci ib">Chill your mind with this amazing offer 🎉</div>
                    <div class="gb cs">Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                  </div>
                </button>
              </li>
              <li class="rv">
                <button class="flex oq vc rounded gh" on:click={toggleSidebar}>
                  <img class="uu of rounded-full mr-2" src="images/user-32-05.jpg" width="32" height="32" alt="User 05" />
                  <div class="ad ci">
                    <div class="flex items-center fg sc">
                      <div class="ci"><span class="text-sm g_ text-slate-800">Simona Lürwer</span></div>
                      <div class="gb text-slate-500 gk">4 Aug</div>
                    </div>
                    <div class="gb gk text-slate-800 ci ib">🙌 Help us improve Mosaic by giving…</div>
                    <div class="gb cs">Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                  </div>
                </button>
              </li>
              <li class="rv">
                <button class="flex oq vc rounded gh" on:click={toggleSidebar}>
                  <img class="uu of rounded-full mr-2" src="images/user-32-06.jpg" width="32" height="32" alt="User 05" />
                  <div class="ad ci">
                    <div class="flex items-center fg sc">
                      <div class="ci"><span class="text-sm g_ text-slate-800">Mary Roszczewski</span></div>
                      <div class="gb text-slate-500 gk">1 Aug</div>
                    </div>
                    <div class="gb gk text-slate-800 ci ib">[Urgent] Changes to links for public…</div>
                    <div class="gb cs">👋 Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                  </div>
                </button>
              </li>
              <li class="rv">
                <button class="flex oq vc rounded gh" on:click={toggleSidebar}>
                  <img class="uu of rounded-full mr-2" src="images/user-32-04.jpg" width="32" height="32" alt="User 05" />
                  <div class="ad ci">
                    <div class="flex items-center fg sc">
                      <div class="ci"><span class="text-sm g_ text-slate-800">Adrian Przetocki</span></div>
                      <div class="gb text-slate-500 gk">1 Aug</div>
                    </div>
                    <div class="gb gk text-slate-800 ci ib">🙌 Help us improve Mosaic by giving…</div>
                    <div class="gb cs">Lorem ipsum dolor sit amet, consecte adipiscing elit aute irure dolor…</div>
                  </div>
                </button>
              </li>
              <li class="rv">
                <button class="flex oq vc rounded gh" on:click={toggleSidebar}>
                  <img class="uu of rounded-full mr-2" src="images/user-32-02.jpg" width="32" height="32" alt="User 05" />
                  <div class="ad ci">
                    <div class="flex items-center fg sc">
                      <div class="ci"><span class="text-sm g_ text-slate-800">Tisha Yanchev</span></div>
                      <div class="gb text-slate-500 gk">1 Aug</div>
                    </div>
                    <div class="gb gk text-slate-800 ci ib">Re: Here’s an extra 25% OFF 🎉</div>
                    <div class="gb cs">Excepteur sint occaecat cupidatat non proident sunt in culpa qui deserunt…</div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Inbox body -->
  <div class="ad flex fh qq fe ws wl wc translate-x-0 {inboxSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'}">
    <div class="tv np">
      <div class="flex items-center fg hq cx border-slate-200 vd jd zx op">
        <div class="flex">
          <button class="qg yu xm mr-4" on:click={toggleSidebar} aria-controls="inbox-sidebar" :aria-expanded="inboxSidebarOpen" aria-expanded="false"> <span class="tc">Close sidebar</span> <svg class="ur oo db" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" /> </svg> </button>
          <button class="vp ap rounded bg-white border border-slate-200 hover--border-slate-300 bw r_"> <svg class="ue on db yu" viewBox="0 0 16 16"> <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" /> </svg> </button>
          <button class="vp ap rounded bg-white border border-slate-200 hover--border-slate-300 bw r_"> <svg class="ue on db ym" viewBox="0 0 16 16"> <path d="M10 5.934 8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" /> </svg> </button>
          <button class="vp ap rounded bg-white border border-slate-200 hover--border-slate-300 bw r_"> <svg class="ue on db yu" viewBox="0 0 16 16"> <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" /> </svg> </button>
          <button class="vp ap rounded bg-white border border-slate-200 hover--border-slate-300 bw r_"> <svg class="ue on db text-indigo-500" viewBox="0 0 16 16"> <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" /> </svg> </button>
        </div>
        <div class="flex items-center">
          <div class="gb mr-1"><span class="gk">10</span> <span class="text-slate-500">of</span> <span class="gk">467</span></div>
          <button class="vp ap rounded bg-white border border-slate-200 hover--border-slate-300 bw r_"> <svg class="ue on db" viewBox="0 0 16 16"> <path d="m10 13.4 1.4-1.4-4-4 4-4L10 2.6 4.6 8z" /> </svg> </button>
          <button class="vp ap rounded bg-white border border-slate-200 hover--border-slate-300 bw r_"> <svg class="ue on db" viewBox="0 0 16 16"> <path d="M7 13.4 5.6 12l4-4-4-4L7 2.6 12.4 8z" /> </svg> </button>
        </div>
      </div>
    </div>
    <div class="ad vd jd zx mr">
      <header class="_y je js rw">
        <h1 class="gy yt text-slate-800 font-bold rx _a r_">Chill your mind with this amazing offer 🎉</h1>
        <button class="gb inline-flex gk pn yd rounded-full gp vk mt co">Exciting news</button>
      </header>
      <div class="bg-white by rounded-sm border border-slate-200 vw lg lb">
        <div class="mu">
          <header class="flex fd">
            <img class="rounded-full ap rk" src="images/user-40-11.jpg" width="40" height="40" alt="User 11" />
            <div class="ad">
              <div class="_y fd fg ib">
                <div class="tnr items-center in _a">
                  <button class="text-sm g_ text-slate-800 gh ci" on:click|preventDefault={toggleOpen}>Dominik Lamakani</button>
                  <div class="text-sm yu hidden tnn ro" x-show="open" style="display: none;">·</div>
                  <div class="gb" x-show="open" style="display: none;">dominiklama@acme.com</div>
                </div>
                <div class="gb gk text-slate-500 co in _a">Sep 3, 3:18 PM</div>
              </div>
              <div class="gb gk text-slate-500" x-show="open" style="display: none;">To me, Carolyn</div>
              <div class="text-sm" x-show="!open">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…</div>
            </div>
          </header>
          <div class="text-sm text-slate-800 ij li" x-show="open" style="display: none;">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Consectetur adipiscing elit, sed do eiusmod aliqua? Check below:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>Cheers,</p>
            <p class="gk">Dominik Lamakani</p>
          </div>
        </div>
        <div class="mu">
          <header class="flex fd">
            <img class="rounded-full ap rk" src="images/user-avatar-80.png" width="40" height="40" alt="User 11" />
            <div class="ad">
              <div class="_y fd fg ib">
                <div class="tnr items-center in _a">
                  <button class="text-sm g_ text-slate-800 gh ci" on:click|preventDefault={toggleOpen}>Acme Inc.</button>
                  <div class="text-sm yu hidden tnn ro" x-show="open" style="display: none;">·</div>
                  <div class="gb" x-show="open" style="display: none;">acmeinc@acme.com</div>
                </div>
                <div class="gb gk text-slate-500 co in _a">Sep 3, 3:18 PM</div>
              </div>
              <div class="gb gk text-slate-500" x-show="open" style="display: none;">To me, Dominik</div>
              <div class="text-sm" x-show="!open">Dominik, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…</div>
            </div>
          </header>
          <div class="text-sm text-slate-800 ij li" x-show="open" style="display: none;">
            <p>Dominik, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Consectetur adipiscing elit, sed do eiusmod aliqua? Check below:</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>Cheers,</p>
            <p class="gk">Acme Inc.</p>
          </div>
        </div>
        <div class="mu">
          <header class="flex fd">
            <img class="rounded-full ap rk" src="images/user-40-11.jpg" width="40" height="40" alt="User 11" />
            <div class="ad">
              <div class="_y fd fg ib">
                <div class="tnr items-center in _a">
                  <button class="text-sm g_ text-slate-800 gh ci" on:click|preventDefault={toggleOpen}>Dominik Lamakani</button>
                  <div class="text-sm yu hidden tnn ro" x-show="open">·</div>
                  <div class="gb" x-show="open">dominiklama@acme.com</div>
                </div>
                <div class="gb gk text-slate-500 co in _a">Sep 4, 3:37 AM</div>
              </div>
              <div class="gb gk text-slate-500" x-show="open">To me, Carolyn</div>
              <div class="text-sm" x-show="!open" style="display: none;">Hey Acme 👋 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…</div>
            </div>
          </header>
          <div class="text-sm text-slate-800 ij li" x-show="open">
            <p>Hey Acme 👋</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <span class="bu">nostrud exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Consectetur adipiscing elit, sed do eiusmod <a class="gk text-indigo-500 xd" href="#0">tempor magna</a> aliqua? Check below:</p>
            <p><img src="images/inbox-image.jpg" alt="All" width="100" height="100"/></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>Cheers,</p>
            <p class="gk">Dominik Lamakani</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tv ty">
      <div class="flex items-center fg bg-white ck border-slate-200 vd jd zx op">
        <button class="ap yu xm rk"> <span class="tc">Add</span> <svg class="ur oo db" viewBox="0 0 24 24"> <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" /> </svg> </button>
        <form class="ad flex">
          <div class="ad rk"><label for="message-input" class="tc">Type a message</label> <input id="message-input" class="tn oq hy he kr kn" type="text" placeholder="Aa" /></div>
          <button type="submit" class="btn hb xs yo co">Send -&gt;</button>
        </form>
      </div>
    </div>
  </div>
</div>
