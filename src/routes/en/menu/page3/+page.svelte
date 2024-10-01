<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtons from '$lib/components/MenuNavButtons.svelte'
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h2 class="text-6xl title-text">Our Menu</h2>
</div>

<div class="carousel w-full mb-20">
  <!-- Menu Page Three -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Mexican Favorites Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Mexican Favorites" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 md:text-left">
          <div>
            <MenuItem
              name="Papa con Chorizo"
              price="15.99"
              description="Homemade Mexican sausage scrambled with potatoes, served with two eggs, beans, and tow tortillas"
            />
            <MenuItem
              name="Huevos con Chorizo"
              price="15.99"
              description="Homemade sausage scrambled with eggs, onions, bell peppers, and cheese, "
            />
            <MenuItem
              name="Huevos Rancheros"
              price="14.99"
              description="Fried corn tortilla topped with eggs, onions, cilantro, homemade chili verde sauce or homemade vegetarian red sauce, and sour cream.  Served with rice, beans, and torillas."
            />
            <MenuItem
              name="Pozole"
              price="12.99"
              description="Our traditional homemade soup from Mexico; pozole, which means 'hominy' is garnished with shredded cabbage, onions, and land lime.  Served with torillas."
            />
            <MenuItem
              name="Menudo"
              price="12.99"
              description="Our traditional homemade Mexican soup; garnished with jalapenos, cilantro, onions, lime, and torillas."
            />
            <MenuItem
              name="Chilaquiles"
              price="12.99"
              description="Torilla chips cooked in a red sauce topped with Mexican cheese, onions, and sour cream, served with two eggs any style and beans."
            />
            <MenuItem
              name="Machaca"
              price="15.99"
              description="Shredded beef scrambled with eggs, onions, bell peppers, and cheese.  Served with rice, beans, and torillas."
            />
          </div>
          <div>
            <MenuItem
              name="Tostada, Small (corn) 11.99 / Large (flour) 13.95"
              description="Fried torilla topped with beans, choice of shredded chicken, shredded beef, ground beef, or chicken; lettuce, tomatoes, and cheese topped with sour cream and guacamole."
            />
            <MenuItem
              name="Nachos"
              price="14.99"
              description="Corn tortilla chips topped with beans, choice of shredded chicken, shredded beef, or ground beef; topped with cheese, sour cream, and guacamole."
            />
            <MenuItem
              name="Mexican Pizza"
              price="15.99"
              description="Homemade fry bread topped with your choice of shredded chicken, shredded beef, or ground beef, beans, cheese, tomatoes, sour cream, and guacamole."
            />
            <MenuItem
              name="Torta"
              price="14.99"
              description="Homemade fry bread topped with your choice of shredded chicken, shredded beef, or ground beef, lettuce, cheese, sour cream, and guacamole."
            />
            <MenuItem
              name="Taco Salad Small 11.99 / Large 14.99"
              description="Flour tortilla bowl filled with your choice of shredded chicken, shredded beef, or ground beef, rice, beans, lettuce, tomatoes, and cheese, topped with sour cream and guacamole."
            />
          </div>
          <div
            class="border border-warning border2 grid gap-1 py-5 mt-8 mx-10 min-h-20"
          >
            <div class="font-bold">
              <MenuSectionHeader categoryDescription="HOMEMADE TAMALES" />
            </div>
            <MenuItem
              description="Chicken, pork, beef, or spinach and cheese."
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
    <MenuNavButtons previousPageNum="2" nextPageNum="4" />
  </div>
</div>
