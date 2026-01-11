// src/components/sections/Testimonials.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const { t } = useTranslation("common");

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <SectionTitle kicker={t("What our Client's say about us")} title={t("Testimonials")} />

        <Reveal>
          <Swiper
            loop
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="testimonials-swiper"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {testimonials.map((x) => (
              <SwiperSlide key={x.id}>
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                    <p className="testimonial-quote">
                      <i className="bi bi-quote quote-icon-left" aria-hidden="true" />
                      {t(x.quoteKey)}
                      <i className="bi bi-quote quote-icon-right" aria-hidden="true" />
                    </p>
                    <h3 className="testimonial-name">{t(x.nameKey)}</h3>
                    <h4 className="testimonial-role">{t(x.roleKey)}</h4>
                  </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
