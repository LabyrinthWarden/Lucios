export async function load({ locals }) {
  const menuItems = await locals.pb.collection('menu_items').getFullList({
    filter: 'active = true',
    sort: 'category,sort_order_in_category',
  })
  return { menuItems }
}
