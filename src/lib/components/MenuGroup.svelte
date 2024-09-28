<script>
  export let category = ''
  export let categoryDescription = ''
  export let centered = true

  export let classCentered = centered ? 'text-center' : ''
</script>

<div class="mb-6">
  <h3
    class="w-full text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md {classCentered}"
  >
    {category}
  </h3>
  <p class="{classCentered} mb-3">
    {categoryDescription}
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-1 {classCentered}">
    <slot />
  </div>
</div>
