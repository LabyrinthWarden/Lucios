<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEn from '$lib/components/MenuNavButtonsEn.svelte'

  import tacoImage from '$lib/assets/img/tacos.png'
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page Two -->
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
              description="Homemade Mexican sausage scrambled with potatoes, served with two eggs, beans, and tortillas"
            />
            <MenuItem
              name="Huevos con Chorizo"
              price="15.99"
              description="Homemade sausage scrambled with eggs, onions, bell peppers, and cheese, served with rice, beans, and tortillas."
            />
            <MenuItem
              name="Huevos Rancheros"
              price="14.99"
              description="Fried corn tortilla topped with eggs, onions, cilantro, homemade chili verde sauce or homemade vegetarian red sauce, and sour cream.  Served with rice, beans, and tortillas."
            />
            <MenuItem
              name="Pozole"
              price="12.99"
              description="Our traditional homemade soup from Mexico; pozole, which means 'hominy' is garnished with shredded cabbage, onions, and land lime.  Served with tortillas."
            />
            <MenuItem
              name="Menudo"
              price="12.99"
              description="Our traditional homemade Mexican soup; garnished with jalapenos, cilantro, onions, lime, and tortillas."
            />
            <MenuItem
              name="Chilaquiles"
              price="12.99"
              description="tortilla chips cooked in a red sauce topped with Mexican cheese, onions, and sour cream, served with two eggs any style and beans."
            />
            <MenuItem
              name="Machaca"
              price="15.99"
              description="Shredded beef scrambled with eggs, onions, bell peppers, and cheese.  Served with rice, beans, and tortillas."
            />
          </div>
          <div>
            <MenuItem
              name="Tostada, Small (corn) 11.99 / Large (flour) 13.95"
              description="Fried tortilla topped with beans, choice of shredded chicken, shredded beef, ground beef, or chicken; lettuce, tomatoes, and cheese topped with sour cream and guacamole."
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
            <div
            class="justify-self-end mx-auto mt-4 max-w-64 border-warning border-4 grid gap-1 py-3 min-h-20"
          >
            <div class="font-bold text-center">
              <MenuSectionHeader categoryDescription="HOMEMADE TAMALES" />
            </div>
            <div class="text-center">
              <MenuItem
                description="Chicken, pork, beef, or spinach and cheese."
              />
            </div>
          </div>
          </div>
          
        </div>
      </div>

      <!-- Mexican Combo Section -->
      <div class="mb-6 text-center">
        <div class="mx-auto max-w-[72%]">
          <MenuSectionHeader
            category="Mexican Combo"
            categoryDescription="Served with rice and beans. Your choice of shredded chicken, shredded beef, ground beef, or chili verde. For carne asada or carnitas, 2.00 extra."
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div class="text-center md:text-left">
            <MenuItem name="1. One Enchilada" price="10.99" />
            <MenuItem name="2. One regular Taco" price="10.99" />
            <MenuItem name="3. Chili Relleno" price="12.99" />
            <MenuItem name="4. Tamal" price="12.99" />
            <MenuItem name="5. Chimichanga" price="15.50" />
            <MenuItem name="6. Quesadilla" price="14.50" />
            <MenuItem name="7. Two Enchiladas" price="14.99" />
            <MenuItem name="8. Two regular Tacos" price="14.99" />
            <MenuItem name="9. Two Chili Rellenos" price="17.50" />
            <MenuItem name="10. Two Tamales" price="17.50" />
            <MenuItem name="11. Two Sopes" price="14.99" />
            <MenuItem name="12. Enchilada & regular Taco" price="15.99" />
            <MenuItem name="13. Enchilada and Chile Relleno" price="16.50" />
          </div>

          <div
            class="text-center md:text-right md:max-w-md md:justify-self-end"
          >
            <MenuItem name="14. Enchilada and Tamal" price="16.50" />
            <MenuItem name="15. Regular Taco & Chile Relleno" price="16.50" />
            <MenuItem name="16. Regular Taco & Tamale" price="16.50" />
            <MenuItem name="17. Tamal and Chili Relleno" price="17.50" />
            <MenuItem name="18. Three Taquitos" price="16.50" />
            <MenuItem name="19. Three Enchiladas" price="17.50" />
            <MenuItem name="20. Three regular Tacos" price="16.50" />
            <MenuItem
              name="21. Regular Taco, Chile Relleno, & Enchilada"
              price="19.99"
            />
            <MenuItem
              name="22. Regular Taco, Chili Relleno, & Tamal"
              price="19.99"
            />
            <MenuItem
              name="23. Chili Relleno, Enchilada, & Tamal"
              price="19.99"
            />
          </div>
        </div>
      </div>

      <!-- Tacos Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Tacos"
          categoryDescription="Orders come with two tacos, served with rice and beans"
        />
        <div class="grid md:grid-cols-2 gap-1 text-center md:text-left">
          <div>
            <MenuItem
              name="Alambre Tacos"
              price="15.95"
              description="Carne asada, bacon, and chorizo topped with onions, cilantro, and cabbage."
            />
            <MenuItem
              name="Tacos de Papa"
              price="15.95"
              description="Mashed potatoes and cheese, fried in a corn tortilla topped with lettuce, carrots, pickled onions, and Mexican cheese."
            />
            <div class="grid grid-cols-1 md:grid-cols-3 ml-2 mt-4">
              <div
                class="border-2 border-dashed border-error text-lg text-center max-w-36 leading-loose"
              >
                <p class="max-w-24 mx-auto mt-4">
                  Choice of Salsa: Chipotle, Habanero, Tomatillo Salsa. Extra
                  side of salsa 1.75
                </p>
              </div>
              <img
                src={tacoImage}
                alt="Tacos with rice and beans"
                class="hidden md:block md:max-w-96 md:grid-span-2 md:-ml-4"
              />
            </div>
          </div>
          <div>
            <MenuItem
              name="Tacos Mexicanos"
              price="15.95"
              description="Carne asada cooked with pico de gallo; topped with Mexican cheese and sour cream."
            />
            <MenuItem
              name="Carnitas Tacos"
              price="15.95"
              description="Pork cooked with pico de gallo; topped with onions and cilantro."
            />
            <MenuItem
              name="Shrimp or Fish Tacos"
              price="15.95"
              description="Grilled shrimp cooked with pico de gallo, topped with onions and cilantro."
            />
            <MenuItem
              name="Ensenada Tacos"
              price="15.95"
              description="Breaded shrimp or fish; topped with cabbage, onions, and cilantro; served with our special Ensenada sauce."
            />
            <MenuItem
              name="Carne Asada Tacos"
              price="15.95"
              description="Steak topped with onions and cilantro."
            />
            <!-- Footnote -->
            <div class="mt-12 max-w-96 ml-6">
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
    <MenuNavButtonsEn previousPageNum="1" nextPageNum="3" />
  </div>
</div>
