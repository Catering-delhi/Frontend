// src/data/chefs.ts
export type Chef = {
  id: string;
  nameKey: string;
  roleKey: string;
  image: string;
};

export const chefs: Chef[] = [
  {
    id: "walter",
    nameKey: "chefs.items.walter.name",
    roleKey: "chefs.items.walter.role",
    image: "/assets/img/chefs/chefs-1.jpg",
  },
  {
    id: "sarah",
    nameKey: "chefs.items.sarah.name",
    roleKey: "chefs.items.sarah.role",
    image: "/assets/img/chefs/chefs-2.jpg",
  },
  {
    id: "william",
    nameKey: "chefs.items.william.name",
    roleKey: "chefs.items.william.role",
    image: "/assets/img/chefs/chefs-3.jpg",
  },
];
