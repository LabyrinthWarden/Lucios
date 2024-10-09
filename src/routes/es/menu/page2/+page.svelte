<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEs from '$lib/components/MenuNavButtonsEs.svelte'
  import tacoImage from '$lib/assets/img/tacos.png'
  import enchiladaImage from '$lib/assets/img/enchiladas.png'
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page Three -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Mexican Favorites Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Favoritos Mexicanos" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 md:text-left">
          <div>
            <MenuItem
              name="Papa con Chorizo"
              price="15.99"
              description="Salchicha mexicana casera revuelta con papas, servida con dos huevos, frijoles y tortillas"
            />
            <MenuItem
              name="Huevos con Chorizo"
              price="15.99"
              description="Salchichas caseras revueltas con huevos, cebollas, pimientos morrones y queso, servidas con arroz, frijoles y tortillas."
            />
            <MenuItem
              name="Huevos Rancheros"
              price="14.99"
              description="Tortilla de maíz frita cubierta con huevos, cebollas, cilantro, salsa de chile verde casera o salsa roja vegetariana casera y crema agria. Servida con arroz, frijoles y tortillas."
            />
            <MenuItem
              name="Pozole"
              price="12.99"
              description="Nuestra sopa casera tradicional de México, el pozole, se adereza con repollo rallado, cebollas y limón. Se sirve con tortillas."
            />
            <MenuItem
              name="Menudo"
              price="12.99"
              description="Nuestra tradicional sopa mexicana casera; aderezada con jalapeños, cilantro, cebollas, limón y tortillas."
            />
            <MenuItem
              name="Chilaquiles"
              price="12.99"
              description="Chips de tortilla cocinados en salsa roja cubiertos con queso mexicano, cebollas y crema agria, servidos con dos huevos al estilo y frijoles."
            />
            <MenuItem
              name="Machaca"
              price="15.99"
              description="Carne de res deshebrada revuelta con huevos, cebollas, pimientos morrones y queso. Servida con arroz, frijoles y tortillas."
            />
          </div>
          <div>
            <MenuItem
              name="Tostada, Pequeño (maíz) 11.99 / Grande (harina) 13.95"
              description="Tortilla frita cubierta con frijoles, elección de pollo desmenuzado, carne desmenuzada, carne molida o pollo; lechuga, tomates y queso cubiertos con crema agria y guacamole."
            />
            <MenuItem
              name="Nachos"
              price="14.99"
              description="Chips de tortilla de maíz cubiertos con frijoles, opción de pollo desmenuzado, carne desmenuzada o carne molida; cubiertos con queso, crema agria y guacamole."
            />
            <MenuItem
              name="Pizza Mexicana"
              price="15.99"
              description="Pan frito casero cubierto con su elección de pollo desmenuzado, carne desmenuzada o carne molida, frijoles, queso, tomates, crema agria y guacamole."
            />
            <MenuItem
              name="Torta"
              price="14.99"
              description="Pan frito casero cubierto con su elección de pollo desmenuzado, carne desmenuzada o carne molida, lechuga, queso, crema agria y guacamole."
            />
            <MenuItem
              name="Ensalada de Tacos Pequeña 11.99 / Grande 14.99"
              description="Tazón de tortilla de harina relleno con su elección de pollo desmenuzado, carne desmenuzada o carne molida, arroz, frijoles, lechuga, tomates y queso, cubierto con crema agria y guacamole."
            />
            <div
              class="justify-self-end mx-auto mt-4 max-w-64 border-warning border-4 grid gap-1 py-3 min-h-20"
            >
              <div class="font-bold text-center">
                <MenuSectionHeader categoryDescription="TAMALES CASEROS" />
              </div>
              <div class="text-center">
                <MenuItem
                  description="Pollo, cerdo, ternera o espinacas y queso."
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
            category="Combo Mexicano"
            categoryDescription="Servido con arroz y frijoles. Puede elegir entre pollo desmenuzado, carne desmenuzada, carne molida o chile verde. Para carne asada o carnitas, 2.00 adicionales."
          />
        </div>
        <div class="grid md:grid-cols-3 gap-1">
          <div class="text-center md:text-left">
            <MenuItem name="1. One Enchilada" price="10.99" />
            <MenuItem name="2. One regular Taco" price="10.99" />
            <MenuItem name="3. Chili Relleno" price="12.99" />
            <MenuItem name="4. Tamale" price="12.99" />
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
          <div class="grid">
            <img class="hidden md:block place-self-center scale-125" src={enchiladaImage} alt="cheese enchiladas">
          </div>
          <div
            class="text-center md:text-right md:max-w-md md:justify-self-end"
          >
            <MenuItem name="14. Enchilada and Tamale" price="16.50" />
            <MenuItem name="15. Regular Taco & Chile Relleno" price="16.50" />
            <MenuItem name="16. Regular Taco & Tamale" price="16.50" />
            <MenuItem name="17. Tamale and Chili Relleno" price="17.50" />
            <MenuItem name="18. Three Taquitos" price="16.50" />
            <MenuItem name="19. Three Enchiladas" price="17.50" />
            <MenuItem name="20. Three regular Tacos" price="16.50" />
            <MenuItem
              name="21. Regular Taco, Chile Relleno, & Enchilada"
              price="19.99"
            />
            <MenuItem
              name="22. Regular Taco, Chili Relleno, & Tamale"
              price="19.99"
            />
            <MenuItem
              name="23. Chili Relleno, Enchilada, & Tamale"
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
              description="Carne asada cooked with pico de gallo; topped with Mexican chees and sour cream."
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
              description="Breaded shrip or fish; topped with cabbage, onions, and cilantro; served with our special Ensenada sauce."
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
    <MenuNavButtonsEs previousPageNum="1" nextPageNum="3" />
  </div>
</div>
