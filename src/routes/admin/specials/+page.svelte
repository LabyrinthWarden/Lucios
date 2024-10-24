<script>
    import { supabase } from '$lib/supabaseClient'
  /** @type {import('./$types').PageData} */
  export let data

  // Function to toggle the 'active' status
  async function toggleActive(id, currentStatus) {
    const { error } = await supabase
      .from('specials')
      .update({ active: !currentStatus }) 
      .eq('id', id); 

    if (error) {
      console.error('Error updating special:', error);
      console.log(id, currentStatus)
    }
  }
</script>

<div class="grid max-w-screen">
  <form action="?/updateActives">
    <table class="table">
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
            </tr
          >
        {/each}
      </tbody>
    </table>
  </form>
</div>
