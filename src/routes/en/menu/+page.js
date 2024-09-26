/** @type {import('./$types').PageLoad} */
export async function load() {
  const menu = [
    {
      category: {
        name: 'Three Egg Omelettes',
        note: 'Served with hash browns or home fries and a choice of toast or pancakes',
        dishes: [
          {
            name: 'Express',
            description:
              'Italian sausage, mushrooms, tomatoes, spinach, Jack cheese, and a homemade salsa',
            price: 16.0,
          },
          {
            name: 'Carne Asada',
            description:
              'Grilled top sirloin steak, mushrooms, onions, bell peppers, Jack cheese, a side of pico, and topped with guacamole',
            price: 16.0,
          },
          {
            name: 'Vegetarian',
            description: 'Grilled fresh vegetables with your choice of cheese',
            price: 15.0,
          },
          {
            name: 'Denver',
            description: 'Ham, onions, bell peppers, and cheddar cheese',
            price: 15.5,
          },
          {
            name: 'California',
            description:
              'Bacon, tomatoes, cheddar cheese, and topped with avocados',
            price: 15.5,
          },
          {
            name: 'Seafood',
            description:
              'A mix of sauteed shrimp, scallops, crab, and fish, Jack cheese, and topped with our creamy Hollandaise sauce',
            price: 16.0,
          },
          {
            name: 'Spinach',
            description: 'Fresh spinach, mushrooms, and cream cheese',
            price: 15.5,
          },
          {
            name: 'Turkey',
            description:
              'Pulled turkey, tomatoes, mushrooms, Jack cheese, and topped with our creamy Hollandaise sauce',
            price: 16.0,
          },
          {
            name: 'Chili Bean',
            description:
              'Our award-winning chili beans, topped with cheddar chees and onions',
            price: 15.5,
          },
          {
            name: 'Ham, Bacon, or Sausage',
            description: 'With choice of cheese and onions',
            price: 14.5,
          },
        ],
      },
    },
    {
      category: {
        name: 'American Favorites',
        note: 'Served with hash browns or home fries, and a choice of toast, biscuit, or pancakes',
        dishes: [
          {
            name: 'Steak',
            description: 'New yor Steam served with two eggs',
            price: 20.99,
          },
          {
            name: 'Pork Chops',
            description: 'Two pork chops served with two eggs',
            price: 18.5,
          },
          {
            name: 'Veggie Mix',
            description: 'Fresh vegetables with mixed cheese.',
            price: 14.5,
          },
          {
            name: 'Lite Breakfast',
            description:
              'Choice of two pieces of bacon, two sausage links, or one sausage patty, served with one egg.',
            price: 10.95,
          },
          {
            name: 'Two Eggs',
            description: '',
            price: 10.95,
          },
          {
            name: 'Chicken Fried Steak',
            description:
              'A golden-fried chopped beef steak served with two eggs.',
            price: 18.5,
          },
          {
            name: 'The House Favorite',
            description:
              'Two eggs, with choice of bacon, hot sausage patty, sausage patty, sausage links, Italian sausage, linguica, or ham.',
            price: 14.95,
          },
          {
            name: 'Corned Beef Hash',
            description: 'Our homemade corned beef has served with two eggs.',
            price: 14.95,
          },
          {
            name: 'Country Style',
            description:
              'Served with two eggs, choice of bacon or sausage, hash browns or home fries, and a half order of biscuits and gravy.',
            price: 15.95,
          },
          {
            name: 'Eggs Benedict',
            description:
              'Served with two poached eggs over ham on a toasted English muffin, topped with hollandaise sauce, and home fries or hash browns.',
            price: 15.99,
          },
        ],
      },
    },
    {
      category: {
        name: 'Skillets',
        note: 'With your choice of cheese.  Served with a half order of biscuits and gravy',
        dishes: [
          {
            name: 'American',
            description: 'Ham, onions, bell peppers, scrambled with eggs and served with hash browns.',
            price: 15.95,
          },
          {
            name: 'Alambre',
            description: 'Asada, bacon, and chorizo with onions and bell peppers, topped with two eggs and served with hash browns.',
            price: 15.95,
          },
          {
            name: 'Linguica',
            description: 'Linguica mixed with bell peppers, onions, topped with two eggs and served with home fries.',
            price: 15.99,
          },
          {
            name: 'Prime Rib',
            description: 'Prime rib, onions, bell peppers, and mushrooms, scrambled with two eggs and served with hash browns.',
            price: 15.95,
          },
        ],
      },
    },
  ]

  return {
    menu,
  }
}
