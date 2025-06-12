<script>
  // Component Imports
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEn from '$lib/components/MenuNavButtonsEn.svelte'

  // Image Imports
  import pancakeImage from '$lib/assets/img/pancakes.png'

  export let data

  // Destructure menuItems for easier access to make category arrays
  const { menuItems } = data

  // Create Category based arrays for easier page organization
  // These will only run once when the component is created.
  const threeEggOmelettes = menuItems.filter((item) => {
    return item.category === 'Three Egg Omelettes'
  })
  const americanFavorites = menuItems.filter((item) => {
    return item.category === 'American Favorites'
  })
  const otherAmericanFavorites = menuItems.filter((item) => {
    return item.category === 'Other American Favorites'
  })
  const skillets = menuItems.filter((item) => {
    return item.category === 'Skillets'
  })
  const biscuitsAndGravy = menuItems.filter((item) => {
    return item.category === 'Homemade Biscuits & Gravy'
  })
  const waffles = menuItems.filter((item) => {
    return item.category === 'Waffles'
  })
  const pancakes = menuItems.filter((item) => {
    return item.category === 'Pancakes'
  })
  const crepes = menuItems.filter((item) => {
    return item.category === 'Crepes'
  })
  const oatmeal = menuItems.filter((item) => {
    return item.category === 'Oatmeal'
  })
  const frenchToast = menuItems.filter((item) => {
    return item.category === 'French Toast'
  })
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page One -->
  <div id="page1" class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Omelettes Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Three Egg Omelettes" categoryDescription="Served with hash browns or home fries and a choice of toast or pancakes." />
        <div class="menu-container-2col">
          {#each threeEggOmelettes as item}
            <div class="menu-item">
              <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
            </div>
          {/each}
        </div>
      </div>
      <!-- American Favorites Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="American Favorites" categoryDescription="Served with hash browns or home fries and a choice of toast, biscuit, or pancakes." />

        <div class="menu-container-2col text-center mb-2">
          {#each americanFavorites as item}
            <div class="menu-item">
              <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
            </div>
          {/each}
        </div>
        <div>
          <!-- Other Favorites -->
          <div class="border border-warning border-dashed rounded-2xl col-span-full grid md:grid-cols-2 gap-1 py-5 md:mx-10 min-h-20">
            {#each otherAmericanFavorites as item}
              <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
            {/each}
          </div>
        </div>
      </div>

      <!-- Skillets Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Skillets" categoryDescription="With your choice of cheese. Served with a half order of biscuits and gravy." />
        <div class="menu-container-2col text-center mb-2">
          {#each skillets as item}
            <div class="menu-item">
              <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
            </div>
          {/each}
        </div>
      </div>
      <!-- B&G, Waffles and Pancakes Section -->
      <div class="grid md:grid-cols-3 mb-6 text-center md:text-left md:ml-6">
        <div class="">
          <MenuSectionHeader category="Homemade Biscuits & Gravy" />
          <div class="menu-container-1col mb-2">
            {#each biscuitsAndGravy as item}
              <div class="menu-item">
                <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
              </div>
            {/each}
          </div>

          <MenuSectionHeader category="Pancakes" />
          <div class="menu-container-1col mb-2">
            {#each pancakes as item}
              <div class="menu-item">
                <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
              </div>
            {/each}
          </div>
        </div>
        <img src={pancakeImage} class="hidden md:block" alt="" />
        <div class="">
          <MenuSectionHeader category="Waffles" />
          <div class="menu-container-1col mb-2">
            {#each waffles as item}
              <div class="menu-item">
                <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
              </div>
            {/each}
          </div>
        </div>
      </div>
      <!-- French Toast, Crepes and Oatmeal Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 mb-6 text-center md:text-left md:ml-6">
        <div>
          <MenuSectionHeader category="Crepes" />
          <div class="menu-container-1col mb-2">
            {#each crepes as item}
              <div class="menu-item">
                <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
              </div>
            {/each}
          </div>
          <div class="m-4 border mx-auto md:mx-0 border-warning border-dashed rounded-2xl max-w-96 text-center">
            {#each oatmeal as item}
              <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
            {/each}
          </div>
        </div>
        <div>
          <MenuSectionHeader category="French Toast" />
          <div class="menu-container-1col mb-2">
            {#each frenchToast as item}
              <div class="menu-item">
                <MenuItem name={item.nameEn} price={item.price} description={item.descriptionEn} />
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtonsEn previousPageNum="6" nextPageNum="2" />
  </div>
</div>

<style>
  .menu-container-1col {
    column-count: 1;
    column-gap: 1rem;
  }
  .menu-container-2col {
    column-count: 2;
    column-gap: 1rem;
  }

  .menu-item {
    /* This prevents a single menu item from breaking and splitting across columns */
    break-inside: avoid;
    margin-bottom: 0.25rem;
  }
</style>
