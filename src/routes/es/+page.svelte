<script>
  import heroImage from '$lib/assets/img/hero.jpg'
  import { toast } from '@zerodevx/svelte-toast'
  import { onMount } from 'svelte'

  onMount(() => {
    toast.push(
      // "¡Nuestro horario de invierno ha comenzado! Consulte a continuación nuestro horario actualizado y planifique su próxima visita.",
      "Estaremos cerrados el martes 24 de diciembre de 2024 y el miércoles 25 de diciembre de 2024 por Navidad. Volveremos a nuestro horario regular de invierno a partir del jueves 26 de diciembre de 2024. ¡Feliz Navidad!",
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
        el día.
      </p>
      <a href="/es/menu"
        ><button class="btn btn-success">Vea Nuestro Menú</button></a
      >
      <p class="mt-5">¡Venga a visitarnos este invierno! Estamos abiertos:</p>
      <ul>
        <li>Martes a sábado: 8am a 8pm</li>
        <li>Domingos: 8am a 4pm</li>
        <li>Cerrado los lunes</li>
      </ul>
    </div>
  </div>
</div>
