import { supabase } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabase.from('messages').select('messageEn').is('active', true).limit(1).single()
  return {
    messages: data ?? [],
  }
}
