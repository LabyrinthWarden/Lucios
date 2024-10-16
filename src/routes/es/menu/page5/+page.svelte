<script>
  /** @type {import('./$types').PageData} */
  import MenuItem from '$lib/components/MenuItem.svelte'
  import MenuExtras from '$lib/components/MenuExtras.svelte'
  import MenuSectionHeader from '$lib/components/MenuSectionHeader.svelte'
  import MenuNavButtonsEs from '$lib/components/MenuNavButtonsEs.svelte'

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
          <MenuSectionHeader category="Aperitivos" />
          <div class="grid md:grid-cols-2 text-center md:text-left">
            <div>
              <MenuItem name="Palitos de mozzarella" price="9.99" />
              <MenuItem
                name="Tiras de pollo"
                price="11.99"
                description="Tres piezas servidas con papas fritas."
              />
              <MenuItem name="Jalapeños Poppers" price="9.99" />
              <MenuItem
                name="Guacamole"
                description="Pequeño 4.00 / Grande 7.00"
              />
              <div class="max-w-96 mx-auto md:mx-0">
                <MenuItem
                  name="Bandeja de muestra Express"
                  price="15.99"
                  description="4 palitos de mozzarella, 4 chiles jalapeños poppers, 2 tiras de pollo y 4 aros de cebolla."
                />
              </div>
              <MenuItem name="Pegatinas de olla" price="11.99" />
              <MenuItem
                name="Rollos de huevo"
                price="4.95"
                description="Pollo o Verduras"
              />
              <MenuItem name="Aros de cebolla" price="8.50" />
            </div>
            <div>
              <img
                src={chipsAndSalsaImage}
                alt="chips and salsa"
                class="hidden md:block -mt-6 ml-8 -z-10 max-w-96"
              />
              <MenuItem
                name="Plato degustación mexicano"
                price="15.99"
                description="Taquitos, Nachos, Jalapeño poppers, y 1/2 Quesadilla."
              />
              <MenuItem name="Papas fritas o papas fritas rizadas" price="7.00" />
            </div>
          </div>
        </div>
      </div>

      <!-- Beverages Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Bebidas" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div>
            <MenuItem name="Café" price="3.00" />
            <MenuItem name="Té caliente" price="3.00" />
            <MenuItem name="Chocolate caliente" price="4.00" />
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">Té helado</h4>
              <p class="">
                Sin azúcar 3.00 <br />
                Melocotón, mango o frambuesa 5.00 <br />
                Arnold Palmer 4.50
              </p>
            </div>
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">
                Horchata 3.50
              </h4>
              <p class="">Bebida mexicana hecha a base de arroz y canela.</p>
              <p class="text-[#7f1d1d] font-semibold">*No se vuelve a servir.</p>
            </div>
          </div>
          <img
            src={beverageImage}
            alt="a milkshake"
            class="hidden place-self-center md:block max-w-52 -mt-2 -z-10"
          />
          <div>
            <MenuItem name="Leche" description="Pequeño 2.00 / Grande 3.50" />
            <MenuItem name="Jugo" description="Pequeño 2.00 / Grande 4.00" />
            <MenuItem
              name="Leche con chocolate"
              description="Pequeño 3.00 / Grande 4.50"
            />
            <div class="mx-4">
              <h4 class="text-[#7f1d1d] font-semibold text-xl">Refresco 3.50</h4>
              <p class="">
                Coca-Cola, Sprite, cerveza de raíz, Dr. Pepper, Coca-Cola Light y limonada
              </p>
              <p class="text-[#7f1d1d] font-semibold">
                *Una recarga gratis; recargas adicionales 1.00.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Beer & Wine Section -->
      <div class="mb-6 text-center">
        <MenuSectionHeader category="Cerveza y Vino" />
        <div class="grid md:grid-cols-3 gap-1 text-center md:text-left">
          <div class="grid md:grid-cols-2 space-y-4">
            <div class="w-96">
              <div class="mx-4">
                <h4 class="text-[#7f1d1d] font-semibold text-xl">
                  Cerveza nacional 6.00
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
                  Cerveza importada 6.00
                </h4>
                <p class="">
                  Negra Modelo <br />
                  Modelo Especial <br />
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
                  Blancos 7.00
                </h4>
                <p class="">
                  White Zinfandel <br />
                  Chardonnay <br />
                  Pinot Grigio
                </p>
              </div>
              <div class="mx-4">
                <h4 class="text-[#7f1d1d] font-semibold text-xl z-1">
                  Rojos 7.00
                </h4>
                <p class="">
                  Merlot <br />
                  Zinfandel <br />
                  Sangría <br />
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
                description="Fresa o lima"
              />
              <MenuItem name="Mimosa" description="Pequeño 7.95 / Grande 13.00" />
              <MenuItem
                name="Michelada"
                price="9.95"
                description="Tu elección de cerveza"
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
          <MenuSectionHeader category="Lados adicionales" />
          <div class="grid md:grid-cols-2 text-left mt-6 px-6">
            <MenuExtras name="4 salchichas o 4 tocino" price="5.50" />
            <MenuExtras name="Hamburguesa" price="6.00" />
            <MenuExtras name="2 hamburguesas de salchicha o jamón" price="5.50" />
            <MenuExtras name="1 huevo" price="2.75" />
            <MenuExtras name="Tostada, galleta o panecillo inglés" price="3.00" />
            <MenuExtras name="Bagel y queso crema" price="5.50" />
            <MenuExtras name="Papas fritas caseras o papas fritas" price="6.00" />
            <MenuExtras name="Taza de fruta" price="6.25" />
            <MenuExtras name="Taza de chile" price="5.99" />
            <MenuExtras name="Taza de sopa" price="5.50" />
            <MenuExtras name="Ensalada para la cena" price="5.50" />
            <MenuExtras name="Taza de salsa campestre" price="3.00" />
            <MenuExtras name="Vinagreta" price="1.50" />
            <MenuExtras name="Lado de crema agria" price="1.50" />
          </div>
        </div>
        <!-- A La Carte Mexican Section -->
        <div class="mb-6 text-center">
          <MenuSectionHeader category="Comida mexicana a la carta" categoryDescription="Sus opciones de carne: pollo, carne molida o carne desmenuzada."/>
          <div class="grid grid-cols-2 text-left px-6">
            <MenuExtras name="Enchilada" price="6.50" />
            <MenuExtras name="Taco regular" price="5.00" />
            <MenuExtras name="Tamal" price="7.50" />
            <MenuExtras name="Quesadilla" price="10.99" />
            <MenuExtras name="Sope" price="6.50" />
            <MenuExtras name="Chile Relleno" price="8.50" />
            <MenuExtras name="Chimichanga" price="10.99" />
            <MenuExtras name="Tres Taquitos" price="10.99" />
            <MenuExtras name="Arroz y frijoles" price="6.00" />
            <MenuExtras name="Tortillas de Maíz / Harina" price="1.50" />
            <MenuExtras name="Jalapeño a la parrilla" price="1.00" />
            <MenuExtras name="Lado del Aguacate" price="2.50" />
            <MenuExtras name="Pico de Gallo" price="1.75" />
            <MenuExtras name="Salsa (chipotle, habanero o tomatillo)" price="1.75" />
            <MenuExtras name="Tacos especiales (carne asada, carnitas, chile verde, pescado o camarones)" price="6.00" />
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Buttons -->
    <MenuNavButtonsEs previousPageNum="4" nextPageNum="6" />
  </div>
</div>
