<script>
  import heroImage from '$lib/assets/img/hero.jpg'
  import { toast } from '@zerodevx/svelte-toast'
  import { onMount } from 'svelte'

  onMount(() => {
    toast.push(
      "Lucio's will be closed Thursday, October 31st through Monday, November 4th. We will resume normal operating hours starting on Tuesday, November 5th.",
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
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        We're a small family owned business with delicious Mexican, Chinese, and
        American food. We serve breakfast, lunch, and dinner all day.
      </p>
      <a href="/en/menu"
        ><button class="btn btn-success">See Our Menu</button></a
      >
      <p class="mt-5">
        We're open Tuesday through Saturday from 8 am to 9 pm, and Sundays from 8 am to 5 pm.
      </p>
    </div>
  </div>
</div>
