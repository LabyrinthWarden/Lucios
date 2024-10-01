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
      <!-- Sandwiches Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Sandwiches"
          categoryDescription="Served with coleslaw, salad, fresh cut fries, or curly fries."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 md:text-left">
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
            <MenuItem
              name="Grilled Ham and Cheese"
              price="12.95"
              description="Ham and American cheese on sourdough bread."
            />
            <MenuItem
              name="Chicken Salad Sandwich"
              price="12.95"
              description="Chicken salad with lettuce on a French roll."
            />
            <MenuItem
              name="Tuna Salad Sandwich"
              price="12.95"
              description="Tuna salad with lettuce on white toast."
            />
            <MenuItem
              name="Grilled Club"
              price="15.95"
              description="Ham, roast beef, roasted turkey, bacon, tomatoes, and American cheese on grilled sourdough bread."
            />
            <MenuItem
              name="Triple Decker Club"
              price="15.95"
              description="Ham, roasted turkey, bacon, and American cheese toasted white bread."
            />
            <MenuItem
              name="BLT"
              price="13.95"
              description="Bacon, lettuce, and tomatoes on white bread."
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
            <MenuItem
              name="Bagel"
              price="14.95"
              description="An everything bagel with one egg any style, American cheese, tomatoes, and onions. Choice of sausage patty, ham, or bacon."
            />
            <MenuItem
              name="Turkey Melt"
              price="14.95"
              description="Turkey, grilled onions, and tomatoes with Jack cheese and avacadoes on grilled rye bread."
            />
          </div>
        </div>
      </div>

      <!-- Burgers Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Burgers"
          categoryDescription="1/3 lb. all beef patty served with salad, fresh cut fries, or curly fries."
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
    <MenuNavButtons previousPageNum="1" nextPageNum="3" />
  </div>
</div>
