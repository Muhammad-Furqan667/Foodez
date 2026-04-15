export type ItemVariant = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
};

export type Category = {
  id: string;
  title: string;
  type: 'burger' | 'pizza' | 'pasta' | 'coffee' | 'default';
  coverImage: string;
  description: string;
  variants: ItemVariant[];
};

export const categoriesData: Category[] = [
  {
    id: "cat_burger",
    title: "Epic Burgers",
    type: "burger",
    coverImage: "/burger_smoky.png",
    description: "Premium handcrafted burgers with soft buns and juicy patties.",
    variants: [
      { id: "b1", name: "Classic Cheeseburger", price: "Rs. 1,250", image: "/burger_smoky.png", description: "Juicy beef patty, melted cheddar, lettuce, and tomato." },
      { id: "b2", name: "Double Smash Burger", price: "Rs. 1,850", image: "/burger_smoky.png", description: "Two smashed beef patties, caramelized onions, and signature sauce." },
      { id: "b3", name: "Spicy Chicken Burger", price: "Rs. 1,400", image: "/burger_smoky.png", description: "Crispy fried chicken breast, spicy mayo, and pickles." }
    ]
  },
  {
    id: "cat_pizza",
    title: "Artisan Pizza",
    type: "pizza",
    coverImage: "/pizza_clean.png",
    description: "Wood-fired crusts with premium toppings.",
    variants: [
      { id: "p1", name: "Chicken Tikka Special", price: "Rs. 2,450", image: "/pizza_clean.png", description: "Tandoori chicken, red onions, and fresh cilantro on bubbly crust." },
      { id: "p2", name: "Cheesy Pepperoni", price: "Rs. 2,650", image: "/pizza_clean.png", description: "Beef pepperoni with triple mozzarella blend." },
      { id: "p3", name: "Garden Veggie", price: "Rs. 1,950", image: "/pizza_clean.png", description: "Bell peppers, olives, mushrooms, and sweet corn." },
      { id: "p4", name: "Sriracha Hot Pizza", price: "Rs. 2,850", image: "/pizza_clean.png", description: "Spicy chicken with sriracha drizzle and jalapeños." }
    ]
  },
  {
    id: "cat_pasta",
    title: "Artisan Pasta",
    type: "pasta",
    coverImage: "/pasta_clean.png",
    description: "Authentic Italian pasta crafted with fresh ingredients.",
    variants: [
      { id: "s1", name: "Spaghetti Carbonara", price: "Rs. 1,850", image: "/pasta_clean.png", description: "Classic Roman pasta with beef bacon, egg, and pecorino." },
      { id: "s2", name: "Penne Arrabbiata", price: "Rs. 1,450", image: "/pasta_clean.png", description: "Spicy tomato sauce with garlic and dried red chili peppers." },
      { id: "s3", name: "Fettuccine Alfredo", price: "Rs. 1,750", image: "/pasta_clean.png", description: "Rich and creamy parmesan cheese sauce with butter." },
      { id: "s4", name: "Lasagna Bolognese", price: "Rs. 2,250", image: "/pasta_clean.png", description: "Layered pasta with slow-cooked meat ragu and béchamel." }
    ]
  },
  {
    id: "cat_coffee",
    title: "Premium Coffee",
    type: "coffee",
    coverImage: "/coffee_clean.png",
    description: "Expertly roasted beans for your perfect cup.",
    variants: [
      { id: "c1", name: "Cappuccino", price: "Rs. 750", image: "/coffee_clean.png", description: "20% espresso, 40% milk, 40% foam." },
      { id: "c2", name: "Latte", price: "Rs. 850", image: "/coffee_clean.png", description: "30% espresso, 70% steamed milk." },
      { id: "c3", name: "Mocha", price: "Rs. 950", image: "/coffee_clean.png", description: "20% espresso, 50% milk, 30% chocolate." }
    ]
  }
];
