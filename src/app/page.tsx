// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Menu from "@/components/sections/Menu";
import Specials from "@/components/sections/Specials";
import Events from "@/components/sections/Events";
import BookATable from "@/components/sections/BookATable";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Chefs from "@/components/sections/Chefs";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Menu />
      <Specials />
      <Events />
      <BookATable />
      <Testimonials />
      <Gallery />
      <Chefs />
      <Contact />
    </>
  );
}
