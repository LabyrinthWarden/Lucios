<script>
  import '../app.css'
  import { Icon, MapPin, DevicePhoneMobile } from 'svelte-hero-icons'
  import logo from '$lib/assets/img/logo.jpg'
</script>

<!-- Title Bar -->
<div class="md:flex w-full h-20 hidden text-white header-text-regular">
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
    <img
      src={logo}
      alt="Lucio's Mexican and American Restaurant"
      class="h-20 mx-auto"
    />
  </div>
  <div class="grid gap-2 grid-cols-2 w-full h-full content-center bg-flag-red">
    <Icon src={DevicePhoneMobile} solid class="w-12 h-12 justify-self-end"
    ></Icon>
    <div class="justify-self-start">
      <h6 class="uppercase">Call Us</h6>
      <span>530-283-1949</span>
    </div>
  </div>
</div>

<!-- Navbar -->
<div
  class="navbar bg-neutral text-neutral-content h-20
"
>
  <!-- Navbar for Smaller Screens -->
  <div class="navbar-start bg-neutral text-neutral-content md:hidden fixed">
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
        <li><a href="/">Home</a></li>
        <li>
          <a href="/menu">Menu & Pricing</a>
          <!-- <ul class="p-2">
            <li><a>Breakfast</a></li>
            <li><a>Lunch</a></li>
            <li><a>Mexican</a></li>
          </ul> -->
        </li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </div>
  </div>

  <img
    src={logo}
    alt="Lucio's Mexican and American Restaurant"
    class="h-20 mx-auto md:hidden z-10"
  />

  <!-- Navbar Larger Screens -->
  <div class="hidden md:flex w-full">
    <ul
      class="menu menu-horizontal px-1 header-text-bold text-2xl mx-auto uppercase"
    >
      <li><a href="/">Home</a></li>
      <li>
        <a href="/menu">Menu & Pricing</a>
        <!-- <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details> -->
      </li>
      <li><a href="/about">About Us</a></li>
    </ul>
  </div>
</div>

<slot></slot>
