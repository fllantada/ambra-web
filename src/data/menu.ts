export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const starters: MenuSection = {
  title: "Starters",
  items: [
    { name: "Bruschetta Clasica", price: "6 €", description: "Toasted bread with tomato, garlic and basil" },
    { name: "Bruschetta Lombarda", price: "8 €", description: "Toasted bread with pear, gorgonzola, walnuts and honey" },
    { name: "Alcachofa a la Romana", price: "14 €", description: "Artichoke, garlic, parsley, fresh mint" },
    { name: "Carpaccio de Ternera", price: "16 €", description: "Marinated veal with extra virgin olive oil and lemon juice with arugula and Parmesan flakes" },
    { name: "Vitello Tonnato", price: "18 €", description: "Baked beef served cold with tuna sauce, capers, anchovies and mayonnaise" },
    { name: "Tartar de Solomillo", price: "22 €", description: "With Dijon mustard, capers, anchovies, egg, onion, Worcestershire sauce" },
    { name: "Berenjena a la Parmesana", price: "12,5 €", description: "Fried aubergines au gratin with tomato sauce, basil, parmesan" },
    { name: "Charcutería Mixta", price: "22 €", description: "Speck, Coppa Piacentina, Porchetta romana, Bresaola I.G.P." },
    { name: "Quesos Mixtos", price: "18 €", description: "Gorgonzola, Taleggio D.O.P, Buche de Cabra, Pecorino Pepato" },
  ],
};

export const salads: MenuSection = {
  title: "Salads",
  items: [
    { name: "Cabrita", price: "14,5 €", description: "Warm goat cheese with fresh spinach, cherry tomato, walnuts, pears, balsamic vinegar of Modena and honey" },
    { name: "Bel Paese", price: "14,5 €", description: "With arugula, cherry tomato, pear, walnuts, Parmesan flakes and balsamic vinegar from Modena" },
    { name: "Caprese", price: "12 €", description: "Tomato, fiordilatte mozzarella, basil and oregano" },
    { name: "Pulpo a la Salentina", price: "16,5 €", description: "Octopus, boiled potatoes, cherry tomato, black olives, extra virgin olive oil, lemon and parsley" },
    { name: "Mozzarella di Bufala", price: "11,5 €", description: "Mozzarella de Búfala from Campania DOP with cherry tomato and rocket" },
    { name: "Burrata", price: "12,5 €", description: "Fresh cheese, soft and creamy inside, served with arugula, dried tomatoes and pistachio" },
  ],
};

export const pasta: MenuSection = {
  title: "Pasta",
  items: [
    { name: "Lasagne alla Bolognese", price: "16 €", description: "Millefeuille of Bolognese pasta, bechamel, mozzarella and parmesan" },
    { name: "Cacio e Pepe", price: "15 €", description: "Spaghetti with pecorino cheese and black pepper" },
    { name: "Spaghetti alla Carbonara", price: "16 €", description: "Egg yolk, guanciale and pecorino cheese" },
    { name: "Spaghetti Aglio Olio Peperoncino", price: "12 €", description: "With extra virgin oil, garlic, chili pepper and parsley" },
    { name: "Gnocchi alla Sorrentina", price: "16 €", description: "Tomato sauce, buffalo mozzarella and basil" },
    { name: "Gnocchi al Pesto", price: "14,5 €", description: "Genoese pesto and dried tomato" },
    { name: "Penna all'Arrabbiata", price: "14 €", description: "Garlic, tomato sauce, chili and parsley" },
    { name: "Paccheri alla Norma", price: "14 €", description: "Tomato sauce, aubergine, cottage cheese and basil" },
    { name: "Linguine alle Vongole", price: "17,5 €", description: "With evo oil, garlic, white wine, clams and parsley" },
    { name: "Spaghetti alla Marinara", price: "19 €", description: "With clams, mussels, shrimps, cuttlefish, garlic, parsley, white wine and tomato sauce" },
    { name: "Ravioli Ricotta e Spinaci", price: "16 €", description: "Ricotta ravioli and spinach in butter and sage cream" },
  ],
};

export const meat: MenuSection = {
  title: "Meat",
  items: [
    { name: "Tagliata de Ternera", price: "26 €", description: "Grilled beef entrecote sliced with rucola, parmesan flakes and extra virgin oil" },
    { name: "Entrecot", price: "25 €", description: "Grilled Black Angus entrecote" },
    { name: "Solomillo de Ternera", price: "28 €", description: "Fillet with reduced red wine, foie gras and crispy leek" },
    { name: "Ambra Burgher", price: "16,5 €", description: "Black Angus beef burger with salad, parmesan flakes, dried tomatoes and caramelized onion" },
    { name: "Ossobuco", price: "25 €", description: "Slowly cooked beef with soft creamy polenta and meat sauce reduction" },
  ],
};

export const fish: MenuSection = {
  title: "Fish",
  items: [
    { name: "Bacalao", price: "22,5 €", description: "Cod with mashed potatoes and a touch of truffle" },
    { name: "Langostinos", price: "24 €", description: "Grilled prawns with seasonal salad" },
    { name: "Lubina", price: "24 €", description: "Crispy sea bass with sautéed vegetables" },
    { name: "Pulpo a la Plancha", price: "26 €", description: "Octopus on the grill with mashed potatoes" },
    { name: "Rape", price: "24,5 €", description: "Baked monkfish with bacon from Colonnata I.G.P., asparagus and leeks with parsley sauce" },
  ],
};

export const pinsa: MenuSection = {
  title: "Pinsa Romana",
  items: [
    { name: "4 Stagioni", price: "16 €", description: "Tomato sauce, mozzarella, cooked ham, black olives, mushrooms, and artichokes" },
    { name: "4 Formaggi", price: "15 €", description: "With tomato sauce and 4 cheeses" },
    { name: "Vegetariana", price: "14,5 €", description: "With mixed vegetables" },
    { name: "Bufala", price: "16 €", description: "With tomato sauce and buffalo mozzarella" },
    { name: "Diavola", price: "14,5 €", description: "With tomato sauce, mozzarella and spicy salami" },
    { name: "Regina Margherita", price: "15,5 €", description: "With tomato sauce, mozzarella, ham and rucola" },
    { name: "Pugliese", price: "14,5 €", description: "With tomato sauce, mozzarella, tuna and onion" },
    { name: "Prosciutto e Funghi", price: "14,5 €", description: "With tomato sauce, mozzarella, cooked ham and mushrooms" },
    { name: "Siciliana", price: "14,5 €", description: "With tomato sauce, mozzarella, anchovy capers and black olives" },
    { name: "Valtellina", price: "18 €", description: "Bresaola, arugula, parmesan flakes and citroneta" },
    { name: "Caput Mundi", price: "17,5 €", description: "Burrata, cherry tomato and rocket" },
    { name: "Capriccio", price: "19,5 €", description: "Porchetta romana, rocket, burrata, pistachio" },
  ],
};

export const desserts: MenuSection = {
  title: "Postres",
  items: [
    { name: "Pears in Red Wine", price: "8 €", description: "With spices" },
    { name: "Tiramisú Clasico", price: "8 €", description: "Savoiardi, Mascarpone, Cream, Café" },
    { name: "Panna Cotta", price: "8 €", description: "Creamy, sugary pudding" },
    { name: "Chocolate Fondant", price: "8 €", description: "Chocolate coulant with tempered heart" },
  ],
};

export const allSections = [starters, salads, pasta, meat, fish, pinsa, desserts];
