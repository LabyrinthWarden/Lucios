<script>
  export let name = '';
  export let price = '';
  export let description = '';
  export let centered = false;

  export let classCentered = centered ? 'text-center' : '';
</script>

<div class="mx-4">
  <h4 class="text-[#7f1d1d] font-semibold text-xl {classCentered}">{name} {price}</h4>
  <p class="pr-5 {classCentered}">
    {description}
  </p>
</div>
