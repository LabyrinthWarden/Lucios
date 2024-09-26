<script>
  import heroImage from '$lib/assets/img/hero.jpg'

</script>

<div class="hero min-h-screen" style="background-image: url({heroImage});">
  <div class="hero-overlay bg-opacity-90"></div>

  <div class="hero-content text-neutral-content text-center grid grid-cols-1">
    <h2 class="text-6xl title-text">Welcome to Lucio's</h2>
    <p class="subtitle-text">
      Please choose your language. | Por favor seleccione su idioma.
    </p>
    <div>
      <a href="/en"><button class="btn btn-success">English</button></a>
      <a href="/es"><button class="btn btn-success">Español</button></a>
    </div>
  </div>
</div>
