import { error, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login')
  }

  const getAllSpecials = async () => {
    try {
      const specials = await locals.pb
        .collection('specials')
        .getFullList(undefined, {})

      return specials
    } catch (err) {
      console.log('Error: ', err)
      throw error(err.status, err.message)
    }
  }

  return {
    specials: await getAllSpecials(),
  }
}
