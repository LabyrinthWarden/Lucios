export async function load({ locals }) {
  const categories = await locals.pb.collection('menu_categories').getFullList({})
  const menuItems = await locals.pb.collection('menu_items').getFullList({})
  return { categories, menuItems }
}
