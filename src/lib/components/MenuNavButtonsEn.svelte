<script>
    export let previousPageNum = ''
    export let nextPageNum = ''

</script>

<div class="relative">
  <div
    class="fixed left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
  >
    <a href="/en/menu/page{previousPageNum}" class="btn btn-circle">❮</a>
    <a href="/en/menu/page{nextPageNum}" class="btn btn-circle">❯</a>
  </div>
</div>
