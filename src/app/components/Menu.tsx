import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const menuCategories = [
  {
    name: 'Soups',
    items: [
      { name: 'Veg Clear Soup', price: '100', category: 'Veg' },
      { name: 'Coriander Soup', price: '100', category: 'Veg' },
      { name: 'Tomato Soup', price: '100', category: 'Veg' },
      { name: 'Veg Hot & Sour Soup', price: '120', category: 'Veg' },
      { name: 'Mushroom Soup', price: '120', category: 'Veg' },
      { name: 'Chicken Clear Soup', price: '130', category: 'Non Veg' },
      { name: 'Chicken Manchow Soup', price: '140', category: 'Non Veg' },
      { name: 'Chicken Hot & Sour Soup', price: '140', category: 'Non Veg' },
    ]
  },
  {
    name: 'Starters (Veg)',
    items: [
      { name: 'Gobi Manchurian', price: '90' },
      { name: 'Gobi Chilli', price: '120' },
      { name: 'Gobi 65', price: '120' },
      { name: 'Paneer Manchurian', price: '180' },
      { name: 'Paneer Chilli', price: '180' },
      { name: 'Paneer 65', price: '180' },
      { name: 'Paneer Pepper Dry', price: '200' },
      { name: 'Hyderabadi Paneer Dry', price: '220' },
      { name: 'Paneer Tikka', price: '220' },
      { name: 'Mushroom Manchurian', price: '180' },
      { name: 'Mushroom Chilli', price: '180' },
      { name: 'Mushroom 65', price: '180' },
      { name: 'Mushroom Pepper Dry', price: '200' },
      { name: 'Hyderabadi Mushroom', price: '220' },
      { name: 'Babycorn Chilli', price: '180' },
      { name: 'Babycorn 65', price: '180' },
      { name: 'Babycorn Pepper Dry', price: '200' },
    ]
  },
  {
    name: 'Starters (Non Veg)',
    items: [
      { name: 'Chicken Kabab', price: '110/200' },
      { name: 'Chicken Lollipop', price: '180' },
      { name: 'Drums of Heaven', price: '180' },
      { name: 'Chicken Pepper Dry', price: '240' },
      { name: 'Chicken Pepper Fry (with Gravy)', price: '240' },
      { name: 'Chicken Manchurian', price: '220' },
      { name: 'Schezwan Chicken', price: '220' },
      { name: 'Chicken 555', price: '220' },
      { name: 'Ginger Chicken', price: '240' },
      { name: 'Chicken Chilli', price: '240' },
      { name: 'Dragon Chicken', price: '240' },
      { name: 'Chilli Chicken', price: '240' },
      { name: 'Chicken Majestic', price: '240' },
    ]
  },
  {
    name: 'Starters (Egg)',
    items: [
      { name: 'Egg Omelette', price: '50' },
      { name: 'Egg Bhurji', price: '60' },
      { name: 'Egg Poddi', price: '80' },
      { name: 'Egg Kalaki', price: '100' },
      { name: 'Egg Manchurian', price: '120' },
    ]
  },
  {
    name: 'Bread',
    items: [
      { name: 'Kulcha', price: '10' },
      { name: 'Chapathi', price: '15' },
      { name: 'Porotta', price: '20' },
      { name: 'Naan', price: '20' },
      { name: 'Puttu', price: '40' },
    ]
  },
  {
    name: 'Roti & Naan',
    items: [
      { name: 'Tandoori Roti', price: '20' },
      { name: 'Butter Roti', price: '20' },
      { name: 'Rumali Roti', price: '25' },
      { name: 'Naan', price: '30' },
      { name: 'Butter Naan', price: '40' },
      { name: 'Methi Naan', price: '40' },
      { name: 'Garlic Naan', price: '40' },
      { name: 'Kulcha', price: '30' },
      { name: 'Stuffed Kulcha', price: '40' },
    ]
  },
  {
    name: 'Indian Veg Gravy',
    items: [
      { name: 'Daal Fry', price: '80' },
      { name: 'Mushroom Masala', price: '200' },
      { name: 'Veg Kurma', price: '180' },
      { name: 'Mushroom Kadai', price: '200' },
      { name: 'Paneer Masala', price: '190' },
      { name: 'Paneer Butter Masala', price: '200' },
      { name: 'Paneer Kadai', price: '180' },
      { name: 'Kaju Paneer', price: '220' },
      { name: 'Mix Curry', price: '200' },
      { name: 'Veg Mix Masala', price: '180' },
      { name: 'Hyderabadi Veg Masala', price: '200' },
    ]
  },
  {
    name: 'Indian Non Veg Gravy',
    items: [
      { name: 'Egg Masala', price: '90' },
      { name: 'Chicken Curry', price: '120/200' },
      { name: 'Chicken Kassa', price: '220' },
      { name: 'Chicken Masala', price: '220' },
      { name: 'Chicken Kadai', price: '240' },
      { name: 'Methi Chicken', price: '220' },
      { name: 'Kadai Chicken', price: '220' },
      { name: 'Egg Curry', price: '80' },
      { name: 'Butter Chicken', price: '240' },
      { name: 'Chicken Kohapuri', price: '240' },
      { name: 'Chicken Mughlai', price: '240' },
      { name: 'Mglani Chicken', price: '240' },
      { name: 'Hyderabadi Chicken', price: '240' },
      { name: 'Chicken Tikka Masala', price: '260' },
    ]
  },
  {
    name: 'Biryani & Rice',
    items: [
      { name: 'Malabar Mutton Biryani', price: '290' },
      { name: 'Malabar Chicken Biryani', price: '160' },
      { name: 'Egg Biryani', price: '130' },
      { name: 'Veg Biryani', price: '120' },
      { name: 'Mushroom Biryani', price: '130' },
      { name: 'Biryani Rice', price: '100' },
      { name: 'Ghee Rice', price: '90' },
    ]
  },
  {
    name: 'Fried Rice',
    items: [
      { name: 'Veg Fried Rice', price: '100' },
      { name: 'Mushroom Fried Rice', price: '120' },
      { name: 'Chicken Fried Rice', price: '120' },
      { name: 'Egg Fried Rice', price: '120' },
      { name: 'Chicken Fried Rice', price: '140' },
      { name: 'Schezwan', price: '20 extra' },
    ]
  },
  {
    name: 'Tandoor Items',
    items: [
      { name: 'Tandoori Chicken', price: '240/440' },
      { name: 'Kalmi Kebab', price: '120' },
      { name: 'Tandoori Kabab', price: '180' },
      { name: 'Hyderabadi Kabab', price: '220' },
      { name: 'Seekh Kabab', price: '220' },
      { name: 'Banjara Kabab', price: '220' },
      { name: 'Malai Tikka', price: '220' },
      { name: 'Chicken Tikka', price: '220' },
      { name: 'Tandoori Platter', price: '1199' },
    ]
  },
  {
    name: 'Barbeques',
    items: [
      { name: 'Peri Peri Alfaham', price: '130/240/440' },
      { name: 'Alfaham', price: '130/240/440' },
      { name: 'Pepper Alfaham', price: '150/280/540' },
      { name: 'Lemon Alfaham', price: '150/280/540' },
      { name: 'Hot Wings', price: '120/200' },
      { name: 'Peri Peri Wings', price: '120/200' },
    ]
  },
  {
    name: 'Noodles',
    items: [
      { name: 'Veg Noodles', price: '100' },
      { name: 'Egg Noodles', price: '120' },
      { name: 'Chicken Noodles', price: '140' },
      { name: 'Schezwan', price: '20 extra' },
    ]
  },
  {
    name: 'Shawarma',
    items: [
      { name: 'Kuboos Roll', price: '80' },
      { name: 'Rumali Roll', price: '90' },
      { name: 'Kuboos Plate', price: '110' },
      { name: 'Rumali Plate', price: '120' },
      { name: 'Cheese', price: '20 extra' },
    ]
  },
  {
    name: 'Fresh Juice',
    items: [
      { name: 'Musama', price: '40' },
      { name: 'Watermelon', price: '40' },
      { name: 'Grape', price: '40' },
      { name: 'Orange', price: '40' },
      { name: 'Pineapple', price: '50' },
      { name: 'Watermelon', price: '50' },
      { name: 'Chikku', price: '50' },
    ]
  },
  {
    name: 'Pure Juice',
    items: [
      { name: 'Musama', price: '70' },
      { name: 'Watermelon', price: '70' },
      { name: 'Grape', price: '80' },
      { name: 'Orange', price: '80' },
      { name: 'Pineapple', price: '80' },
      { name: 'Citrus', price: '80' },
      { name: 'Carrot', price: '80' },
      { name: 'Cucumber', price: '70' },
      { name: 'ABC', price: '80' },
    ]
  },
  {
    name: 'Lemonade/Soda',
    items: [
      { name: 'Lime Juice', price: '25' },
      { name: 'Sweet Lime', price: '30' },
      { name: 'Ginger Lime', price: '30' },
      { name: 'Mojito', price: '30' },
      { name: 'Lime Soda', price: '30' },
      { name: 'Mint Lime Soda', price: '40' },
      { name: 'Ginger Soda', price: '40' },
      { name: 'Orange Soda', price: '40' },
      { name: 'Grape Soda', price: '40' },
      { name: 'Lemonade', price: '40' },
      { name: 'Kandhari Soda', price: '40' },
      { name: 'Mexican Chilli Soda', price: '40' },
    ]
  },
  {
    name: 'Shakes',
    items: [
      { name: 'Apple', price: '60' },
      { name: 'Mango', price: '60' },
      { name: 'Papaya', price: '60' },
      { name: 'Watermelon', price: '60' },
      { name: 'Pomegranate', price: '60' },
      { name: 'Chikku', price: '60' },
      { name: 'Sharjah', price: '78' },
      { name: 'Avocado', price: '70' },
      { name: 'Strawberry', price: '70' },
      { name: 'Kitkat', price: '70' },
      { name: 'Dragon', price: '70' },
    ]
  },
  {
    name: 'Special Shakes',
    items: [
      { name: 'Dry Fruit', price: '90' },
      { name: 'Sqush', price: '80' },
      { name: 'Oreo', price: '70' },
      { name: 'Bourbon', price: '70' },
      { name: 'Milo Galaxy', price: '80' },
      { name: 'Kitkat', price: '80' },
      { name: 'Snickers', price: '80' },
      { name: 'Dairy Milk', price: '80' },
      { name: 'White Chocolate', price: '80' },
      { name: 'Dark Chocolate', price: '80' },
    ]
  },
  {
    name: 'Mojitos',
    items: [
      { name: 'Pineapple', price: '90' },
      { name: 'Strawberry', price: '90' },
      { name: 'Blue Lagoon', price: '90' },
      { name: 'Black Current', price: '90' },
      { name: 'Green Apple', price: '90' },
      { name: 'Lemon', price: '90' },
      { name: 'Pomegranate', price: '90' },
      { name: 'Watermelon', price: '90' },
      { name: 'Musama', price: '80' },
      { name: 'Virgin', price: '80' },
      { name: 'Passion Fruit', price: '80' },
      { name: 'Blueberry', price: '100' },
    ]
  },
  {
    name: 'Lassi',
    items: [
      { name: 'Dry Fruit', price: '40' },
      { name: 'Mango', price: '60' },
      { name: 'Strawberry', price: '60' },
      { name: 'Orange', price: '60' },
      { name: 'Banana', price: '60' },
      { name: 'Chocolate', price: '60' },
      { name: 'Sweet Lassi', price: '60' },
      { name: 'Fruit Mix', price: '70' },
      { name: 'Dry Fruit', price: '80' },
    ]
  },
  {
    name: 'Ice Cream Milkshake',
    items: [
      { name: 'Vanilla', price: '80' },
      { name: 'Strawberry', price: '80' },
      { name: 'Pista', price: '90' },
      { name: 'Mango', price: '90' },
      { name: 'Chocolate', price: '90' },
      { name: 'Butter Scotch', price: '90' },
      { name: 'Anjir', price: '90' },
    ]
  },
  {
    name: 'Ice Cream Scoops',
    items: [
      { name: 'Vanilla', price: '50' },
      { name: 'Strawberry', price: '50' },
      { name: 'Pista', price: '50' },
      { name: 'Mango', price: '50' },
      { name: 'Chocolate', price: '50' },
      { name: 'Butter Scotch', price: '50' },
      { name: 'Black Current', price: '50' },
    ]
  },
  {
    name: 'Falooda',
    items: [
      { name: 'Fruit Salad', price: '90' },
      { name: 'Crud Bud', price: '100' },
      { name: 'Kulfi Falooda', price: '110' },
      { name: 'Bombay Falooda', price: '110' },
      { name: 'Royal Falooda', price: '130' },
      { name: 'Paris Special Falooda', price: '140' },
      { name: 'Dry Fruits Falooda', price: '160' },
    ]
  },
  {
    name: 'Avil Milk',
    items: [
      { name: 'Avil Milk', price: '70' },
      { name: 'Avil Milk with Ice Cream', price: '80' },
    ]
  },
  {
    name: 'French Fries',
    items: [
      { name: 'French Fries', price: '80' },
      { name: 'Peri Peri French Fries', price: '90' },
    ]
  },
  {
    name: 'Burger',
    items: [
      { name: 'Veg Burger', price: '90' },
      { name: 'Egg Burger', price: '110' },
      { name: 'Chicken Burger', price: '130' },
    ]
  },
  {
    name: 'Sandwich',
    items: [
      { name: 'Veg Sandwich', price: '60' },
      { name: 'Egg Sandwich', price: '70' },
      { name: 'Chicken Sandwich', price: '90' },
      { name: 'Veg Grill Sandwich', price: '90' },
      { name: 'Club Egg Sandwich', price: '110' },
      { name: 'Club Chicken Sandwich', price: '140' },
    ]
  },
];

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...menuCategories.map(cat => cat.name)];

  const displayedCategories = selectedCategory === 'All'
    ? menuCategories
    : menuCategories.filter(cat => cat.name === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our extensive selection of authentic dishes from soups to desserts
          </p>
        </div>

        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-3 pb-4 min-w-max justify-center flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {displayedCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl mb-6 text-orange-600 border-b-2 border-orange-200 pb-3">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex justify-between items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h4 className="text-gray-800">{item.name}</h4>
                      {item.category && (
                        <span className="text-xs text-gray-500 mt-1 inline-block">
                          {item.category}
                        </span>
                      )}
                    </div>
                    <span className="text-orange-600 ml-4 whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
