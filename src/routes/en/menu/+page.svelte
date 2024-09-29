<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuGroup from '$lib/components/MenuGroup.svelte'
  import pancakeImage from '$lib/assets/img/pancakes.png'
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h2 class="text-6xl title-text">Our Menu</h2>
</div>

<div class="carousel w-full mb-20 ">
  <!-- Menu Page One -->
  <div id="page1" class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Omelettes Section -->
      <MenuGroup
        category="Three Egg Omelettes"
        categoryDescription="Served with hash browns or home fries and a choice of toast or pancakes."
      >
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
      </MenuGroup>
      <!-- Favorites Section -->
      <MenuGroup
        category="American Favorites"
        categoryDescription="Served with hash browns or home fries and a choice of toast, biscuit, or pancakes."
      >
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
          class="border border-warning border-dashed rounded-2xl col-span-full grid grid-cols-2 py-5 mx-10 min-h-20"
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
      </MenuGroup>
      <!-- Skillets Section -->
      <MenuGroup
        category="Skillets"
        categoryDescription="With your choice of cheese. Served with a half order of biscuits and gravy."
      >
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
      </MenuGroup>
      <!-- B&G, Waffles and Pancakes Section -->
      <div class="grid grid-cols-3 mb-6">
        <div class="col-span-2">
          <h3
            class="ml-5 text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md"
          >
            Homemade Biscuits & Gravy
          </h3>

          <div class="mb-3">
            <MenuItem name="Full Order" price="9.99" />
            <MenuItem name="Half Order" price="6.99" />
          </div>

          <h3
            class="ml-5 text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md"
          >
            Pancakes
          </h3>
          <div class="grid grid-cols-1 gap-1">
            <div class="mb-4">
              <MenuItem name="One Pancake" price="4.50" />
              <MenuItem name="Two Pancakes" price="7.99" />
              <MenuItem name="Three Pancakes" price="10.99" />
              <MenuItem name="Lumber Jack" price="14.99" />
              <p class="mx-4 max-w-64">
                Choice of three bacon or three sausage, three eggs, and three
                pancakes.
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <h3
            class="text-center text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md"
          >
            Waffles
          </h3>
          <p class="text-center mb-3"></p>
          <div class="grid grid-cols-1 gap-1">
            <div class="mx-4">
              <MenuItem name="Waffle" price="7.00" />
              <MenuItem name="Waffle Combo" price="14.99" description="Two eggs, with your choice of bacon or sausage."/>
              <MenuItem name="Chicken and Waffles" price="15.99" description="Crispy chicken strips topped with gravy, two eggs, and a
                homemade waffle."/>
            </div>
          </div>
        </div>
      </div>
      <!-- French Toast, Crepes and Oatmeal Section -->
      <div class="grid grid-cols-2 mb-6">
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
          <div class="m-4 border border-warning border-dashed rounded-2xl max-w-96 text-center">
            <MenuItem 
              name="Oatmeal"
              price="7.99"
            />
            <MenuItem 
              name="Mexican Style Oatmeal"
              price="10.99"
              description="Served with milk, butter, and brown sugar."
            />
          </div>
        </div>
        <div>
          <h3
            class="text-center text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md"
          >
            French Toast
          </h3>
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
    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
    >
      <a href="#page4" class="btn btn-circle">❮</a>
      <a href="#page2" class="btn btn-circle">❯</a>
    </div>
    <div class="hidden md:block absolute bottom-60 left-64 -z-10 opacity-80 scale-90">
      <img src={pancakeImage} alt="pancakes with strawberries and whipped cream">
    </div>
  </div>
  <div id="page2" class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Sandwiches Section -->
      <MenuGroup
        category="Sandwiches"
        categoryDescription="Served with coleslaw, salad, fesh cut fries, or curly fries."
      >
      <MenuItem 
        name="Grilled Cheese"
        price="10.95"
        description="Three pieces of whitew bread with American cheese."
      />
      <MenuItem 
        name="Monte Cristo"
        price="14.95"
        description="Ham, Swiss cheese, bacon, and tomatoes on Texas French Toast."
      />
      <MenuItem 
        name="Grilled Cheese and Tomatoes"
        price="12.95"
        description="Grilled tomatoes and American cheese on sourdough bread."
      />
      <MenuItem 
        name="Philly Cheese Steak"
        price="15.95"
        description="Slices of roast beef, Swiss cheese, grilled onions, and bell peppers on a French roll"
      />
      <MenuItem 
        name="Grilled Ham and Cheese"
        price="12.95"
        description="Ham and American cheese on sourdough bread."
      />
      <MenuItem 
        name="New York Steak"
        price="20.95"
        description="New York Steak with grilled onions, lettuce, and tomatoes on a steak roll."
      />
      <MenuItem 
        name="Chicken Salad Sandwich"
        price="12.95"
        description="Chicken salad with lettuce on a French roll."
      />
      <MenuItem 
        name="Tuna Melt"
        price="13.95"
        description="Tuna salad with American cheese on grilled sourdough."
      />
      <MenuItem 
        name="Tuna Salad Sandwich"
        price="12.95"
        description="Tuna salad with lettuce on white toast."
      />
      <MenuItem 
        name="Patty Melt"
        price="15.95"
        description="All beef patty, American cheese, and grilled onions on grilled rye."
      />
      <MenuItem 
        name="Grilled Club"
        price="15.95"
        description="Ham, roast beef, roasted turkey, bacon, tomatoes, and American cheese on grilled sourdough bread."
      />
      <MenuItem 
        name="Bagel"
        price="14.95"
        description="An everything bagel with one egg any style, American cheese, tomatoes, and onions. Choice of sausage patty, ham, or bacon."
      />
      <MenuItem 
        name="Triple Decker Club"
        price="15.95"
        description="Ham, roasted turkey, bacon, and American cheese toasted white bread."
      />
      <MenuItem 
        name="Turkey Melt"
        price="14.95"
        description="Turkey, grilled onions, and tomatoes with Jack cheese and avacadoes on grilled rye bread."
      />
      <MenuItem 
        name="BLT"
        price="13.95"
        description="Bacon, lettuce, and tomatoes on white bread."
      />
      </MenuGroup>
      <MenuGroup
        category="Burgers"
        categoryDescription="1/3 lb. all beef patty served with salad, fresh cut fries, or curly fries."
      >
        <MenuItem 
        name="Bacon Cheeseburger"
        price="15.95"
      />
      <MenuItem 
        name="Western Burger"
        price="16.95"
        description="Pepper Jack cheese, bacon, and BBQ sauce, topped with an onion ring."
      />
      <MenuItem 
        name="Double Cheeseburger"
        price="19.99"
        description="Add bacon 2.00"
      />
      <MenuItem 
        name="Fish Burger"
        price="14.95"
        description="Fried tilapia topped with lettuce, tomatoes, and onions."
      />
      <MenuItem 
        name="Hamburger"
        price="12.95"
        description="Add cheese 1.00"
      />
      <MenuItem 
        name="Stuffed Burger"
        price="16.95"
        description="Stuffed with bacon, mushrooms, and Swiss cheese."
      />
      <MenuItem 
        name="Teriyaki Burger"
        price="15.95"
      />
      <MenuItem 
        name="Pulled Pork Burger"
        price="14.95"
        description="BBQ pulled pork topped with onions rings and coleslaw."
      />
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
      </MenuGroup>
    </div>
    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
    >
      <a href="#page1" class="btn btn-circle">❮</a>
      <a href="#page3" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="page3" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full"
    />
    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
    >
      <a href="#page2" class="btn btn-circle">❮</a>
      <a href="#page4" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="page4" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full"
    />
    <div
      class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
    >
      <a href="#page3" class="btn btn-circle">❮</a>
      <a href="#page1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>