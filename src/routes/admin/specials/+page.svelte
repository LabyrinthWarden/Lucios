<script>
  import { supabaseClient } from '$lib/supabaseClient'
  /** @type {import('./$types').PageData} */
  export let data
  $: data.specials.active

  // Function to toggle the 'active' status
  async function toggleActive(id, currentStatus) {
    try {
      const { error } = await supabaseClient
        .from('specials')
        .update({ active: currentStatus })
        .eq('id', id)

      if (error) {
        console.error('Error updating special:', error)
        // Consider showing a user-friendly error message (e.g., with a toast notification)
        throw error // Re-throw the error to potentially handle it elsewhere
      }
    } catch (error) {
      console.error('Error in toggleActive:', error)
    }
  }
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h3 class="text-4xl title-text">Specials</h3>
</div>
<div class="grid max-w-screen">
  <table class="table table-auto">
    <thead
      ><tr
        ><th> Active </th>
        <th>Name (English)</th>
        <th>Name (Spanish)</th>
        <th>Price</th>
        <th>Description (English)</th>
        <th>Description (Spanish)</th>
        <th>Category</th>
      </tr></thead
    >
    <tbody>
      {#each data.specials as special}
        <tr
          ><th
            ><input
              type="checkbox"
              bind:checked={special.active}
              on:change={() => toggleActive(special.id, special.active)}
            /></th
          >
          <td>{special.nameEn}</td>
          <td>{special.nameEs}</td>
          <td>{special.price}</td>
          <td>{special.descriptionEn}</td>
          <td>{special.descriptionEs}</td>
          <td>{special.category}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
