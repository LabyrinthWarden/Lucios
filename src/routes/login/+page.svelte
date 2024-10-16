<script>
  export let form
</script>

<div class="flex flex-col items-center h-screen w-full bg-neutral text-neutral-content">
  <h2
    class="mt-2 text-center text-3xl font-bold tracking-tight"
  >
    Login to your account
  </h2>

  <form
    action="?/login"
    method="POST"
    class="flex flex-col items-center space-y-2 w-full pt-4"
  >
    <div class="form-control w-full max-w-md">
      <label for="username" class="label font-medium pb-1">
        <span class="label-text text-neutral-content">Username</span>
      </label>
      <input
        type="text"
        name="username"
        class="input input-bordered w-full max-w-md text-base-content"
      />
    </div>
    <div class="form-control w-full max-w-md">
      <label for="password" class="label font-medium pb-1">
        <span class="label-text text-neutral-content">Password</span>
      </label>
      <input
        type="password"
        name="password"
        class="input input-bordered w-full max-w-md text-base-content"
      />
    </div>
    <div class="w-full max-w-md pt-2">
      <button type="submit" class="btn btn-primary w-full">Login</button>
    </div>
  </form>
</div>
