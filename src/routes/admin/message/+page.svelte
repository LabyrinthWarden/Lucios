<script>
  import { supabaseClient } from '$lib/supabaseClient'
  import { enhance } from '$app/forms'
  export let data

  const message = data.messages[0]

  //   // Function to save the message
  // async function saveMessage(id, currentStatus, messageEn, messageEs) {
  //   try {
  //     const { data, error } = await supabaseClient
  //       .from('messages')
  //       .update({ active: currentStatus, messageEn: messageEn, messageEs: messageEs })
  //       .eq('id', id)
  //       .select()

  //     if (error) {
  //       console.error('Error updating special:', error)
  //       // Consider showing a user-friendly error message (e.g., with a toast notification)
  //       throw error // Re-throw the error to potentially handle it elsewhere
  //     }
  //   } catch (error) {
  //     console.error('Error in toggleActive:', error)
  //   }
  // }
</script>

<div class="grid grid-cols-1 place-items-center mt-10 mb-5 w-full">
  <h3 class="text-4xl title-text">Site Message</h3>
</div>

<div class="flex flex-col w-full h-full p-2 items-center">
  <div class="w-full">
    <form
      action=""
      method="post"
      class="flex flex-col space-y-4 w-full items-center"
      enctype="multipart/form-data"
    >
    <input type="hidden" name="id" value={message.id}>
      <div class="form-control w-2/3 text-center">
        <label for="messageEn" class="text-xl">English</label>
        <input
          type="text"
          id="messageEn"
          name="messageEn"
          class="textarea textarea-warning w-full"
          value={message.messageEn}
        />
      </div>
      <div class="form-control w-2/3 text-center">
        <label for="messageEs" class="text-xl">Spanish</label>
        <input
          type="text"
          id="messageEs"
          name="messageEs"
          class="textarea textarea-warning w-full"
          value={message.messageEs}
        />
      </div>
      <div class="form-control flex flex-row gap-3">
        <input
          type="checkbox"
          id="active"
          name="active"
          class="checkbox checkbox-success"
          checked={message.active}
        /><label for="active" class="text-xl">Active</label>
      </div>
      <!-- <button class="btn btn-success w-24 text-success-content" on:click={saveMessage(message.id, message.active, message.messageEn, message.messageEs)}
        >Save</button
      > -->
      <button type="submit" class="btn btn-success w-24 text-success-content"
        >Save</button
      >
    </form>
  </div>
</div>
