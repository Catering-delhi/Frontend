// src/components/sections/Chefs.tsx
"use client";

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import { chefs } from "@/data/chefs";

declare global {
  interface Window {
    bootstrap: any;
  }
}

export default function Chefs() {
  const { t } = useTranslation("common");

  useEffect(() => {
    let carouselInstance: any;

    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
      const carouselElement = document.getElementById("chefsCarousel");

      if (carouselElement && window.bootstrap) {
        carouselInstance = new window.bootstrap.Carousel(carouselElement, {
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
        <div
          id="chefsCarousel"
          className="carousel slide"
        >
          <div className="carousel-indicators">
            {chefs.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#chefsCarousel"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0 ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
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
                  style={{
                    maxHeight: "450px",
                    objectFit: "cover",
                  }}
                />

                <div className="carousel-caption d-none d-md-block">
                  <h5>{t(chef.nameKey)}</h5>
                  <p>{t(chef.roleKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#chefsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#chefsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
