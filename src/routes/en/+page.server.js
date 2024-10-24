import { supabaseClient } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabaseClient.from('specials').select().is('active', true)
  return {
    specials: data ?? [],
  }
}
