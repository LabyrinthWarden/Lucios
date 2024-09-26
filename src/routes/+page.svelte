<script>
  import heroImage from '$lib/assets/img/hero.jpg'
  import { toast } from '@zerodevx/svelte-toast'
  import { onMount } from 'svelte'

  onMount(() => {
    toast.push("Lucio's will be closed Friday, September 20th through Monday, September 23rd", {
      // Effectively disables autoclose when `initial`==`next`
      initial: 0,
      theme: {
        '--toastBackground': '#dc2626',
        '--toastBarHeight': 0
      }
    })
  })
</script>

<div class="hero min-h-screen" style="background-image: url({heroImage});">
  <div class="hero-overlay bg-opacity-90"></div>

  <div class="hero-content text-neutral-content text-center grid grid-cols-1">
    <h2 class="text-6xl title-text">Welcome to Lucio's</h2>
    <p class="subtitle-text">
      Please choose your language. | Por favor seleccione su idioma.
    </p>
    <div>
      <a href="/en"><button class="btn btn-success">English</button></a>
      <a href="/es"><button class="btn btn-success">Español</button></a>
    </div>
  </div>
</div>
