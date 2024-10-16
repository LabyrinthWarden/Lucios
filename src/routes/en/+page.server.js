import { error, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
  const getActiveSpecials = async () => {
    try {
      const specials = await locals.pb
        .collection('specials')
        .getFullList(undefined, {
          filter: 'active =  true',
        })

      return specials
    } catch (err) {
      console.log('Error: ', err)
      throw error(err.status, err.message)
    }
  }

  return {
    specials: await getActiveSpecials(),
  }
}
