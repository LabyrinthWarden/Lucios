/** @type {import('./$types').PageLoad} */
export async function load() {
    const menu = [
      {
        category: 'Three Egg Omelettes',
        category_note:
          'Served with hash browns or home fries and a choice of toast or pancakes',
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
      }
    ]
    
    return {
        menu
    };
};