<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="p-10">
  <!-- Page Title -->
  <div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
    <h2 class="text-6xl title-text">Admin</h2>
  </div>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Active</th>
          <th>Name (English)</th>
          <th>Name (Spanish)</th>
          <th>Price</th>
          <th>Description (English)</th>
          <th>Description (Spanish)</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {#each data.specials as special}
          <tr class="hover">
            <th
              ><div class="form-control">
                <label class="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-primary"
                  />
                </label>
              </div></th
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
</div>
