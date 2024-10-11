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
            <MenuItem name="1. Un Enchilada" price="10.99" />
            <MenuItem name="2. Un Taco Regular" price="10.99" />
            <MenuItem name="3. Chili Relleno" price="12.99" />
            <MenuItem name="4. Tamal" price="12.99" />
            <MenuItem name="5. Chimichanga" price="15.50" />
            <MenuItem name="6. Quesadilla" price="14.50" />
            <MenuItem name="7. Dos Enchiladas" price="14.99" />
            <MenuItem name="8. Dos Tacos Regulares" price="14.99" />
            <MenuItem name="9. Dos Chili Rellenos" price="17.50" />
            <MenuItem name="10. Dos Tamales" price="17.50" />
            <MenuItem name="11. Dos Sopes" price="14.99" />
            <MenuItem name="12. Enchilada y Taco Regular" price="15.99" />
            <MenuItem name="13. Enchilada y Chile Relleno" price="16.50" />
          </div>
          <div class="grid">
            <img class="hidden md:block place-self-center scale-125" src={enchiladaImage} alt="cheese enchiladas">
          </div>
          <div
            class="text-center md:text-right md:max-w-md md:justify-self-end"
          >
            <MenuItem name="14. Enchilada y Tamal" price="16.50" />
            <MenuItem name="15. Taco Regular y Chile Relleno" price="16.50" />
            <MenuItem name="16. Taco Regular y Tamal" price="16.50" />
            <MenuItem name="17. Tamal y Chili Relleno" price="17.50" />
            <MenuItem name="18. Tres Taquitos" price="16.50" />
            <MenuItem name="19. Tres Enchiladas" price="17.50" />
            <MenuItem name="20. Tres Tacos Regulares" price="16.50" />
            <MenuItem
              name="21. Taco Regular, Chile Relleno y Enchilada"
              price="19.99"
            />
            <MenuItem
              name="22. Taco Regular, Chili Relleno, y Tamal"
              price="19.99"
            />
            <MenuItem
              name="23. Chili Relleno, Enchilada, y Tamal"
              price="19.99"
            />
          </div>
        </div>
      </div>

      <!-- Tacos Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Tacos"
          categoryDescription="Los pedidos vienen con dos tacos, servidos con arroz y frijoles."
        />
        <div class="grid md:grid-cols-2 gap-1 text-center md:text-left">
          <div>
            <MenuItem
              name="Tacos de Alambre"
              price="15.95"
              description="Carne asada, tocino y chorizo ​​cubiertos con cebolla, cilantro y repollo."
            />
            <MenuItem
              name="Tacos de Papa"
              price="15.95"
              description="Puré de papas y queso, frito en una tortilla de maíz cubierta con lechuga, zanahorias, cebollas encurtidas y queso mexicano."
            />
            <div class="grid grid-cols-1 md:grid-cols-3 ml-2 mt-4">
              <div
                class="border-2 border-dashed border-error text-lg text-center max-w-36 leading-loose"
              >
                <p class="max-w-24 mx-auto mt-4">
                  Salsa a elegir: salsa chipotle, habanero o tomatillo. Guarnición de salsa extra: 1.75
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
              description="Carne asada cocinada con pico de gallo; cubierta con queso mexicano y crema agria."
            />
            <MenuItem
              name="Tacos de Carnitas"
              price="15.95"
              description="Cerdo cocinado con pico de gallo; cubierto con cebolla y cilantro."
            />
            <MenuItem
              name="Tacos de Camarones o Pescado"
              price="15.95"
              description="Camarones a la parrilla cocinados con pico de gallo, cubiertos con cebolla y cilantro."
            />
            <MenuItem
              name="Tacos de Ensenada"
              price="15.95"
              description="Camarones o pescado empanizados, cubiertos con repollo, cebolla y cilantro; servidos con nuestra salsa especial Ensenada."
            />
            <MenuItem
              name="Tacos de Carne Asada"
              price="15.95"
              description="Bistec cubierto con cebolla y cilantro."
            />
            <!-- Footnote -->
            <div class="mt-12 max-w-96 ml-6">
              <p class="font-semibold text-error">
                A partir de las 11:00 h, la primera cesta de patatas fritas y salsa por mesa es gratuita. Cesta extra de patatas fritas y salsa 3.00
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
