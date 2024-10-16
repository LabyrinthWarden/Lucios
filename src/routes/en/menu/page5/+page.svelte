<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuExtras from '$lib/components/MenuExtras.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEn from '$lib/components/MenuNavButtonsEn.svelte'

  import chipsAndSalsaImage from '$lib/assets/img/chips-salsa.png'
  import beverageImage from '$lib/assets/img/beverage.png'
  import margaritasImage from '$lib/assets/img/margaritas.png'
  import micheladaImage from '$lib/assets/img/michelada.png'
  import mimosaImage from '$lib/assets/img/mimosa.png'
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page Five -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <div class="grid">
        <!-- Appetizers Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader category="Appetizers" />
          <div class="grid md:grid-cols-2 text-center md:text-left">
            <div class="md:pl-6">
              <MenuItem name="Mozzarella Sticks" price="9.99" />
              <MenuItem
                name="Chicken Strips"
                price="11.99"
                description="Three pieces served with French fries"
              />
              <MenuItem name="Jalapeño Poppers" price="9.99" />
              <MenuItem
                name="Guacamole"
                description="Small 4.00 / Large 7.00"
              />
              <div class="max-w-96 mx-auto md:mx-0">
                <MenuItem
                  name="Express Sampler Platter"
                  price="15.99"
                  description="4 mozzarella sticks, 4 jalapeño poppers, 2 chicken strips, and 4 onion rings."
                />
              </div>
              <MenuItem name="Pot Stickers" price="11.99" />
              <MenuItem
                name="Egg Rolls"
                price="4.95"
                description="Chicken or Vegetable"
              />
              <MenuItem name="Onion Rings" price="8.50" />
            </div>
            <div>
              <img
                src={chipsAndSalsaImage}
                alt="chips and salsa"
                class="hidden md:block -mt-6 ml-8 -z-10 max-w-96"
              />
              <MenuItem
                name="Mexican Sampler Platter"
                price="15.99"
                description="Taquitos, Nachos, Jalapeño poppers, and 1/2 Quesadilla."
              />
              <MenuItem name="French Fries or Curly Fries" price="7.00" />
            </div>
          </div>
        </div>
      </div>

      <!-- Beverages Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Beverages" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div>
            <MenuItem name="Coffee" price="3.00" />
            <MenuItem name="Hot Tea" price="3.00" />
            <MenuItem name="Hot Chocolate" price="4.00" />
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">Iced Tea</h4>
              <p class="">
                Unsweetened 3.00 <br />
                Peach, Mango, or Raspberry 5.00 <br />
                Arnold Palmer 4.50
              </p>
            </div>
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">
                Horchata 3.50
              </h4>
              <p class="">Mexican drink made of rice and cinnamon.</p>
              <p class="text-[#7f1d1d] font-semibold">*No refills.</p>
            </div>
          </div>
          <img
            src={beverageImage}
            alt="a milkshake"
            class="hidden place-self-center md:block max-w-52 -mt-2 -z-10"
          />
          <div>
            <MenuItem name="Milk" description="Small 2.00 / Large 3.50" />
            <MenuItem name="Juice" description="Small 2.00 / Large 4.00" />
            <MenuItem
              name="Chocolate Milk"
              description="Small 3.00 / Large 4.50"
            />
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">Soda 3.50</h4>
              <p class="">
                Coca cola, Sprite, Root Beer, Dr. Pepper, Diet Coke, and
                lemonade
              </p>
              <p class="text-[#7f1d1d] font-semibold">
                *One free refill; additional refills 1.00.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Beer & Wine Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Beer & Wine" />
        <div class="grid md:grid-cols-3 gap-1 text-center md:text-left">
          <div class="grid md:grid-cols-2 space-y-4">
            <div class="w-96">
              <div class="mx-4">
                <h4 class="text-[#7f1d1d] font-semibold text-xl">
                  Domestic Beer 6.00
                </h4>
                <p class="">
                  Sierra Nevada Pale Ale <br />
                  Blue Moon <br />
                  Budweiser <br />
                  Coors Light <br />
                  Michelob Ultra
                </p>
              </div>
              <div class="mx-4">
                <h4 class="text-[#7f1d1d] font-semibold text-xl">
                  Domestic Beer 6.00
                </h4>
                <p class="">
                  Negra Modelo <br />
                  Modelo Special <br />
                  Pacifico <br />
                  Corona <br />
                  Dos Equis XX <br />
                  Amber & Lager
                </p>
              </div>
            </div>
            <div>
              <img
                src={margaritasImage}
                alt="a molcajete dish"
                class="hidden place-self-center md:block mt-4"
              />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="text-center space-y-4">
              <div class="mx-4">
                <h4 class="text-[#7f1d1d] font-semibold text-xl">
                  Whites 7.00
                </h4>
                <p class="">
                  White Zinfandel <br />
                  Chardonnay <br />
                  Pinot Grigio
                </p>
              </div>
              <div class="mx-4">
                <h4 class="text-[#7f1d1d] font-semibold text-xl z-1">
                  Reds 7.00
                </h4>
                <p class="">
                  Merlot <br />
                  Zinfandel <br />
                  Sangria <br />
                  Cabernet Sauvignon <br />
                  Pinot Noir
                </p>
              </div>
            </div>
            <div class="w-32">
              <img
                src={micheladaImage}
                alt="a michelada"
                class="hidden place-self-center md:block ml-6 mt-4"
              />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="">
              <MenuItem
                name="Margaritas"
                price="9.95"
                description="Strawberry or Lime"
              />
              <MenuItem name="Mimosa" description="Small 7.95 / Large 13.00" />
              <MenuItem
                name="Michelada"
                price="9.95"
                description="Your choice of beer"
              />
            </div>
            <div class="w-20">
              <img
                src={mimosaImage}
                alt="a michelada"
                class="hidden place-self-center md:block ml-12 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 font-medium">
        <!-- Extra Sides Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader category="Extra Sides" />
          <div class="grid md:grid-cols-2 text-left mt-6 px-6">
            <MenuExtras name="4 Bacon or 4 Sausage Links" price="5.50" />
            <MenuExtras name="Hamburger Patty" price="6.00" />
            <MenuExtras name="2 Suasage Patties or Ham" price="5.50" />
            <MenuExtras name="1 Egg" price="2.75" />
            <MenuExtras name="Toast, Biscuit, or English Muffin" price="3.00" />
            <MenuExtras name="Bagel & Cream Cheese" price="5.50" />
            <MenuExtras name="Home Fries or Hash Browns" price="6.00" />
            <MenuExtras name="Cup of Fruit" price="6.25" />
            <MenuExtras name="Cup of Chili" price="5.99" />
            <MenuExtras name="Cup of Soup" price="5.50" />
            <MenuExtras name="Dinner Salad" price="5.50" />
            <MenuExtras name="Cup of Country Gravy" price="3.00" />
            <MenuExtras name="Salad Dressing" price="1.50" />
            <MenuExtras name="Side of Sour Cream" price="1.50" />
          </div>
        </div>
        <!-- A La Carte Mexican Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader category="A La Carte Mexican" categoryDescription="Your meat options: Chicken, ground beef, or shredded beef"/>
          <div class="grid grid-cols-2 text-left px-6">
            <MenuExtras name="Enchilada" price="6.50" />
            <MenuExtras name="Regular Taco" price="5.00" />
            <MenuExtras name="Tamale" price="7.50" />
            <MenuExtras name="Quesadilla" price="10.99" />
            <MenuExtras name="Sope" price="6.50" />
            <MenuExtras name="Chile Relleno" price="8.50" />
            <MenuExtras name="Chimichanga" price="10.99" />
            <MenuExtras name="Three Taquitos" price="10.99" />
            <MenuExtras name="Rice and Beans" price="6.00" />
            <MenuExtras name="Tortillas Corn / Flour" price="1.50" />
            <MenuExtras name="Grilled Jalapeño" price="1.00" />
            <MenuExtras name="Side of Avacado" price="2.50" />
            <MenuExtras name="Pico de Gallo" price="1.75" />
            <MenuExtras name="Salsa (chipotle, habanero, or tomatillo" price="1.75" />
            <MenuExtras name="Specialty Tacos (Carne asada, carnitas, chili verde, fish, or shrimp" price="6.00" />
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtonsEn previousPageNum="4" nextPageNum="6" />
  </div>
</div>
