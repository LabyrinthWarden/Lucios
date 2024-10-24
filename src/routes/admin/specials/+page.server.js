import { supabase } from '$lib/supabaseClient'

export async function load() {
  const { data } = await supabase.from('specials').select().order('sort').order('nameEn', {ascending: true})
  return {
    specials: data ?? [],
  }
}
