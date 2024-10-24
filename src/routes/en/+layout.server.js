import { supabaseClient } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabaseClient.from('messages').select('messageEn').is('active', true).limit(1).single()
  return {
    messages: data ?? [],
  }
}
