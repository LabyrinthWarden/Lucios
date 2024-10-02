<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtons from '$lib/components/MenuNavButtons.svelte'
  import pancakeImage from '$lib/assets/img/pancakes.png'
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h2 class="text-6xl title-text">Our Menu</h2>
</div>

<div class="carousel w-full mb-20">
  <!-- Menu Page One -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Omelettes Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Three Egg Omelettes"
          categoryDescription="Served with hash browns or home fries and a choice of toast or pancakes."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
          <MenuItem
            name="Express"
            price="16.00"
            description="Italian sausage, mushrooms, tomatoes, spinach, Jack cheese, and a homemade salsa."
          />
          <MenuItem
            name="Seafood"
            price="16.50"
            description="A mix of sauteed shrimp, scallops, crab, and fish, Jack cheese, and topped with our creamy Hollandaise sauce."
          />
          <MenuItem
            name="Carne Asada"
            price="16.00"
            description="Grilled top sirloin steak, mushrooms, onions, bell peppers, Jack cheese, a side of pico, and topped with guacamole."
          />
          <MenuItem
            name="Spinach"
            price="16.50"
            description="Fresh spinach, mushrooms, and cream cheese."
          />
          <MenuItem
            name="Vegetarian"
            price="15.00"
            description="Grilled fresh vegetables with your choice of cheese."
          />
          <MenuItem
            name="Turkey"
            price="16.00"
            description="Pulled turkey, tomatoes, mushrooms, Jack cheese, and topped with our creamy Hollandaise sauce."
          />
          <MenuItem
            name="Denver"
            price="15.50"
            description="Ham, onions, bell peppers, and cheddar cheese."
          />
          <MenuItem
            name="Chili Bean"
            price="15.50"
            description="Our award-winning chili beans, topped with cheddar chees and onions."
          />
          <MenuItem
            name="California"
            price="15.50"
            description="Bacon, tomatoes, cheddar cheese, and topped with avocados."
          />
          <MenuItem
            name="Ham, Bacon, or Sausage"
            price="14.50"
            description="With choice of cheese and onions."
          />
        </div>
      </div>
      <!-- American Favorites Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="American Favorites"
          categoryDescription="Served with hash browns or home fries and a choice of toast, biscuit, or pancakes."
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 text-center">
          <MenuItem
            name="Steak"
            price="20.99"
            description="New Yor Steak served with two eggs."
          />
          <MenuItem
            name="Chicken Fried Steak"
            price="18.50"
            description="A golden-fried chopped beef steak served with two eggs."
          />
          <MenuItem
            name="Pork Chops"
            price="18.50"
            description="Two portk chops served with two eggs."
          />
          <MenuItem
            name="The House Favorite"
            price="14.95"
            description="Two eggs, with choice of bacon, hot sausage patty, sausage patty, sausage links, Italian sausage, linguica, or ham."
          />
          <MenuItem
            name="Veggie Mix"
            price="15.00"
            description="Fresh vegetables with mixed cheese."
          />
          <MenuItem
            name="Lite Breakfast"
            price="10.95"
            description="Choice of two pieces of bacon, two sausage links, or one sausage patty, served with one egg."
          />
          <MenuItem
            name="Corned Beef Hash"
            price="14.95"
            description="Our homemade corned beef hash served with two eggs."
          />
          <MenuItem name="Two Eggs" price="10.95" />
          <div
            class="border border-warning border-dashed rounded-2xl col-span-full grid md:grid-cols-2 gap-1 py-5 md:mx-10 min-h-20"
          >
            <MenuItem
              name="Country Style"
              price="15.95"
              description="Served with two eggs, choice of bacon or sausage, choice of has browns or home fries, and a half order of biscuits and gravy."
            />
            <MenuItem
              name="Eggs Benedict"
              price="15.99"
              description="Served with two poached eggs over ham on a toasted English muffin, topped with hollandaise sauce, and home fries or hash browns."
            />
          </div>
        </div>
      </div>

      <!-- Skillets Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Skillets"
          categoryDescription="With your choice of cheese. Served with a half order of biscuits and gravy."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 text-center">
          <MenuItem
            name="American"
            price="15.95"
            description="Ham, onions, bell peppers, scrambled with eggs. Served with hash browns."
          />
          <MenuItem
            name="Alambre"
            price="15.95"
            description="Asada, bacon, and chorizo with onions and bell peppers, topped with two eggs. Served with hash browns."
          />
          <MenuItem
            name="Linguica"
            price="15.99"
            description="Linguica mixed with bell peppers, onions, topped with two eggs. Served with home fries."
          />
          <MenuItem
            name="Prime Rib"
            price="16.99"
            description="Prime rib, onions, bell peppers, scrambled with two eggs. Served with has browns."
          />
        </div>
      </div>
      <!-- B&G, Waffles and Pancakes Section -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 mb-6 text-center md:text-left md:ml-6"
      >
        <div class="">
          <MenuSectionHeader category="Homemade Biscuits & Gravy" />
          <div class="mb-3">
            <MenuItem name="Full Order" price="9.99" />
            <MenuItem name="Half Order" price="6.99" />
          </div>

          <MenuSectionHeader category="Pancakes" />
          <div class="grid grid-cols-1 gap-1 mb-4">
            <MenuItem name="One Pancake" price="4.50" />
            <MenuItem name="Two Pancakes" price="7.99" />
            <MenuItem name="Three Pancakes" price="10.99" />
            <MenuItem
              name="Lumber Jack"
              price="14.99"
              description="Comes with three pancakes, three eggs, and your choice of three bacon or three sausages."
            />
          </div>
        </div>
        <img src={pancakeImage} class="hidden md:block" alt="" />
        <div class="">
          <MenuSectionHeader category="Waffles" />
          <p class="text-center mb-3"></p>
          <div class="grid grid-cols-1 gap-1">
            <div class="mx-4">
              <MenuItem name="Waffle" price="7.00" />
              <MenuItem
                name="Waffle Combo"
                price="14.99"
                description="Two eggs, with your choice of bacon or sausage."
              />
              <MenuItem
                name="Chicken and Waffles"
                price="15.99"
                description="Crispy chicken strips topped with gravy, two eggs, and a
                homemade waffle."
              />
            </div>
          </div>
        </div>
      </div>
      <!-- French Toast, Crepes and Oatmeal Section -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 mb-6 text-center md:text-left"
      >
        <div>
          <h3
            class="ml-5 text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md"
          >
            Crepes
          </h3>
          <MenuItem
            name="Fruit"
            price="12.99"
            description=" Strawberry or blue berry, with cream cheese."
          />
          <MenuItem
            name="Molly's"
            price="14.99"
            description="Bananas, strawberries, and Nutella"
          />
          <div
            class="m-4 border mx-auto md:mx-0 border-warning border-dashed rounded-2xl max-w-96 text-center"
          >
            <MenuItem name="Oatmeal" price="7.99" />
            <MenuItem
              name="Mexican Style Oatmeal"
              price="10.99"
              description="Served with milk, butter, and brown sugar."
            />
          </div>
        </div>
        <div>
          <MenuSectionHeader category="French Toast" />
          <MenuItem name="One French Toast" price="4.99" />
          <MenuItem name="Two French Toast" price="7.99" />
          <MenuItem name="Three French Toast" price="10.99" />
          <MenuItem
            name="Molly's French Toast"
            price="14.50"
            description="Two slices of French toast topped with Nutella, strawberries, and bananas."
          />
          <MenuItem
            name="French Toast Combo"
            price="14.99"
            description="Two slices of French toast, served with two eggs and two pieces of bacon or two sausages."
          />
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtons previousPageNum="3" nextPageNum="2" />
  </div>
</div>
