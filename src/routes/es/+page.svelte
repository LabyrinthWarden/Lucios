<script>
  import heroImage from '$lib/assets/img/hero.jpg'
  import { toast } from '@zerodevx/svelte-toast'
  import { onMount } from 'svelte'

  onMount(() => {
    toast.push(
      "El nuevo sitio web de Lucio está en construcción. Vuelva a visitarnos pronto para ver las actualizaciones.",
      {
        // Effectively disables autoclose when `initial`==`next`
        initial: 0,

      }
    )
  })
</script>

<div class="hero min-h-screen" style="background-image: url({heroImage});">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hola</h1>
      <p class="mb-5">
        Somos una pequeña empresa familiar que ofrece deliciosa comida mexicana,
        china y estadounidense. Servimos desayuno, almuerzo y cena durante todo
        el día, de martes a domingo.
      </p>
      <a href="/es/menu"
        ><button class="btn btn-success">Vea Nuestro Menú</button></a
      >
      <p class="mt-5">
        We're open Tuesday through Saturday from 8 am to 9 pm, and Sundays from 8 am to 5 pm.
      </p>
    </div>
  </div>
</div>
