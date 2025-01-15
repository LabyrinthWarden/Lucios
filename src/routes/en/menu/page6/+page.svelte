<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEn from '$lib/components/MenuNavButtonsEn.svelte'

  import xangosImage from '$lib/assets/img/xangos.png'
  import churrosImage from '$lib/assets/img/churros.png'
  import bananaSplitImage from '$lib/assets/img/banana-split.png'
  import milkshakeImage from '$lib/assets/img/milkshake.png'
  import pbChocolateCakeImage from '$lib/assets/img/peanut-butter-chocolate-cake.png'
  import chocolateChipMilkImage from '$lib/assets/img/chocolate-chip-and-milk-cake.png'
  import lemonRaspberryCheesecakeImage from '$lib/assets/img/lemon-raspberry-cheesecake.png'
  import chocolateCakeImage from '$lib/assets/img/chocolate-cake.png'
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page Six -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <div class="grid">
        <!-- Desserts Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader category="Desserts Menu" />
          <div class="grid gap-6 md:grid-cols-2 text-center md:text-left">
            <div class="grid text-center">
              <MenuItem name="Xangos" price="10.95"/>
              <img
                src={xangosImage}
                alt=""
                class="max-h-64 place-self-center"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="Churros" price="10.95"/>
              <img
                src={churrosImage}
                alt=""
                class="max-h-64 place-self-center"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="Banana Split" price="9.95"/>
              <img
                src={bananaSplitImage}
                alt=""
                class="max-h-64 max-w-96 place-self-center"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="Milkshake" price="8.95"/>
              <img
                src={milkshakeImage}
                alt=""
                class="max-h-64 place-self-center"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="Peanut Butter Chocolate Cake" price="10.95"/>
              <img
                src={pbChocolateCakeImage}
                alt=""
                class="max-h-64 place-self-center"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="Chocolate Chip Cookie and Milk Cake" price="10.95"/>
              <span class="text-[#7f1d1d] font-semibold text-sm italic">Currently Unavailable</span>
              <img
                src={chocolateChipMilkImage}
                alt=""
                class="max-h-64 place-self-center opacity-20"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="Lemon Raspberry Cheesecake" price="10.95"/>
              <img
                src={lemonRaspberryCheesecakeImage}
                alt=""
                class="max-h-64 place-self-center"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="Spoon Lovin' Chocolate Cake" price="10.95"/>
              <img
                src={chocolateCakeImage}
                alt=""
                class="max-h-64 place-self-center"
              />
            </div>
            <div class="grid text-center">
              <MenuItem name="MUFFINS" />
              <MenuItem price="4.50" />
              <br>
              <MenuItem name="Poppy Seed" />
              <MenuItem name="Blueberry" />
              <MenuItem name="Double Chocolate" />
              <MenuItem name="Apple Cinnamon" />
            </div>
            <div class="grid text-center">
              <MenuItem name="ICE CREAM" />
              <MenuItem name="Vanilla or Chocolate" />
              <MenuItem name="1 Scoop" price="2.00"/>
              <MenuItem name="2 Scoops" price="4.00"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtonsEn previousPageNum="5" nextPageNum="1" />
  </div>
</div>
