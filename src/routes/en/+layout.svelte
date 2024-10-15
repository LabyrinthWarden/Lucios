<script>
  import { Icon, MapPin, DevicePhoneMobile } from 'svelte-hero-icons'
  import logo from '$lib/assets/img/logo.jpg'

  import { page } from '$app/stores'
  $: urlAfterLang = $page.url.pathname.slice(4)
</script>

<!-- Title Bar -->
<div class="md:flex w-full h-20 text-white header-text-regular hidden">
  <div
    class="grid gap-2 grid-cols-2 w-full h-full content-center bg-flag-green"
  >
    <Icon src={MapPin} solid class="w-12 h-12 justify-self-end"></Icon>
    <a href="https://maps.app.goo.gl/3Uh1LhDJCWmfg6Qz7" target="_blank">
      <div class="justify-self-start">
        <span>875 E Main St.</span><br /><span>Quincy, CA</span>
      </div>
    </a>
  </div>
  <div class="w-full h-full">
    <a href="/">
      <img
        src={logo}
        alt="Lucio's Mexican and American Restaurant"
        class="h-20 mx-auto"
      />
    </a>
  </div>
  <div class="grid gap-2 grid-cols-2 w-full h-full content-center bg-flag-red">
    <Icon src={DevicePhoneMobile} solid class="w-12 h-12 justify-self-end"
    ></Icon>
    <div class="justify-self-start">
      <a href="tel:5302831949"
        ><h6 class="uppercase">Call Us</h6>
        <span>530-283-1949</span></a
      >
    </div>
  </div>
</div>

<!-- Navbar -->
<div
  class="navbar bg-neutral text-neutral-content h-20
"
>
  <!-- Navbar for Smaller Screens -->
  <div class="navbar-start bg-neutral text-neutral-content md:hidden">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase header-text-regular"
      >
        <li><a href="/en">Home</a></li>
        <li>
          <a href="/en/menu">Menu</a>
        </li>
        <li><a href="/en/about">About Us</a></li>
        <li><a href="tel:5302831949">530-283-1949</a></li>
        <li>
          <a href="https://maps.app.goo.gl/3Uh1LhDJCWmfg6Qz7" target="_blank">
            875 E Main St. Quincy, CA
          </a>
        </li>
        <li>
          <a href="/es/{urlAfterLang}" class="btn btn-info">Cambiar a Español</a
          >
        </li>
      </ul>
    </div>
  </div>

  <div class="navbar-center md:hidden">
    <a href="/">
      <img
        src={logo}
        alt="Lucio's Mexican and American Restaurant"
        class="h-20 md:hidden z-10"
      />
    </a>
  </div>
  <div class="navbar-end text-xs md:hidden"></div>

  <!-- Navbar Larger Screens -->
  <div class="navbar-start hidden md:flex"></div>
  <div class="navbar-center hidden md:flex">
    <ul
      class="menu menu-horizontal px-1 header-text-bold text-2xl mx-auto uppercase"
    >
      <li><a href="/en">Home</a></li>
      <li><a href="/en/menu">Menu</a></li>
      <li><a href="/en/about">About Us</a></li>
    </ul>
  </div>
  <div class="navbar-end hidden md:flex">
    <a href="/es/{urlAfterLang}" class="btn btn-info">Cambiar a Español</a>
  </div>
</div>
<div class="wrapper">
  <slot></slot>
</div>
<footer
  class="footer footer-center bg-flag-green text-neutral-content p-10 bottom-0"
>
  <aside>
    <img src={logo} class="w-48" alt="Lucio's Logo" />
    <p class="font-bold">
      <!-- Lucio's -->
      <br />
      Providing great Mexican, American, and Chinese food since 2007.
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
