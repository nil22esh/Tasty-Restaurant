const menu = [
  {
    id: 1,
    title: "Soup of the day",
    category: "starters",
    price: "$5",
    description: "Freshly made soup with seasonal ingredients",
    img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    title: "Bruschetta",
    category: "starters",
    price: "$7",
    description:
      "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella",
    img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg",
  },
  {
    id: 3,
    title: "Chicken Parmesan",
    category: "mains",
    price: "$12",
    description:
      "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti",
    img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=",
  },
  {
    id: 4,
    title: "Steak Frites",
    category: "mains",
    price: "$18",
    description: "Grilled steak served with french fries and salad",
    img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk=",
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    category: "desserts",
    price: "$8",
    description:
      "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream",
    img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478=",
  },
  {
    id: 6,
    title: "Apple Pie",
    category: "desserts",
    price: "$6",
    description:
      "Classic apple pie with a flaky crust, served with whipped cream",
    img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    title: "Vegan Burger",
    category: "mains",
    price: "$10",
    description: "Plant-based burger served with fries",
    img: "https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    title: "Caesar Salad",
    category: "starters",
    price: "$6",
    description:
      "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons",
    img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    title: "Spaghetti Carbonara",
    category: "mains",
    price: "$14",
    description:
      "Classic carbonara with pancetta, egg, hard cheese, and pepper",
    img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    title: "Tiramisu",
    category: "desserts",
    price: "$7",
    description:
      "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    title: "Iced Coffee",
    category: "beverages",
    price: "$4",
    description: "Chilled coffee served with ice and cream",
    img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=",
  },
  {
    id: 12,
    title: "Mango Lassi",
    category: "beverages",
    price: "$5",
    description: "Refreshing Indian drink made with mango and yogurt",
    img: "https://media.istockphoto.com/id/1217751214/photo/fresh-mango-lassi-and-mango-fruit.webp?b=1&s=170667a&w=0&k=20&c=Jt0J70BwVkGdirVAu78hKb-MiMzN3_GUbCz8SmGUdS8=",
  },
  {
    id: 13,
    title: "Green Tea",
    category: "beverages",
    price: "$3",
    description: "Traditional green tea with antioxidants",
    img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 14,
    title: "Cold Coffee",
    category: "beverages",
    price: "$4",
    description: "Iced coffee with a hint of chocolate",
    img: "https://images.unsplash.com/photo-1599937577325-e38f27f010db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    title: "Lemonade",
    category: "beverages",
    price: "$2",
    description: "Refreshing lemonade with a twist of mint",
    img: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGVtb25hZGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 16,
    title: "Smoothie",
    category: "beverages",
    price: "$5",
    description: "Mixed berry smoothie with yogurt",
    img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21vb3RoaWV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 17,
    title: "Chai Latte",
    category: "beverages",
    price: "$4",
    description: "Indian spiced tea with milk",
    img: "https://media.istockphoto.com/id/875067210/photo/reeky-masala-tea-chai-latte-traditional-hot-indian-teatime-ceremony-sweet-milk-with-spices.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xe1PUM69w3tst6R1b1ljjYSv0gNREZxOX5jg6a9DmBE=",
  },
  {
    id: 18,
    title: "Mango Shake",
    category: "beverages",
    price: "$3",
    description: "Creamy mango shake with a hint of vanilla",
    img: "https://media.istockphoto.com/id/904617420/photo/fresh-mango-smoothie-in-the-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=owVY4fKM9_0n5MNTJ32JpUX7R39Uk0OW2v3OToswNi0=",
  },
  {
    id: 19,
    title: "Espresso",
    category: "beverages",
    price: "$3",
    description: "Strong and rich espresso shot",
    img: "https://media.istockphoto.com/id/1145612951/photo/how-to-make-coffee-latte-art.webp?a=1&b=1&s=612x612&w=0&k=20&c=naAe7fACi95VeG3Vdw9RTTScyKmk2deUOKJce4Y4xss=",
  },
  {
    id: 20,
    title: "Herbal Tea",
    category: "beverages",
    price: "$2",
    description: "Soothing herbal tea with chamomile",
    img: "https://media.istockphoto.com/id/1199012475/photo/cup-of-tea-mint-and-lemon-on-dark-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=dHljzB8ONWS0D7RjYLecATQ3HTkZ6UQLYdMe1sKEGHQ=",
  },
  {
    id: 21,
    title: "Hot Chocolate",
    category: "beverages",
    price: "$4",
    description: "Rich hot chocolate topped with whipped cream",
    img: "https://media.istockphoto.com/id/521618573/photo/hot-chocolate.webp?a=1&b=1&s=612x612&w=0&k=20&c=_KfNWK7SLZm2SfEZ3HaEd4j76SDRX3moxfVCyvbSa0w=",
  },
  {
    id: 22,
    title: "Iced Tea",
    category: "beverages",
    price: "$3",
    description: "Cool and refreshing iced tea with lemon",
    img: "https://images.unsplash.com/photo-1531264071041-3a69924b182d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SWNlZCUyMFRlYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 23,
    title: "Chocolate Lava Cake",
    category: "desserts",
    price: "$8",
    description: "Warm chocolate cake with a gooey molten chocolate center",
    img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?a=1&b=1&s=612x612&w=0&k=20&c=LJLYYuVRRWLW2ODCdrF_Fcxrg-DVijWHnfzwtyehqCM=",
  },
  {
    id: 24,
    title: "Cheesecake",
    category: "desserts",
    price: "$6",
    description:
      "Classic New York-style cheesecake with a graham cracker crust",
    img: "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 25,
    title: "Macarons",
    category: "desserts",
    price: "$9",
    description:
      "Delicate French almond meringue cookies filled with buttercream or ganache",
    img: "https://plus.unsplash.com/premium_photo-1675806021714-8f33e130a28a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjYXJvbnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 26,
    title: "Crème Brûlée",
    category: "desserts",
    price: "$7",
    description:
      "Creamy custard base topped with a layer of hardened caramelized sugar",
    img: "https://media.istockphoto.com/id/494087606/photo/creme-brulee-with-fresh-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=l_WKypjEq6oSSFdZaCvO0G8ergYQWObQD_jmZuB8AMQ=",
  },
  {
    id: 27,
    title: "Panna Cotta",
    category: "desserts",
    price: "$6",
    description:
      "Silky Italian dessert made with cream, sugar, and gelatin, often served with a berry coulis",
    img: "https://images.unsplash.com/photo-1613505411792-208b15f862b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFubmElMjBDb3R0YXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 28,
    title: "Brownies",
    category: "desserts",
    price: "$5",
    description: "Rich and fudgy chocolate squares often served warm",
    img: "https://media.istockphoto.com/id/155598375/photo/dessert-chocolate-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=FIkAx7S85NyPoo714_oyeo1IEU92uhbRwk2ftbaGCc0=",
  },
  {
    id: 29,
    title: "Fruit Tart",
    category: "desserts",
    price: "$7",
    description:
      "Crispy tart crust filled with pastry cream and topped with fresh fruits",
    img: "https://images.unsplash.com/photo-1600477064324-92a31919ffd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnJ1aXQlMjBUYXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 30,
    title: "Mousse au Chocolat",
    category: "desserts",
    price: "$6",
    description: "Light and airy chocolate mousse topped with whipped cream",
    img: "https://media.istockphoto.com/id/497390376/photo/christmas-pie.webp?a=1&b=1&s=612x612&w=0&k=20&c=_sh3KhiZAbhNw-NI-4hzNkVBuSEzrRYU3NSvcl2XJgU=",
  },
  {
    id: 31,
    title: "Churros",
    category: "desserts",
    price: "$4",
    description:
      "Deep-fried dough sticks coated in cinnamon sugar, served with chocolate sauce",
    img: "https://media.istockphoto.com/id/1254754447/photo/close-up-image-of-patterned-blue-plate-with-greaseproof-paper-parchment-containing-fresh.webp?a=1&b=1&s=612x612&w=0&k=20&c=WLmeAc_hTCeXdReI_KxevYKE-Cuvhs3WsNQs7e7epBc=",
  },
  {
    id: 32,
    title: "Grilled Salmon",
    category: "mains",
    price: "$18",
    description:
      "A succulent, perfectly grilled Atlantic salmon fillet with a beautiful char",
    img: "https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AgidLz6RYOwAgDjKVOfDQhR6ePaRIRR6fcIM5Fp9P0A=",
  },
  {
    id: 33,
    title: "Chicken Parmesan",
    category: "mains",
    price: "$16",
    description:
      "Breaded chicken breast topped with marinara sauce and melted cheese",
    img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFBhcm1lc2FufGVufDB8fDB8fHww",
  },
  {
    id: 34,
    title: "Beef Steak",
    category: "mains",
    price: "$22",
    description:
      "Juicy grilled beef steak with a side of garlic mashed potatoes",
    img: "https://images.unsplash.com/photo-1607403218119-83b4df4c0959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVlZiUyMFN0ZWFrfGVufDB8fDB8fHww",
  },
  {
    id: 35,
    title: "Vegetable Stir Fry",
    category: "mains",
    price: "$12",
    description:
      "A mix of fresh vegetables stir-fried in a savory soy-based sauce",
    img: "https://media.istockphoto.com/id/588595864/photo/steaming-mixed-vegetables-in-the-wok-asian-style-cooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=y9JSEqRA-KbVyi7g2V9k73ZT77TUHBSWwfcqHmLTLpc=",
  },
  {
    id: 36,
    title: "Margherita Pizza",
    category: "mains",
    price: "$13",
    description:
      "Classic pizza topped with fresh mozzarella, tomatoes, and basil",
    img: "https://media.istockphoto.com/id/1269122740/photo/pizza-with-very-much-cheese-melting.webp?a=1&b=1&s=612x612&w=0&k=20&c=GRG9S05DDKE1OXUTc5V-dncsevWOYg0xtebge1GQhrM=",
  },
  {
    id: 37,
    title: "Shrimp Scampi",
    category: "mains",
    price: "$19",
    description:
      "Succulent shrimp sautéed in a buttery garlic sauce served with pasta",
    img: "https://media.istockphoto.com/id/469311080/photo/jumbo-shrimp-scampi-sauteeing-in-butter-and-olive-oil.webp?a=1&b=1&s=612x612&w=0&k=20&c=0q_GJvH2MTy389hJcAdGRyA0WBFhRyBdKcFty5CcVU0=",
  },
  {
    id: 38,
    title: "Lamb Chops",
    category: "mains",
    price: "$24",
    description: "Grilled lamb chops with a rosemary and mint sauce",
    img: "https://media.istockphoto.com/id/467413730/photo/grilled-lamb-chops-organized-on-a-white-plate-on-wood.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRr_kTZn3Wf8s5QmF7msMxTRS30nE-dMDZzOMbyogTA=",
  },
  {
    id: 39,
    title: "Penne Alfredo",
    category: "mains",
    price: "$15",
    description:
      "Creamy Alfredo sauce served with penne pasta and fresh parsley",
    img: "https://media.istockphoto.com/id/1270957163/photo/grilled-chicken-piccata-with-penne-pasta-and-fresh-artisan-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=vt2e2HOXH67-j_CQO7Qrnri1gPUwvPxPkZ0isFejVMw=",
  },
  {
    id: 40,
    title: "Vegetarian Lasagna",
    category: "mains",
    price: "$14",
    description: "Layers of pasta with spinach, ricotta, and marinara sauce",
    img: "https://media.istockphoto.com/id/1303741768/photo/italian-lasagna-with-tomato-sauce-and-cheese-served-with-tomatoes-and-spinach-light-concrete.webp?a=1&b=1&s=612x612&w=0&k=20&c=iLkrCjakUMKp3tQdq3qilN_1Zz72_3zpKkQwezyOGrA=",
  },
  {
    id: 41,
    title: "Chicken Biryani",
    category: "nonveg",
    price: "250",
    description:
      "Delicious aromatic chicken biryani cooked with long-grain basmati rice and authentic spices.",
    img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
  },
  {
    id: 42,
    title: "Grilled Chicken",
    category: "nonveg",
    price: "350",
    description:
      "Juicy and tender grilled chicken seasoned with a special blend of herbs and spices.",
    img: "https://media.istockphoto.com/id/1217611897/photo/grilled-chicken-breasts-with-thyme-garlic-and-lemon-slices-on-a-grill-pan-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=NpbXjlPTNT1eXRMq88Vhl3OaKUmDDY2Co66Q9QfU1eo=",
  },
  {
    id: 43,
    title: "Prawn Curry",
    category: "nonveg",
    price: "400",
    description:
      "A rich and creamy prawn curry cooked with coconut milk and a variety of Indian spices.",
    img: "https://media.istockphoto.com/id/1629228363/photo/prawn-curry-with-basmati-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=y4bfzLoGqqXQkLdXPo6Ecf_-mMRYa7TcrFxR4BzYGCE=",
  },
  {
    id: 44,
    title: "Mutton Rogan Josh",
    category: "nonveg",
    price: "450",
    description:
      "A classic Kashmiri dish made with tender pieces of mutton slow-cooked in a flavorful gravy.",
    img: "https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=uFGmI-oKVz90g80NRI833FMyl7CKmy7ToBNYAvuACNo=",
  },
  {
    id: 45,
    title: "Fish Fry",
    category: "nonveg",
    price: "300",
    description:
      "Crispy fried fish fillets marinated with lemon, garlic, and a touch of chili.",
    img: "https://media.istockphoto.com/id/1363859965/photo/fish-fry.webp?a=1&b=1&s=612x612&w=0&k=20&c=rxOUt0Xcm8z_SOFBQ4oHYySmNJbdszZu0OEADAgGM_s=",
  },
  {
    id: 46,
    title: "Butter Chicken",
    category: "nonveg",
    price: "350",
    description:
      "Creamy butter chicken cooked in a rich tomato-based gravy with Indian spices.",
    img: "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyJTIwY2hpa2VufGVufDB8fDB8fHww",
  },
  {
    id: 47,
    title: "Tandoori Chicken",
    category: "nonveg",
    price: "400",
    description:
      "Traditional tandoori chicken marinated in yogurt and spices, cooked to perfection.",
    img: "https://media.istockphoto.com/id/889606852/photo/chicken-tandoori-on-a-cast-iron-plate-north-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=MotnuaJnFb7w0e6FjBtNqKGQuv_J-J4e0AWl1oQYb9A=",
  },
  {
    id: 48,
    title: "Egg Curry",
    category: "nonveg",
    price: "200",
    description:
      "A comforting dish made with boiled eggs simmered in a spicy and flavorful curry sauce.",
    img: "https://media.istockphoto.com/id/1185235293/photo/boiled-curry-eggs-in-spicy-sauce-close-up-in-a-plate-vertical-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y0BxeiDd_CyKPJwc4-6GsE5XqCWSGzHNjQeZp11-tUw=",
  },
  {
    id: 49,
    title: "Crab Masala",
    category: "nonveg",
    price: "500",
    description:
      "Spicy crab masala cooked with freshly ground spices for a rich and indulgent taste.",
    img: "https://media.istockphoto.com/id/2158147288/photo/black-pepper-crab-singapore-chili-crab-singaporean-cuisine-chilli-mud-crab-served-on-a-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=4qXNnY310N02inK9qNVHHqhHTRYOxJgEE_iYRICqo0Y=",
  },
  {
    id: 50,
    title: "Chicken Tikka Masala",
    category: "nonveg",
    price: "375",
    description:
      "Tender pieces of chicken tikka cooked in a flavorful and creamy masala sauce.",
    img: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyMFRpa2thJTIwTWFzYWxhfGVufDB8fDB8fHww",
  },
];

const menuContainer = document.querySelector("#menu");
const filterButtons = document.querySelectorAll(".filter-button");
const searchInput = document.querySelector("#search-input");

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class="menu-item col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
        </div>
      </div>
    </div>
    `;
  });

  displayMenu = displayMenu.join("");
  menuContainer.innerHTML = displayMenu;
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.filter;
    const menuCategory =
      category === "all"
        ? menu
        : menu.filter(function (menuItem) {
            return menuItem.category === category;
          });
    displayMenuItems(menuCategory);
  });
});

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

// Popup functionality
var modal = document.getElementById("cart-popup");
var span = document.getElementsByClassName("close-button")[0];

function showPopup() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Search functionality
searchInput.addEventListener("keyup", function (e) {
  const searchString = e.target.value.toLowerCase();
  const filteredMenu = menu.filter((menuItem) => {
    return (
      menuItem.title.toLowerCase().includes(searchString) ||
      menuItem.description.toLowerCase().includes(searchString)
    );
  });
  displayMenuItems(filteredMenu);
});
