// src/data/menu.ts
export type MenuCategory = "all" | "starters" | "salads" | "specialty";

export type MenuItem = {
  id: string;
  category: Exclude<MenuCategory, "all">;
  image: string;
  price: string;
  nameKey: string;
  descKey: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "lobster_bisque",
    category: "starters",
    image: "/assets/img/menu/lobster-bisque.jpg",
    price: "$5.95",
    nameKey: "menu.items.lobster_bisque.name",
    descKey: "menu.items.lobster_bisque.desc",
  },
  {
    id: "bread_barrel",
    category: "specialty",
    image: "/assets/img/menu/bread-barrel.jpg",
    price: "$6.95",
    nameKey: "menu.items.bread_barrel.name",
    descKey: "menu.items.bread_barrel.desc",
  },
  {
    id: "crab_cake",
    category: "starters",
    image: "/assets/img/menu/cake.jpg",
    price: "$7.95",
    nameKey: "menu.items.crab_cake.name",
    descKey: "menu.items.crab_cake.desc",
  },
  {
    id: "caesar",
    category: "starters",
    image: "/assets/img/menu/caesar.jpg",
    price: "$8.95",
    nameKey: "menu.items.caesar.name",
    descKey: "menu.items.caesar.desc",
  },
  {
    id: "tuscan_grilled",
    category: "specialty",
    image: "/assets/img/menu/tuscan-grilled.jpg",
    price: "$9.95",
    nameKey: "menu.items.tuscan_grilled.name",
    descKey: "menu.items.tuscan_grilled.desc",
  },
  {
    id: "mozzarella_stick",
    category: "starters",
    image: "/assets/img/menu/mozzarella.jpg",
    price: "$4.95",
    nameKey: "menu.items.mozzarella.name",
    descKey: "menu.items.mozzarella.desc",
  },
  {
    id: "greek_salad",
    category: "salads",
    image: "/assets/img/menu/greek-salad.jpg",
    price: "$9.95",
    nameKey: "menu.items.greek_salad.name",
    descKey: "menu.items.greek_salad.desc",
  },
  {
    id: "spinach_salad",
    category: "salads",
    image: "/assets/img/menu/spinach-salad.jpg",
    price: "$9.95",
    nameKey: "menu.items.spinach_salad.name",
    descKey: "menu.items.spinach_salad.desc",
  },
  {
    id: "lobster_roll",
    category: "specialty",
    image: "/assets/img/menu/lobster-roll.jpg",
    price: "$12.95",
    nameKey: "menu.items.lobster_roll.name",
    descKey: "menu.items.lobster_roll.desc",
  },
];
