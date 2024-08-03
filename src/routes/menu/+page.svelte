<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Menu1 from '$lib/assets/img/menu1.jpg';
    import Menu2 from '$lib/assets/img/menu2.jpg';
    import Menu3 from '$lib/assets/img/menu3.jpg';
    import Menu4 from '$lib/assets/img/menu4.jpg';
    import Menu5 from '$lib/assets/img/menu5.jpg';
</script>

<div class="carousel w-2/3 p-10">
  <div id="slide1" class="carousel-item relative w-full">
    <img
      src={Menu1}
      alt="Lucio's Menu Page 1"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" class="btn btn-circle">❮</a>
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" class="carousel-item relative w-full">
    <img
      src={Menu2}
      alt="Lucio's Menu Page 2"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" class="btn btn-circle">❮</a>
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" class="carousel-item relative w-full">
    <img
      src={Menu3}
      alt="Lucio's Menu Page 3"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" class="btn btn-circle">❮</a>
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" class="carousel-item relative w-full">
    <img
      src={Menu4}
      alt="Lucio's Menu Page 4"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" class="btn btn-circle">❮</a>
      <a href="#slide5" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" class="carousel-item relative w-full">
    <img
      src={Menu5}
      alt="Lucio's Menu Page 5"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" class="btn btn-circle">❮</a>
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>