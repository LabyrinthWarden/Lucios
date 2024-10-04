<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtons from '$lib/components/MenuNavButtons.svelte'

  import hamburgerImage from '$lib/assets/img/hamburger.png'
  import saladImage from '$lib/assets/img/salad.png'
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h2 class="text-6xl title-text">Our Menu</h2>
</div>

<div class="carousel w-full mb-20">
  <!-- Menu Page Two -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <div class="grid md:grid-cols-2">
        <!-- Chinese Specialties Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader
            category="Chinese Specialties"
            categoryDescription="Served with steamed rice."
          />

          <div>
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
            <MenuItem name="Bacon Cheeseburger" price="15.95" />
            <MenuItem
              name="Double Cheeseburger"
              price="19.99"
              description="Add bacon 2.00"
            />
            <MenuItem
              name="Hamburger"
              price="12.95"
              description="Add cheese 1.00"
            />
            <MenuItem name="Teriyaki Burger" price="15.95" />
            <MenuItem
              name="Chili Burger"
              price="15.95"
              description="Homemade chili topped with cheddar cheese and onions."
            />
            <MenuItem
              name="Teriyaki Chicken Burger"
              price="14.95"
              description="Chicken breast topped with grilled onions and mushrooms."
            />
          </div>
          <img
            src={hamburgerImage}
            alt="Burger and fries"
            class="hidden md:block mt-8 -ml-6 -z-10 scale-125"
          />
          <div>
            <MenuItem
              name="Western Burger"
              price="16.95"
              description="Pepper Jack cheese, bacon, and BBQ sauce, topped with an onion ring."
            />
            <MenuItem
              name="Fish Burger"
              price="14.95"
              description="Fried tilapia topped with lettuce, tomatoes, and onions."
            />
            <MenuItem
              name="Stuffed Burger"
              price="16.95"
              description="Stuffed with bacon, mushrooms, and Swiss cheese."
            />
            <MenuItem
              name="Pulled Pork Burger"
              price="14.95"
              description="BBQ pulled pork topped with onions rings and coleslaw."
            />
          </div>
        </div>
        <div
          class="border border-warning border-dashed rounded-2xl grid gap-1 md:grid-cols-3 py-5 mt-8 mx-10 min-h-20"
        >
          <div class="font-bold text-center col-span-full">
            <MenuSectionHeader
              categoryDescription="Served with steamed vegetables and your choice of mashed potatoes, fresh cut fries, or curly fries."
            />
          </div>
          <MenuItem
            name="French Dip"
            price="14.95"
            description="Sliced roast beef in a french roll."
          />
          <MenuItem
            name="Hot Roast Beef"
            price="15.95"
            description="Sliced roast beef served open-faced on white bread topped with brown gravy."
          />
          <MenuItem
            name="Hot Turkey"
            price="15.95"
            description="Sliced turkey served open-faced on white bread topped with turkey gravy"
          />
        </div>
      </div>

      <!-- Salads Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Salads"
          categoryDescription="Served with garlic toast and your choice of dressing."
        />
        <div class="grid md:grid-cols-2 gap-1 text-center md:text-left">
          <div>
            <MenuItem
              name="Grilled Cheese"
              price="10.95"
              description="Three pieces of whitew bread with American cheese."
            />
            <MenuItem
              name="Grilled Cheese and Tomatoes"
              price="12.95"
              description="Grilled tomatoes and American cheese on sourdough bread."
            />
            <img
              src={saladImage}
              alt="a cobb salad"
              class="hidden md:block scale-75 -ml-10 -mt-8 -z-10"
            />
          </div>
          <div>
            <MenuItem
              name="Monte Cristo"
              price="14.95"
              description="Ham, Swiss cheese, bacon, and tomatoes on Texas French Toast."
            />
            <MenuItem
              name="Philly Cheese Steak"
              price="15.95"
              description="Slices of roast beef, Swiss cheese, grilled onions, and bell peppers on a French roll"
            />
            <MenuItem
              name="New York Steak"
              price="20.95"
              description="New York Steak with grilled onions, lettuce, and tomatoes on a steak roll."
            />
            <MenuItem
              name="Tuna Melt"
              price="13.95"
              description="Tuna salad with American cheese on grilled sourdough."
            />
            <MenuItem
              name="Patty Melt"
              price="15.95"
              description="All beef patty, American cheese, and grilled onions on grilled rye."
            />
            <!-- Footnote -->
            <div class="mt-12 max-w-96">
              <p class="font-semibold text-error">
                Starting at 11 AM, first basket of chips and salsa per table are
                free. EXTRA basket of chips & salsa 3.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtons previousPageNum="2" nextPageNum="1" />
  </div>
</div>
