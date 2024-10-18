<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEs from '$lib/components/MenuNavButtonsEs.svelte'

  import hamburgerImage from '$lib/assets/img/hamburger.png'
  import saladImage from '$lib/assets/img/salad.png'
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page Two -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Sandwiches Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Sándwiches"
          categoryDescription="Servidos con ensalada de col, ensalada, papas fritas cortadas frescas o papas fritas rizadas."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 md:text-left">
          <div>
            <MenuItem
              name="Queso a la Parrilla"
              price="10.95"
              description="Tres rebanadas de pan blanco con queso americano."
            />
            <MenuItem
              name="Queso a la Parrilla con Tomates"
              price="12.95"
              description="Tomates y queso americano a la parrilla en pan de masa agria."
            />
            <MenuItem
              name="Jamón y Queso a la Parrilla"
              price="12.95"
              description="Jamón y queso americano en pan de masa agria."
            />
            <MenuItem
              name="Sándwich de Ensalada de Pollo"
              price="12.95"
              description="Ensalada de pollo con lechuga en un pan francés."
            />
            <MenuItem
              name="Sándwich de Ensalada de Atún"
              price="12.95"
              description="Ensalada de atún con lechuga en pan blanco tostado."
            />
            <MenuItem
              name="Club a la Parrilla"
              price="15.95"
              description="Jamón, roast beef, pavo asado, tocino, tomates y queso americano en pan de masa agria a la parrilla."
            />
            <MenuItem
              name="Club de Tres Capas"
              price="15.95"
              description="Jamón, pavo asado, tocino y queso americano en pan blanco tostado."
            />
            <MenuItem
              name="BLT"
              price="13.95"
              description="Tocino, lechuga y tomates en pan blanco."
            />
          </div>
          <div>
            <MenuItem
              name="Monte Cristo"
              price="14.95"
              description="Jamón, queso suizo, tocino y tomates en tostada francesa de Texas."
            />
            <MenuItem
              name="Philly Cheese Steak"
              price="15.95"
              description="Rebanadas de roast beef, queso suizo, cebolla y pimiento a la parrilla en un pan francés."
            />
            <MenuItem
              name="Bistec de Nueva York"
              price="20.95"
              description="Bistec de Nueva York con cebolla, lechuga y tomates a la parrilla en un pan de bistec."
            />
            <MenuItem
              name="Fundido de Atún"
              price="13.95"
              description="Ensalada de atún con queso americano en pan de masa agria a la parrilla."
            />
            <MenuItem
              name="Fundido de Hamburguesa"
              price="15.95"
              description="Hamburguesa de res, queso americano y cebolla a la parrilla en pan de centeno a la parrilla."
            />
            <MenuItem
              name="Bagel"
              price="14.95"
              description="Un bagel de todo con un huevo al gusto, queso americano, tomates y cebollas. A elección de salchicha, jamón o tocino."
            />
            <MenuItem
              name="Fundido de Pavo "
              price="14.95"
              description="Pavo, cebolla y tomates a la parrilla con queso Jack y aguacates en pan de centeno a la parrilla."
            />
          </div>
        </div>
      </div>

      <!-- Burgers Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Hamburguesas"
          categoryDescription="Hamburguesa de 1/3 lb. de pura carne de res servida con ensalada, papas fritas recién cortadas o papas fritas rizadas."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-1 md:text-left">
          <div>
            <MenuItem name="Hamburguesa con queso y tocino" price="15.95" />
            <MenuItem
              name="Hamburguesa doble con queso"
              price="19.99"
              description="Añadir tocino 2.00"
            />
            <MenuItem
              name="Hamburguesa"
              price="12.95"
              description="Añadir queso 1.00"
            />
            <MenuItem name="Hamburguesa teriyaki" price="15.95" />
            <MenuItem
              name="Hamburguesa con chile"
              price="15.95"
              description="Chile casero cubierto con queso cheddar y cebollas."
            />
            <MenuItem
              name="Hamburguesa de pollo teriyaki"
              price="14.95"
              description="Pechuga de pollo cubierta con cebollas y champiñones a la parrilla."
            />
          </div>
          <img
            src={hamburgerImage}
            alt="Hamburguesa con papas fritas"
            class="hidden md:block mt-8 -ml-6 -z-10 scale-125"
          />
          <div>
            <MenuItem
              name="Hamburguesa occidental"
              price="16.95"
              description="Queso Pepper Jack, tocino y salsa barbacoa, cubierto con una rodaja de cebolla."
            />
            <MenuItem
              name="Hamburguesa de pescado"
              price="14.95"
              description="Tilapia frita cubierta con lechuga, tomates y cebollas."
            />
            <MenuItem
              name="Hamburguesa Rellena"
              price="16.95"
              description="Relleno de tocino, champiñones y queso suizo."
            />
            <MenuItem
              name="Hamburguesa de cerdo desmenuzado"
              price="14.95"
              description="Cerdo desmenuzado a la barbacoa cubierto con aros de cebolla y ensalada de col."
            />
          </div>
        </div>
        <div
          class="border border-warning border-dashed rounded-2xl grid gap-1 md:grid-cols-3 py-5 mt-8 mx-10 min-h-20"
        >
          <div class="font-bold text-center col-span-full">
            <MenuSectionHeader
              categoryDescription="Servido con verduras al vapor y su elección de puré de papas, papas fritas recién cortadas o papas fritas rizadas."
            />
          </div>
          <MenuItem
            name="Salsa francesa"
            price="14.95"
            description="Carne de res asada cortada en rodajas en un pan francés."
          />
          <MenuItem
            name="Carne asada caliente"
            price="15.95"
            description="Carne de res asada cortada en rodajas servida abierta sobre pan blanco cubierta con salsa marrón."
          />
          <MenuItem
            name="Pavo picante"
            price="15.95"
            description="Pavo en rodajas servido abierto sobre pan blanco cubierto con salsa de pavo."
          />
        </div>
      </div>

      <!-- Salads Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Ensaladas"
          categoryDescription="Servido con tostadas de ajo y aderezo de su elección."
        />
        <div class="grid md:grid-cols-2 gap-1 text-center md:text-left">
          <div>
            <MenuItem
              name="Ensalada de pollo a la parrilla"
              price="15.99"
              description="Queso, tomates, pepino y un huevo en rodajas."
            />
            <MenuItem
              name="Ensalada Cobb"
              price="15.99"
              description="Tomates a la parrilla y queso americano sobre pan de masa madre."
            />
            <img
              src={saladImage}
              alt="a fiesta salad"
              class="hidden md:block scale-75 -ml-10 -mt-8 -z-10"
            />
          </div>
          <div>
            <MenuItem
              name="Ensalada del chef"
              price="15.99"
              description="Pavo, jamón, carne asada, queso, tomates, pepino y huevo en rodajas."
            />
            <MenuItem
              name="Ensalada César"
              price="15.99"
              description="Pollo a la parrilla, lechuga romana, crutones y un huevo en rodajas."
            />
            <MenuItem
              name="Ensalada cajún"
              price="15.99"
              description="Pollo crujiente, aceitunas, tomates, pepinos y un huevo en rodajas."
            />
            <MenuItem
              name="Ensalada Fiesta"
              price="15.99"
              description="Opción de pollo o bistec, frijoles negros, garbanzos, pimientos morrones y chips de tortilla."
            />
            <MenuItem
              name="Ensalada de camarones"
              price="16.50"
              description="Camarones cocidos con champiñones y cebollas, servidos con queso, tomates, pepino y un huevo en rodajas."
            />
            <!-- Footnote -->
            <div class="mt-12 max-w-96">
              <p class="font-semibold text-error">
                Aderezo extra 3.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtonsEs previousPageNum="2" nextPageNum="4" />
  </div>
</div>
