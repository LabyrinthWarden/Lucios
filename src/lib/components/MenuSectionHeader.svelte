<script>
  export let category = ''
  export let categoryDescription = ''

</script>

<h3
  class="w-full text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md"
>
  {category}
</h3>
<p class="mb-3 font-bold">
  {categoryDescription}
</p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-1">
  <slot />
</div>
