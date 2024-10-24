import { supabaseClient } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabaseClient.from('messages').select()
  return {
    messages: data ?? [],
  }
}

export const actions = {
  default: async ({ request }) => {
    const body = request.formData()

    try {
      const { data, error } = await supabase
        .from('messages')
        .update({
          active: body.active,
          messagesEn: body.messagesEn,
          messagesEs: body.messagesEs,
        })
        .eq('id', body.id)
    } catch (error) {
      console.error('Error in toggleActive:', error)
    }
  },
}
