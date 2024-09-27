<script>
  /** @type {import('./$types').PageData} */
  export let data
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h2 class="text-6xl title-text">Menu & Pricing</h2>
</div>

<div class="carousel w-full">
  <div id="page1" class="carousel-item relative w-full">
    <div class='w-full'>
      <div class="grid grid-cols-1 w-full border">
        <h3
          class="w-full mx-auto text-3xl text-warning text-semibold small-caps"
        >
          Three Egg Omelette
        </h3>
        <p class="w-full mx-auto">
          Served with hash browns or home fries and a choice of toast or
          pancakes
        </p>
      </div>

      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#page4" class="btn btn-circle">❮</a>
        <a href="#page2" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  <div id="page2" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full"
    />
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
