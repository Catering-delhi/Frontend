// src/app/page.tsx
import Chefs from "@/components/sections/Chefs";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Chefs />
      <Testimonials />
      <WhyUs />
    </>
  );
}
