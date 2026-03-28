import { MenuItem } from "semantic-ui-react";

export const MENU_CATEGORIES = ['Todos', 'Signature Rolls', 'Clásicos', 'Bowls & Pokes'];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Sushi Master Roll 2025",
    category: "Signature Rolls",
    price: "$32.000",
    description: "Nuestra creación ganadora. Salmón fresco, crema de queso, aguacate, tope de atún flameado y salsa acevichada especial.",
    image: "https://images.unsplash.com/photo-1559144490-8328294facd8?q=80&w=1974&auto=format&fit=crop",
    popular: true
  },
  {
    id: 2,
    name: "Vulcan Roll",
    category: "Signature Rolls",
    price: "$30.000",
    description: "Langostino crocante, aguacate, cubierto de salmón con topping de dinamita picante y cebollín.",
    image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=2070&auto=format&fit=crop",
    popular: true
  },
  {
    id: 3,
    name: "Philadelphia Classic",
    category: "Clásicos",
    price: "$26.000",
    description: "El clásico infalible. Salmón fresco, queso crema de la casa y ajonjolí tostado.",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1887&auto=format&fit=crop",
    popular: false
  },
  {
    id: 4,
    name: "Tiger Roll",
    category: "Clásicos",
    price: "$28.000",
    description: "Langostino apanado, pepino, aguacate y salsa anguila dulce.",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2070&auto=format&fit=crop",
    popular: false
  },
  {
    id: 5,
    name: "Poke Salmon Block",
    category: "Bowls & Pokes",
    price: "$29.000",
    description: "Base de arroz premium, cubos de salmón marinados, edamames, mango, wakame y aderezo ponzu.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop",
    popular: true
  },
  {
    id: 6,
    name: "Ebi Tempura Bowl",
    category: "Bowls & Pokes",
    price: "$31.000",
    description: "Langostinos tempura sobre cama de arroz, aguacate, nori y nuestra salsa Fuji secreta.",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2070&auto=format&fit=crop",
    popular: false
  }
];
