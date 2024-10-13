<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEs from '$lib/components/MenuNavButtonsEs.svelte'
  import pancakeImage from '$lib/assets/img/pancakes.png'
</script>

<div class="carousel w-full mb-20">
  <!-- Menu Page One -->
  <div class="carousel-item relative w-full">
    <div class="w-full">
      <!-- Omelettes Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Tortillas De Tres Huevos"
          categoryDescription="Servido con papas fritas o papas fritas caseras y una opción de tostadas o panqueques."
        />
        <div class="grid md:grid-cols-2 gap-1">
          <div>
            <MenuItem
              name="Express"
              price="16.00"
              description="Salchicha italiana, champiñones, tomates, espinacas, queso Jack y salsa casera."
            />
            <MenuItem
              name="Carne Asada"
              price="16.00"
              description="Bistec de solomillo a la parrilla, champiñones, cebollas, pimientos morrones, queso Jack, un acompañamiento de pico de gallo y cubierto con guacamole."
            />
            <MenuItem
              name="Vegetariano"
              price="15.00"
              description="Verduras frescas a la parrilla con queso de su elección."
            />
            <MenuItem
              name="Denver"
              price="15.50"
              description="Jamón, cebolla, pimientos morrones y queso cheddar."
            />
            <MenuItem
              name="California"
              price="15.50"
              description="Tocino, tomates, queso cheddar y cubierto con aguacates."
            />
          </div>
          <div>
            <MenuItem
              name="Mariscos"
              price="16.50"
              description="Una mezcla de camarones salteados, vieiras, cangrejo y pescado, queso Jack y cubierto con nuestra cremosa salsa holandesa."
            />
            <MenuItem
              name="Espinaca"
              price="16.50"
              description="Espinacas frescas, champiñones y queso crema."
            />
            <MenuItem
              name="Pavo"
              price="16.00"
              description="Pavo desmenuzado, tomates, champiñones, queso Jack y cubierto con nuestra cremosa salsa holandesa."
            />
            <MenuItem
              name="Frijol con Chile"
              price="15.50"
              description="Nuestros premiados frijoles con chile, cubiertos con queso cheddar y cebollas."
            />
            <MenuItem
              name="Jamón, Tocino o Salchicha"
              price="14.50"
              description="Con elección de queso y cebolla."
            />
          </div>
        </div>
      </div>
      <!-- American Favorites Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Favoritos Americanos"
          categoryDescription="Servido con papas fritas o papas fritas caseras y una opción de tostadas, galletas o panqueques."
        />
        <div class="grid md:grid-cols-2 gap-1 text-center">
          <div>
            <MenuItem
              name="Filete"
              price="20.99"
              description="Filete de Nueva York servido con dos huevos."
            />
            <MenuItem
              name="Chuletas de Cerdo"
              price="18.50"
              description="Dos chuletas de cerdo servidas con dos huevos."
            />
            <MenuItem
              name="Mezcla De Vegetales"
              price="15.00"
              description="Verduras frescas con queso mixto."
            />
            <MenuItem
              name="Hachís de Carne en Conserva"
              price="14.95"
              description="Nuestro hachís de carne en conserva casero servido con dos huevos."
            />
          </div>
          <div>
            <MenuItem
              name="Filete de Pollo Frito"
              price="18.50"
              description="Un filete de res picado y frito, servido con dos huevos."
            />

            <MenuItem
              name="El Favorito de la Casa"
              price="14.95"
              description="Dos huevos, con opción de tocino, hamburguesa de salchicha picante, hamburguesa de salchicha, salchichas, salchicha italiana, linguica o jamón."
            />

            <MenuItem
              name="Desayuno Ligero"
              price="10.95"
              description="Puede elegir entre dos piezas de tocino, dos salchichas o una hamburguesa de salchicha, servidas con un huevo."
            />

            <MenuItem name="Dos Huevos" price="10.95" />
          </div>
          <div
            class="border border-warning border-dashed rounded-2xl col-span-full grid md:grid-cols-2 gap-1 py-5 md:mx-10 min-h-20"
          >
            <MenuItem
              name="Estilo Campestre"
              price="15.95"
              description="Servido con dos huevos, elección de tocino o salchicha, elección de papas fritas o papas fritas caseras y media ración de galletas y salsa."
            />
            <MenuItem
              name="Huevos Benedict"
              price="15.99"
              description="Servido con dos huevos escalfados sobre jamón en un panecillo inglés tostado, cubierto con salsa holandesa y papas fritas caseras o papas fritas."
            />
          </div>
        </div>
      </div>

      <!-- Skillets Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader
          category="Sartenes"
          categoryDescription="Con queso de su elección. Servido con media ración de galletas y salsa."
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-1 text-center">
          <div>
            <MenuItem
              name="Americano"
              price="15.95"
              description="Jamón, cebollas, pimientos morrones, revueltos con huevos. Servido con papas fritas."
            />
            <MenuItem
              name="Linguica"
              price="15.99"
              description="Linguica mezclada con pimientos morrones y cebollas, cubierta con dos huevos. Servida con papas fritas caseras."
            />
          </div>
          <div>
            <MenuItem
              name="Alambre"
              price="15.95"
              description="Asada, tocino y chorizo ​​con cebollas y pimientos morrones, cubierto con dos huevos. Servido con papas fritas."
            />

            <MenuItem
              name="Costilla de Primera"
              price="16.99"
              description="Costilla de ternera, cebollas, pimientos morrones, revueltos con dos huevos. Servido con papas fritas."
            />
          </div>
        </div>
      </div>
      <!-- B&G, Waffles and Pancakes Section -->
      <div class="grid md:grid-cols-3 mb-6 text-center md:text-left md:ml-6">
        <div class="">
          <MenuSectionHeader category="Galletas Caseras y Salsa" />
          <div class="mb-3">
            <MenuItem name="Orden Completa" price="9.99" />
            <MenuItem name="Media Orden" price="6.99" />
          </div>

          <MenuSectionHeader category="Panqueques" />
          <div class="grid grid-cols-1 gap-1 mb-4">
            <MenuItem name="Un Panqueque" price="4.50" />
            <MenuItem name="Dos Panqueques" price="7.99" />
            <MenuItem name="Tres Panqueques" price="10.99" />
            <MenuItem
              name="Maderero"
              price="14.99"
              description="Viene con tres panqueques, tres huevos y su elección de tres tocinos o tres salchichas."
            />
          </div>
        </div>
        <img src={pancakeImage} class="hidden md:block" alt="" />
        <div class="">
          <MenuSectionHeader category="Gofres" />
          <p class="text-center mb-3"></p>
          <div class="grid gap-1">
            <div class="mx-4">
              <MenuItem name="Gofre" price="7.00" />
              <MenuItem
                name="Combo De Gofres"
                price="14.99"
                description="Dos huevos, con tocino o salchicha a elección."
              />
              <MenuItem
                name="Pollo y Gofres"
                price="15.99"
                description="Tiras de pollo crujientes cubiertas con salsa, dos huevos y un gofre casero."
              />
            </div>
          </div>
        </div>
      </div>
      <!-- French Toast, Crepes and Oatmeal Section -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 mb-6 text-center md:text-left"
      >
        <div>
          <h3
            class="ml-5 text-3xl text-warning font-semibold small-caps tracking-widest drop-shadow-md"
          >
            Crepes
          </h3>
          <MenuItem
            name="Fruta"
            price="12.99"
            description="Fresa o arándanos, con queso crema."
          />
          <MenuItem
            name="Molly's"
            price="14.99"
            description="Plátanos, fresas y Nutella"
          />
          <div
            class="m-4 border mx-auto md:mx-0 border-warning border-dashed rounded-2xl max-w-96 text-center"
          >
            <MenuItem name="Avena" price="7.99" />
            <MenuItem
              name="Avena al Estilo Mexicano"
              price="10.99"
              description="Servido con leche, mantequilla y azúcar moreno."
            />
          </div>
        </div>
        <div>
          <MenuSectionHeader category="Tostada Francesa" />
          <MenuItem name="Un Tostada Francesa" price="4.99" />
          <MenuItem name="Dos Tostada Francesas" price="7.99" />
          <MenuItem name="Tres Tostada Francesas" price="10.99" />
          <MenuItem
            name="Molly's Tostada Francesa"
            price="14.50"
            description="Dos rebanadas de tostada francesa cubiertas con Nutella, fresas y plátanos."
          />
          <MenuItem
            name="Combo de Tostadas Francesas"
            price="14.99"
            description="Dos rebanadas de tostada francesa, servidas con dos huevos y dos trozos de tocino o dos salchichas."
          />
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtonsEs previousPageNum="5" nextPageNum="2" />
  </div>
</div>
