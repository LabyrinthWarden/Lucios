// src/routes/admin/+page.server.js
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
  // Protect this route: if no user, redirect to login
  if (!locals.user) {
    console.log('[ADMIN PAGE LOAD] No user found, redirecting to /login.')
    throw redirect(303, '/login')
  }

  console.log('[ADMIN PAGE LOAD] User authenticated, loading admin data. User ID:', locals.user.id)
  // User is authenticated, proceed to load admin-specific data
  const menu = await locals.pb.collection('menu').getFullList()
  const specials = await locals.pb.collection('courses').getFullList({ sort: 'nameEn' })

  // `user` object is already provided by `+layout.server.js` to `data.user`
  return { events, courses, posts, boardMeetings, boardMembers }
}
