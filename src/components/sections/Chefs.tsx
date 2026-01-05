// src/components/sections/Chefs.tsx
"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import { chefs } from "@/data/chefs";

export default function Chefs() {
  const { t } = useTranslation("common");

  useEffect(() => {
    let carouselInstance: any;

    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const carouselElement = document.getElementById("chefsCarousel");

      if (carouselElement) {
        carouselInstance = new bootstrap.Carousel(carouselElement, {
          interval: 2000,
          ride: "carousel",
          pause: "hover",
        });
      }
    });

    return () => {
      if (carouselInstance) {
        carouselInstance.dispose();
      }
    };
  }, []);

  return (
    <section id="chefs" className="chefs section">
      <SectionTitle
        kicker={t("Top Quality chefs to your needs")}
        title={t("Our Chefs")}
      />

      <div className="container">
        <div id="chefsCarousel" className="carousel slide">
          <div className="carousel-inner">
            {chefs.map((chef, idx) => (
              <div
                key={chef.id}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
              >
                <img
                  src={chef.image}
                  className="d-block w-100"
                  alt={t(chef.nameKey)}
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />

                <div className="carousel-caption d-none d-md-block">
                  <h5>{t(chef.nameKey)}</h5>
                  <p>{t(chef.roleKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
