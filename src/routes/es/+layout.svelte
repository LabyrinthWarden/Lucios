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
        alt="Restaurante Mexicano y Americano Lucio's"
        class="h-20 mx-auto"
      />
    </a>
  </div>
  <div class="grid gap-2 grid-cols-2 w-full h-full content-center bg-flag-red">
    <Icon src={DevicePhoneMobile} solid class="w-12 h-12 justify-self-end"
    ></Icon>
    <div class="justify-self-start">
      <a href="tel:5302831949"
        ><h6 class="uppercase">Llámanos</h6>
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
        <li><a href="/">Inicio</a></li>
        <li>
          <a href="/menu">Menú</a>
        </li>
        <!-- <li><a href="/about">Sobre Nosotros</a></li> -->
        <li><a href="tel:5302831949">530-283-1949</a></li>
        <li>
          <a href="https://maps.app.goo.gl/3Uh1LhDJCWmfg6Qz7" target="_blank">
            875 E Main St. Quincy, CA
          </a>
        </li>
        <li>
          <a href="/en/{urlAfterLang}" class="btn btn-info">Switch to English</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="navbar-center md:hidden">
    <img
      src={logo}
      alt="Restaurante Mexicano y Americano Lucio's"
      class="h-20 md:hidden z-10"
    />
  </div>
  <div class="navbar-end text-xs md:hidden"></div>

  <!-- Navbar Larger Screens -->
  <div class="navbar-start hidden md:flex"></div>
  <div class="navbar-center hidden md:flex">
    <ul
      class="menu menu-horizontal px-1 header-text-bold text-2xl mx-auto uppercase"
    >
      <li><a href="/es">Inicio</a></li>
      <li>
        <a href="/es/menu">Menú</a>
      </li>
      <!-- <li><a href="/about">Sobre Nosotros</a></li> -->
    </ul>
  </div>
  <div class="navbar-end hidden md:flex">
    <a href="/en/{urlAfterLang}" class="btn btn-info">Switch to English</a>
  </div>
</div>

<div class="wrapper">
  <slot></slot>
</div>

<footer
  class="footer footer-center bg-flag-green text-neutral-content p-10 bottom-0"
>
  <aside>
    <img src={logo} class="w-48" alt="El logotipo de Lucio" />
    <p class="font-bold">
      <!-- Lucio's -->
      <br />
      Ofreciendo excelente comida mexicana, estadounidense y china desde el año 2007.
    </p>
    <p>
      Derechos de autor © {new Date().getFullYear()} - Reservados todos los derechos
    </p>
  </aside>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          ></path>
        </svg>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          ></path>
        </svg>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          ></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
