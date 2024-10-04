<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtons from '$lib/components/MenuNavButtons.svelte'

  import burritoImage from '$lib/assets/img/burrito.png'
  import molcajeteImage from '$lib/assets/img/molcajete.png'
  import pineappleImage from '$lib/assets/img/pineapple.png'
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h2 class="text-6xl title-text">Our Menu</h2>
</div>

<div class="carousel w-full mb-20">
  <!-- Menu Page Four -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <div class="grid md:grid-cols-2">
        <!-- Chinese Specialties Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader
            category="Chinese Specialties"
            categoryDescription="Served with steamed rice."
          />

          <div class="md:text-left">
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">Chow Mein</h4>
              <p class="">
                Chicken or Beef 14.95 <br />
                Shrimp or Seafood 15.95 <br />
                Vegetables 13.95 <br />
                Add extra vegetables 4.00
              </p>
            </div>
            <MenuItem name="Kung Pao Chicken" price="14.95" />
            <MenuItem
              name="Sweet and Sour"
              price="14.95"
              description="Chicken or Pork"
            />
            <MenuItem
              name="Lemon Chicken"
              price="14.95"
              description="Tuna salad with lettuce on white toast."
            />
            <MenuItem name="Beef Broccoli" price="14.95" />
          </div>
        </div>
        <!-- American Specialties Section -->
        <div class="mb-6 text-center">
          <div class="max-w-96 mx-auto">
            <MenuSectionHeader
              category="American Specialties"
              categoryDescription="Served with steamed vegetables, mashed potatoes, garlic toast, and soup or salad."
            />
          </div>
          <div>
            <MenuItem
              name="Chicken Fried Steak"
              price="20.95"
              description=" "
            />
            <MenuItem
              name="New York Steak"
              price="20.95"
              description="8 oz. steak"
            />
            <MenuItem
              name="Rib Eye Steak"
              price="27.95"
              description="12 oz. steak"
            />
            <MenuItem name="Pork Chops" price="20.95" />
          </div>
        </div>
      </div>

      <!-- Burritos Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Burritos"
          categoryDescription="Add Chili Verde or red sauce 2.00"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-1 md:text-left">
          <div>
            <MenuItem
              name="Burrito"
              price="13.95"
              description="Rice and beans with your choice of shredded beef, ground beef, or shredded chicken."
            />
            <MenuItem
              name="California Burrito"
              price="15.95"
              description="Carne asada, French fries, pico de gallo, cheese, and guacamole."
            />
            <MenuItem
              name="Breakfast Burrito"
              price="13.95"
              description="Ham, sausage, or bacon and choice of potatoes scrambled with eggs and cheese, topped with sour cream."
            />
            <MenuItem
              name="San Diego Burrito"
              price="15.95"
              description="Carne asada, guacamole, tomatoes, onions, and cilantro."
            />
          </div>
          <img
            src={burritoImage}
            alt="a burrito"
            class="hidden md:block mt-8 -ml-6 -z-10 scale-125"
          />
          <div>
            <MenuItem
              name="Giant Burrito"
              price="16.95"
              description="Rice, beans, with your choice of shredded chicken, ground beef, shredded beef, or pork.  Topped with red sauce, cheese, sour cream, and guacamole."
            />
            <MenuItem
              name="Chorizo Burrito"
              price="14.95"
              description="Chorizo scrambled with home fries, eggs, and cheese."
            />
            <MenuItem
              name="Chile Verde Burrito"
              price="16.95"
              description="Pork, rice, beans, and cheese, topped with Chile Verde sauce, sour cream, and guacamole."
            />
            <MenuItem
              name="Carne Asada or Carnitas Burrito"
              price="16.95"
              description="Rice, beans, cheese, and guacamole."
            />
          </div>
        </div>
      </div>

      <!-- Mexican Specialties Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Mexican Specialties"
          categoryDescription="Served with rice, beans, sour cream, and guacamole, with your choice flour or corn torillas."
        />
        <div class="grid md:grid-cols-2 gap-1 text-center md:text-left">
          <div>
            <MenuItem
              name="Lucio's Special"
              price="22.95"
              description="New York Steak & Chile Relleno."
            />
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">
                Sizzling Fajitas
              </h4>
              <p class="">
                Chicken or Beef 18.95 <br />
                Shrimp 19.95 <br />
                Sauteed with bell peppers, onions, and marinated in teriyaki sauce,
                topped with tomatoes.
              </p>
            </div>
            <MenuItem
              name="Steak Ranchero"
              price="17.95"
              description="Top sirlioin steak strips cooked with bell peppers, onions, tomatoes, and potatoes."
            />
            <MenuItem
              name="Carne Asada"
              price="17.95"
              description="Top sirloin steak topped with onions and bell peppers."
            />
            <MenuItem
              name="Camarones a la Diabla"
              price="17.95"
              description="Shrimp cooked in our homemade red sauce, choice of hot or mild."
            />
            <MenuItem
              name="Chile Colorado"
              price="17.95"
              description="Top sirloin steak strip cooked in our homemade red sauce, choice of hot or mild."
            />
            <MenuItem
              name="Carnitas"
              price="17.95"
              description="Homemade carnitas served with pico de gallo."
            />
            <MenuItem
              name="Camarones Rancheros"
              price="17.95"
              description="Shrimp cooked in pico de gallo."
            />

            <img
              src={molcajeteImage}
              alt="a molcajete dish"
              class="hidden place-self-center md:block ml-12 mt-4 -z-10"
            />
          </div>
          <div>
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">
                Hawaiian Fajita Plate
              </h4>
              <p class="">
                Chicken or Beef 20.95 <br />
                Shrimp 21.95 <br />
                Fresh pineapple bowl filled with grilled bell peppers, onions, and
                pineapples marinated in a teriyaki sauce and topped with your choice
                of grilled chicken, steak, or shrimp skewers.
              </p>
            </div>
            <MenuItem
              name="Grilled Tilapia"
              price="17.95"
              description="Topped with pico de gallo."
            />

            <MenuItem
              name="Pollo Fundido"
              price="17.95"
              description="Chicken and mushrooms simmered in our homemade red sauce, topped with Jack cheese."
            />
            <MenuItem
              name="Momias Camarones"
              price="18.95"
              description="Shrimp wrapped in bacon, cooked in our homemade red sauce with onions and bell peppers, topped with Jack cheese."
            />
            <MenuItem
              name="Mar y Tierra"
              price="22.95"
              description="New York steak served withj shrimp."
            />
            <MenuItem
              name="Molcajete"
              price="25.95"
              description="Grilled chicken, carne asada, chorizo, shrimp, Oaxaca cheese, and grilled onions and jalapeños."
            />
            <img
              src={pineappleImage}
              alt="pinapple fajitas dish"
              class="hidden md:block scale-75 ml-8 -mt-16 -z-10"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtons previousPageNum="3" nextPageNum="5" />
  </div>
</div>
