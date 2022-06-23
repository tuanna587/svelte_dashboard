<script>
  import { link } from 'svelte-spa-router';
</script>

<!-- HEADER -->
<div class="relative bg-indigo-700">
  <div class="absolute inset-x-0 bottom-0">
    <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white dark:text-slate-900 fill-current" preserveAspectRatio="none">
      <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
    </svg>
  </div>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
      <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
        The quick, brown fox<br class="hidden md:block" />
        jumps over a
        <span class="relative inline-block px-2">
          <div class="absolute inset-0 transform -skew-x-12 bg-amber-300" />
          <span class="relative text-fuchsia-700">lazy dog</span>
        </span>
      </h2>
      <p class="mb-6 text-base text-indigo-100 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo. Sed ut perspiciatis unde omnis.</p>
      <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
        <input placeholder="Email" required="" type="text" class="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-whie focus:border-teal-700 focus:outline-none focus:shadow-outline" />
        <a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-400 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"> Subscribe </a>
      </form>
      <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      <a href="/" aria-label="Scroll down" class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-blue-300 hover:border-blue-300 hover:shadow hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </div>
  </div>
</div>
<div class="flex justify-center items-center">
  <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <!-- SECTION 1 -->
    <div role="main" class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
      <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
    </div>
    <div class="lg:flex items-stretch md:mt-12 mt-8">
      <div class="lg:w-1/2">
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div class="sm:w-1/2 relative">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="/blog/1" use:link class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full" alt="chair" />
          </div>
          <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="/blog/1" use:link class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/3C5HvxC/img-2.png" class="w-full" alt="wall design" />
          </div>
        </div>
        <div class="relative">
          <div>
            <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="/blog/1" use:link class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" class="w-full mt-8 md:mt-6 hidden sm:block" />
          <img class="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
        </div>
      </div>
      <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div class="relative">
          <div>
            <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="/blog/1" use:link class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full sm:block hidden" />
          <img class="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
        </div>
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div class="relative w-full">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="/blog/1" use:link class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full" alt="chair" />
          </div>
          <div class="relative w-full sm:mt-0 mt-4">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="/blog/1" use:link class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-I-svg1.svg" alt="arrow" />
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 2 -->
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">20 Nov 2020</p>
      <div class="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div class="mb-4">
          <a href="/" aria-label="Article" class="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700 sm:text-4xl"> The quick, brown fox jumps over a lazy dog </a>
        </div>
        <p class="text-base text-gray-700 dark:text-gray-400 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
      </div>
      <div class="mb-10 sm:text-center">
        <a href="/" aria-label="Author" class="inline-block mb-1">
          <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
        </a>
        <div>
          <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700">Vasile Melinte</a>
          <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
      <div class="sm:text-center">
        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-pink-800">Read more</a>
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="mb-10 border-t dark:border-gray-700 border-b divide-y dark:divide-gray-700">
        <div class="grid py-8 sm:grid-cols-4">
          <div class="mb-4 sm:mb-0">
            <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" class="transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category">Books</a>
              <p class="text-gray-600">5 Jan 2020</p>
            </div>
          </div>
          <div class="sm:col-span-3 lg:col-span-2">
            <div class="mb-3">
              <a href="/" aria-label="Article" class="inline-block text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">
                <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">Tell them I hate them</p>
              </a>
            </div>
            <p class="text-gray-700 dark:text-gray-400">Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows.</p>
          </div>
        </div>
        <div class="grid py-8 sm:grid-cols-4">
          <div class="mb-4 sm:mb-0">
            <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" class="transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category">Inspiration</a>
              <p class="text-gray-600">15 Sep 2020</p>
            </div>
          </div>
          <div class="sm:col-span-3 lg:col-span-2">
            <div class="mb-3">
              <a href="/" aria-label="Article" class="inline-block text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">
                <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">A flower in my green garden</p>
              </a>
            </div>
            <p class="text-gray-700 dark:text-gray-400">Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going.</p>
          </div>
        </div>
        <div class="grid py-8 sm:grid-cols-4">
          <div class="mb-4 sm:mb-0">
            <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a href="/" class="transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category">Detective</a>
              <p class="text-gray-600">28 Dec 2020</p>
            </div>
          </div>
          <div class="sm:col-span-3 lg:col-span-2">
            <div class="mb-3">
              <a href="/" aria-label="Article" class="inline-block text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">
                <p class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">We never had the love we deserve</p>
              </a>
            </div>
            <p class="text-gray-700 dark:text-gray-400">Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap.</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-400 hover:text-pink-800">
          See all articles
          <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
    <!-- SECTION 4 -->
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div class="p-8 bg-white dark:bg-slate-800 border dark:border-gray-700 rounded shadow-sm">
          <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a href="/" class="transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category">weekend</a>
            <span class="text-gray-600">— 1 Feb 2020</span>
          </p>
          <a href="/" aria-label="Article" title="Jingle Bells" class="inline-block mb-3 text-2xl font-bold leading-5 text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">Jingle Bells</a>
          <p class="mb-5 text-gray-700 dark:text-gray-400">Some pilots get picked and become television programs. Some don't, become nothing.</p>
          <div class="flex items-center">
            <a href="/" aria-label="Author" title="Author" class="mr-3">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 dark:text-indigo-400 transition-colors duration-200 hover:text-indigo-700">Vasile Melinte</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
        </div>
        <div class="p-8 bg-white dark:bg-slate-800 border dark:border-gray-700 rounded shadow-sm">
          <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a href="/" class="transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category">holidays</a>
            <span class="text-gray-600">— 15 Nov 2020</span>
          </p>
          <a href="/" aria-label="Article" title="Happy new Year" class="inline-block mb-3 text-2xl font-bold leading-5 text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">Happy new Year</a>
          <p class="mb-5 text-gray-700 dark:text-gray-400">Pommy ipsum smeg head whizz morris dancers come hither, bugger codswallop gob. Taking the mick middle class bog.</p>
          <div class="flex items-center">
            <a href="/" aria-label="Author" title="Author" class="mr-3">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 dark:text-indigo-400 transition-colors duration-200 hover:text-indigo-700">John Doe</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
        </div>
        <div class="p-8 bg-white dark:bg-slate-800 border dark:border-gray-700 rounded shadow-sm">
          <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a href="/" class="transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category">programming</a>
            <span class="text-gray-600">— 28 Dec 2020</span>
          </p>
          <a href="/" aria-label="Article" title="Why i love C++" class="inline-block mb-3 text-2xl font-bold leading-5 text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">Why i love C++</a>
          <p class="mb-5 text-gray-700 dark:text-gray-400">Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower.</p>
          <div class="flex items-center">
            <a href="/" aria-label="Author" title="Author" class="mr-3">
              <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 dark:text-indigo-400 transition-colors duration-200 hover:text-indigo-700">Andrew Larkin</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 5 -->
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div class="flex">
          <div class="pt-1 mr-6 text-center">
            <div class="px-2 pb-1 mb-1 border-b border-gray-400">
              <p class="text-sm text-blue-gray-700">Jul</p>
            </div>
            <div class="px-2"><p class="text-lg font-bold">18</p></div>
          </div>
          <div>
            <div class="mb-2">
              <a href="/" class="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category" title="Delevopment">Delevopment</a>
            </div>
            <div class="mb-2">
              <a href="/" aria-label="Article" class="inline-block text-2xl font-bold leading-5 text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">Why I love Laravel</a>
            </div>
            <p class="mb-5 text-gray-700 dark:text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" title="Author" class="mr-3">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
              </a>
              <div>
                <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700">Petru Vîrtos</a>
                <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="pt-1 mr-6 text-center">
            <div class="px-2 pb-1 mb-1 border-b border-gray-400">
              <p class="text-sm text-blue-gray-700">May</p>
            </div>
            <div class="px-2"><p class="text-lg font-bold">6</p></div>
          </div>
          <div>
            <div class="mb-2">
              <a href="/" class="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category" title="Food &amp; Snacks">Food &amp; Snacks</a>
            </div>
            <div class="mb-2">
              <a href="/" aria-label="Article" class="inline-block text-2xl font-bold leading-5 text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">Pizza, you should try it</a>
            </div>
            <p class="mb-5 text-gray-700 dark:text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" title="Author" class="mr-3">
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
              </a>
              <div>
                <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700">Alex Stratulat</a>
                <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="pt-1 mr-6 text-center">
            <div class="px-2 pb-1 mb-1 border-b border-gray-400">
              <p class="text-sm text-blue-gray-700">Feb</p>
            </div>
            <div class="px-2"><p class="text-lg font-bold">27</p></div>
          </div>
          <div>
            <div class="mb-2">
              <a href="/" class="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-indigo-400 hover:text-pink-800" aria-label="Category" title="Out of this world">Out of this world</a>
            </div>
            <div class="mb-2">
              <a href="/" aria-label="Article" class="inline-block text-2xl font-bold leading-5 text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">Whatever, just feed me</a>
            </div>
            <p class="mb-5 text-gray-700 dark:text-gray-400">Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.</p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" title="Author" class="mr-3">
                <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
              </a>
              <div>
                <a href="/" aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700">Susie the Cat</a>
                <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 6 -->
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-10 row-gap-8 lg:grid-cols-5">
        <div class="lg:col-span-2">
          <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">20 Nov 2020</p>
          <div class="mb-3">
            <a href="/" aria-label="Article" class="inline-block text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">
              <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">What it means when a man falls from outer space</p>
            </a>
          </div>
          <p class="mb-4 text-base text-gray-700 dark:text-gray-400 md:text-lg">Call it magical realism, call it realistic fantasy—call it whatever you want, but Arimah's playfully subversive style is wholly her own.</p>
          <div class="flex items-center">
            <a href="/" aria-label="Author" class="mr-3">
              <img alt="avatar" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
              <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700">Petru Vîrtos</a>
              <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-8 lg:col-span-3">
          <div>
            <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">14 Jul 2020</p>
            <div class="mb-3">
              <a href="/" aria-label="Article" class="inline-block text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">
                <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">Mascarpone cheese triangles taleggio</p>
              </a>
            </div>
            <p class="mb-4 text-base text-gray-700 dark:text-gray-400 md:text-lg">Brie cheese triangles cheesecake. Cauliflower cheese cheese and wine manchego bocconcini croque monsieur queso airedale brie.</p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" class="mr-3">
                <img alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
              </a>
              <div>
                <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700">Alex Stratulat</a>
                <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
              </div>
            </div>
          </div>
          <div>
            <p class="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">18 Mar 2020</p>
            <div class="mb-3">
              <a href="/" aria-label="Article" class="inline-block text-black dark:text-indigo-200 transition-colors duration-200 hover:text-indigo-700">
                <p class="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">The quick, brown fox jumps over a lazy dog</p>
              </a>
            </div>
            <p class="mb-4 text-base text-gray-700 dark:text-gray-400 md:text-lg">"A kitten, a nice little, sleek playful kitten, that I can play with, and teach, and feed--and feed--and feed!" I was not unprepared for this request, for I had noticed how his pets went on increasing in size.</p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" class="mr-3">
                <img alt="avatar" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" class="object-cover w-10 h-10 rounded-full shadow-sm" />
              </a>
              <div>
                <a href="/" aria-label="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700">Susie the Cat</a>
                <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION 7 -->
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="text-center">
          <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-indigo-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
          </div>
          <h6 class="text-4xl font-bold text-indigo-700">819</h6>
          <p class="mb-2 font-bold text-md">Downloads</p>
          <p class="text-gray-700 dark:text-gray-400">It’s something that’s many of the wisest people in history have kept in mind.</p>
        </div>
        <div class="text-center">
          <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-indigo-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
          </div>
          <h6 class="text-4xl font-bold text-indigo-700">1.3K</h6>
          <p class="mb-2 font-bold text-md">Users</p>
          <p class="text-gray-700 dark:text-gray-400">For many men, the acquisition of wealth does not end their troubles, it only changes them.</p>
        </div>
        <div class="text-center">
          <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-indigo-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
          </div>
          <h6 class="text-4xl font-bold text-indigo-700">91</h6>
          <p class="mb-2 font-bold text-md">Subscribers</p>
          <p class="text-gray-700 dark:text-gray-400">It's a helluva start, being able to recognize what makes you happy today, in this moment.</p>
        </div>
        <div class="text-center">
          <div class="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg class="w-8 h-8 text-indigo-700 sm:w-10 sm:h-10" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>
          </div>
          <h6 class="text-4xl font-bold text-indigo-700">52</h6>
          <p class="mb-2 font-bold text-md">Products</p>
          <p class="text-gray-700 dark:text-gray-400">Happiness is when what you think, what you say, and what you do are in harmony.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
