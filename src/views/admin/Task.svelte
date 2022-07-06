<script>
  import { link } from 'svelte-spa-router';

  const allElements = document.querySelectorAll('*:not([theme-button]):not([class*="gray"])');
  const themeButtons = document.querySelectorAll('[theme-button]');
  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const replaceAll = (str, term, replacement) => str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
  let currTheme = 'indigo';

  const changeTheme = (theme) => {
    allElements.forEach((element) => {
      if (element.getAttribute('class') !== null) {
        const newClasses = replaceAll(element.getAttribute('class'), currTheme, theme);
        element.setAttribute('class', newClasses);
      }
    });
    currTheme = theme;
  };

  themeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      changeTheme(e.target.getAttribute('theme-button'));
    });
  });
</script>

<div class="h-screen w-screen bg-indigo-400 overflow-hidden absolute flex items-center">
  <div class="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
  <div class="w-64 h-64 -mx-32 bg-indigo-300 opacity-50 rounded-full" />
  <div class="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-indigo-300 rounded-full" />
  <div class="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
</div>

<div class="container mx-auto h-screen py-16 px-8 relative">
  <div class="flex w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl">
    <div class="lg:w-1/2 bg-white text-gray-800 flex flex-col">
      <div class="p-8 shadow-md relative bg-white">
        <div class="flex items-center">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" class="w-10 h-10 block rounded object-cover object-top" />
          <div class="text-indigo-600 font-medium ml-3">Holden Caulfield</div>
          <button class="bg-indigo-100 text-indigo-400 ml-auto w-8 h-8 flex items-center justify-center rounded">
            <svg stroke="currentColor" class="w-4 h-4" viewBox="0 0 24 24" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" /></svg>
          </button>
        </div>
        <h1 class="font-medium text-lg mt-6">Contact List</h1>
        <p class="text-gray-600 text-sm">Fingerstache godard blog, cornhole meh hoodie</p>
        <div class="mt-6 flex">
          <button class="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none">New Contact</button>
          <button class="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">New Task</button>
          <div class="relative ml-auto flex-1 pl-8 sm:block hidden">
            <input placeholder="Search" type="text" class="w-full border rounded border-gray-400 h-full focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500" />
            <svg stroke="currentColor" class="w-4 h-4 absolute right-0 top-0 mt-3 mr-2 text-gray-500" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>
      <div class="overflow-auto flex-grow">
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Lucinda Massey</h2>
              <h3 class="text-gray-500 text-sm">Management Consultant</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-200 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" checked />
          <div class="flex ml-4">
            <img src="https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Willie Becker</h2>
              <h3 class="text-gray-500 text-sm">Business Manager</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://randomuser.me/api/portraits/women/63.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Sadie McDaniel</h2>
              <h3 class="text-gray-500 text-sm">Product Manager</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://pbs.twimg.com/profile_images/1157046181698011136/xZ4wg2Xj.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Maggie White</h2>
              <h3 class="text-gray-500 text-sm">Financial Analyst</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Phoebe Roy</h2>
              <h3 class="text-gray-500 text-sm">Financial Analyst</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Lucinda Massey</h2>
              <h3 class="text-gray-500 text-sm">Management Consultant</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Willie Becker</h2>
              <h3 class="text-gray-500 text-sm">Business Manager</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://randomuser.me/api/portraits/women/63.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Sadie McDaniel</h2>
              <h3 class="text-gray-500 text-sm">Product Manager</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://pbs.twimg.com/profile_images/1157046181698011136/xZ4wg2Xj.jpg" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Maggie White</h2>
              <h3 class="text-gray-500 text-sm">Financial Analyst</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
        <div class="bg-gray-100 px-8 py-6 flex items-center border-b border-gray-300">
          <input type="checkbox" />
          <div class="flex ml-4">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50" class="w-10 h-10 object-cover rounded object-top" />
            <div class="flex flex-col pl-4">
              <h2 class="font-medium text-sm">Phoebe Roy</h2>
              <h3 class="text-gray-500 text-sm">Financial Analyst</h3>
            </div>
          </div>
          <button class="text-gray-500 flex items-center text-sm focus:outline-none rounded ml-auto py-2 leading-none">
            <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
              />
            </svg>
            Edit
          </button>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 bg-indigo-600 text-white flex flex-col">
      <div class="p-8 bg-indigo-700 flex items-center">
        <img src="https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg" class="w-16 h-16 mr-4 object-top object-cover rounded" />
        <div class="mr-auto">
          <h1 class="text-xl leading-none mb-1">Willie Becker</h1>
          <h2 class="text-indigo-400 text-sm">Business Manager</h2>
        </div>
        <button class="bg-indigo-600 text-white py-2 text-sm px-3 rounded focus:outline-none">New Task</button>
      </div>
      <div class="p-8 flex flex-1 items-start overflow-auto">
        <div class="flex-shrink-0 text-sm sticky top-0">
          <div class="flex items-center text-white mb-3">Open <span class="italic text-sm ml-1 text-indigo-300">(10)</span></div>
          <div class="flex items-center text-indigo-300 mb-3">In Progress <span class="italic text-sm ml-1">(8)</span></div>
          <div class="flex items-center text-indigo-300">Closed <span class="italic text-sm ml-1">(4)</span></div>
        </div>
        <div class="flex-1 pl-10">
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Cronut distillery selfies, hella shabby chic</h3>
              <h4 class="text-xs text-indigo-300 italic">10 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Tumeric slow-carb polaroid pork</h3>
              <h4 class="text-xs text-indigo-300 italic">21 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Actually tbh godard try-hard jianbing vape</h3>
              <h4 class="text-xs text-indigo-300 italic">24 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Forage hell of knausgaard distillery everyday</h3>
              <h4 class="text-xs text-indigo-300 italic">38 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">DIY copper mug thundercats literally</h3>
              <h4 class="text-xs text-indigo-300 italic">38 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Cronut distillery selfies, hella shabby chic</h3>
              <h4 class="text-xs text-indigo-300 italic">10 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Tumeric slow-carb polaroid pork</h3>
              <h4 class="text-xs text-indigo-300 italic">21 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Actually tbh godard try-hard jianbing vape</h3>
              <h4 class="text-xs text-indigo-300 italic">24 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex mb-8">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">Forage hell of knausgaard distillery everyday</h3>
              <h4 class="text-xs text-indigo-300 italic">38 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div class="flex">
            <div class="w-4 h-4 flex-shrink-0 rounded-full border-indigo-400 border-2 mt-1 mr-2" />
            <div class="flex-grow">
              <h3 class="text-sm mb-1">DIY copper mug thundercats literally</h3>
              <h4 class="text-xs text-indigo-300 italic">38 min ago</h4>
            </div>
            <button class="text-indigo-300 flex-shrink-0 ml-2">
              <svg stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="fixed h-screen right-0 top-0 items-center flex">
  <div class="p-2 bg-white border-l-4 border-t-4 border-b-4 border-indigo-400 inline-flex items-center rounded-tl-lg shadow-2xl rounded-bl-lg z-10 flex-col">
    <button class="bg-gray-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="gray" />
    <button class="bg-red-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="red" />
    <button class="bg-orange-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="orange" />
    <button class="bg-green-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="green" />
    <button class="bg-teal-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="teal" />
    <button class="bg-blue-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="blue" />
    <button class="bg-indigo-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="indigo" />
    <button class="bg-purple-500 w-5 h-5 rounded-full mb-2 outline-none focus:outline-none" theme-button="purple" />
    <button class="bg-pink-500 w-5 h-5 rounded-full outline-none focus:outline-none" theme-button="pink" />
  </div>
</div>
