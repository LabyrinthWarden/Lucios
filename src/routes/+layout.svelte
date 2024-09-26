<script>
  import '../app.css'
  import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<div class="wrapper">
  <SvelteToast />
  <slot></slot>
</div>
