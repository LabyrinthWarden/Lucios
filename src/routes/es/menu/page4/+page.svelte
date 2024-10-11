<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEn from '$lib/components/MenuNavButtonsEn.svelte'

  import burritoImage from '$lib/assets/img/burrito.png'
  import molcajeteImage from '$lib/assets/img/molcajete.png'
  import pineappleImage from '$lib/assets/img/pineapple.png'
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page Four -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <div class="grid md:grid-cols-2">
        <!-- Chinese Specialties Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader
            category="Especialidades chinas"
            categoryDescription="Servido con arroz al vapor."
          />

          <div class="md:text-left">
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">Chow Mein</h4>
              <p class="">
                Pollo o carne de res <br />
                Camarones o mariscos 15.95 <br />
                Verduras 13.95 <br />
                Agregue verduras adicionales 4.00
              </p>
            </div>
            <MenuItem name="Pollo Kung Pao" price="14.95" />
            <MenuItem
              name="Agridulce"
              price="14.95"
              description="Pollo o cerdo"
            />
            <MenuItem
              name="Pollo al limón"
              price="14.95"
              description="Ensalada de atún con lechuga sobre tostadas blancas."
            />
            <MenuItem name="Carne de res y brócoli" price="14.95" />
          </div>
        </div>
        <!-- American Specialties Section -->
        <div class="mb-6 text-center">
          <div class="max-w-96 mx-auto">
            <MenuSectionHeader
              category="Especialidades americanas"
              categoryDescription="Servido con verduras al vapor, puré de papas, tostadas con ajo y sopa o ensalada."
            />
          </div>
          <div class="md:text-left">
            <MenuItem
              name="Filete de pollo frito"
              price="20.95"
              description=""
            />
            <MenuItem
              name="Filete de Nueva York"
              price="20.95"
              description="Filete de 8 onzas"
            />
            <MenuItem
              name="Bistec de costilla"
              price="27.95"
              description="Filete de 12 onzas"
            />
            <MenuItem name="Chuletas de cerdo" price="20.95" />
          </div>
        </div>
      </div>

      <!-- Burritos Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Burritos"
          categoryDescription="Agregue chile verde o salsa roja 2.00"
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-1 md:text-left">
          <div>
            <MenuItem
              name="Burrito"
              price="13.95"
              description="Arroz y frijoles con su elección de carne desmenuzada, carne molida o pollo desmenuzado."
            />
            <MenuItem
              name="Burrito de California"
              price="15.95"
              description="Carne asada, papas fritas, pico de gallo, queso y guacamole."
            />
            <MenuItem
              name="Burrito de desayuno"
              price="13.95"
              description="Jamón, salchicha o tocino y elección de papas revueltas con huevos y queso, cubiertas con crema agria."
            />
            <MenuItem
              name="Burrito de San Diego"
              price="15.95"
              description="Carne asada, guacamole, tomates, cebollas y cilantro."
            />
          </div>
          <img
            src={burritoImage}
            alt="Un burrito cubierto con salsa roja y queso, cubierto con crema agria y guacamole."
            class="hidden md:block mt-8 -ml-6 -z-10 scale-125"
          />
          <div>
            <MenuItem
              name="Burrito gigante"
              price="16.95"
              description="Arroz, frijoles, con pollo desmenuzado, carne molida, carne de res desmenuzada o cerdo a elección. Cubierto con salsa roja, queso, crema agria y guacamole."
            />
            <MenuItem
              name="Burrito de chorizo"
              price="14.95"
              description="Chorizo ​​revuelto con patatas fritas, huevos y queso."
            />
            <MenuItem
              name="Burrito de chile verde"
              price="16.95"
              description="Cerdo, arroz, frijoles y queso, cubierto con salsa de Chile Verde, crema agria y guacamole."
            />
            <MenuItem
              name="Carne Asada o Carnitas Burrito"
              price="16.95"
              description="Arroz, frijoles, queso y guacamole."
            />
          </div>
        </div>
      </div>

      <!-- Mexican Specialties Section -->
      <div class="mb-6 text-center space-y-2">
        <MenuSectionHeader
          category="Especialidades mexicanas"
          categoryDescription="Servido con arroz, frijoles, crema agria y guacamole, con tortillas de harina o maíz de su elección."
        />
        <div class="grid md:grid-cols-2 gap-1 text-center md:text-left">
          <div>
            <MenuItem
              name="Especial de Lucio"
              price="22.95"
              description="Filete de Nueva York y Chile Relleno."
            />
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">
                Fajitas chispeantes
              </h4>
              <p class="">
                Pollo o Carne 18.95 <br />
                Camarones 19.95 <br />
                Salteados con pimientos morrones, cebollas y marinados en salsa teriyaki, cubiertos con tomates.
              </p>
            </div>
            <MenuItem
              name="Filete Ranchero"
              price="17.95"
              description="Tiras de filete de solomillo cocinadas con pimientos morrones, cebollas, tomates y patatas."
            />
            <MenuItem
              name="Carne Asada"
              price="17.95"
              description="Bistec de solomillo superior cubierto con cebollas y pimientos morrones."
            />
            <MenuItem
              name="Camarones a la Diabla"
              price="17.95"
              description="Camarones cocinados en nuestra salsa roja casera, a elegir entre picante o suave."
            />
            <MenuItem
              name="Chile Colorado"
              price="17.95"
              description="Tira de solomillo superior cocinada en nuestra salsa roja casera, a elegir entre picante o suave."
            />
            <MenuItem
              name="Carnitas"
              price="17.95"
              description="Carnitas caseras servidas con pico de gallo."
            />
            <MenuItem
              name="Camarones Rancheros"
              price="17.95"
              description="Camarones cocidos en pico de gallo."
            />

            <img
              src={molcajeteImage}
              alt="a molcajete dish"
              class="hidden place-self-center md:block ml-12 mt-4 -z-10"
            />
          </div>
          <div>
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">
                Plato de fajitas hawaianas
              </h4>
              <p class="">
                Pollo o carne de res 20.95 <br />
                Camarones 21.95 <br />
                Tazón de piña fresca lleno de pimientos morrones a la parrilla, cebollas y piñas marinadas en salsa teriyaki y cubierto con su elección de brochetas de pollo a la parrilla, bistec o camarones.
              </p>
            </div>
            <MenuItem
              name="Tilapia a la parrilla"
              price="17.95"
              description="Cubierto con pico de gallo."
            />
            <MenuItem
              name="Pollo Fundido"
              price="17.95"
              description="Pollo y champiñones cocidos a fuego lento en nuestra salsa roja casera, cubiertos con queso Jack."
            />
            <MenuItem
              name="Momias Camarones"
              price="18.95"
              description="Camarones envueltos en tocino, cocinados en nuestra salsa roja casera con cebollas y pimientos morrones, cubiertos con queso Jack."
            />
            <MenuItem
              name="Mar y Tierra"
              price="22.95"
              description="Bistec de Nueva York servido con camarones."
            />
            <MenuItem
              name="Molcajete"
              price="25.95"
              description="Pollo a la parrilla, carne asada, chorizo, camarones, queso Oaxaca y cebollas y jalapeños asados."
            />
            <img
              src={pineappleImage}
              alt="pinapple fajitas dish"
              class="hidden md:block scale-75 ml-8 -mt-16 -z-10"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtonsEn previousPageNum="3" nextPageNum="5" />
  </div>
</div>
