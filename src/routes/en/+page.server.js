import { supabase } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabase.from('specials').select().is('active', true)
  return {
    specials: data ?? [],
  }
}
