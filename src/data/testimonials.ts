// src/data/testimonials.ts
export type Testimonial = {
  id: string;
  nameKey: string;
  roleKey: string;
  quoteKey: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "saul",
    nameKey: "testimonials.items.saul.name",
    roleKey: "testimonials.items.saul.role",
    quoteKey: "testimonials.items.saul.quote",
    image: "/assets/img/testimonials/testimonials-1.jpg",
  },
  {
    id: "sara",
    nameKey: "Lala Yadav",
    roleKey: "Gynocoligist",
    quoteKey: "Lorem ipsum dolor sit amet, con ad minim veniam, quis nostrud",
    image: "/assets/img/testimonials/testimonials-2.jpg",
  },
  {
    id: "jena",
    nameKey: "testimonials.items.jena.name",
    roleKey: "testimonials.items.jena.role",
    quoteKey: "testimonials.items.jena.quote",
    image: "/assets/img/testimonials/testimonials-3.jpg",
  },
  {
    id: "matt",
    nameKey: "testimonials.items.matt.name",
    roleKey: "testimonials.items.matt.role",
    quoteKey: "testimonials.items.matt.quote",
    image: "/assets/img/testimonials/testimonials-4.jpg",
  },
  {
    id: "john",
    nameKey: "testimonials.items.john.name",
    roleKey: "testimonials.items.john.role",
    quoteKey: "testimonials.items.john.quote",
    image: "/assets/img/testimonials/testimonials-5.jpg",
  },
];
