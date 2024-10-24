import { supabaseClient } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabaseClient.from('specials').select().order('sort').order('nameEn', {ascending: true})
  return {
    specials: data ?? [],
  }
}
