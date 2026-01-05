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
    <section id="testimonials" className="testimonials section dark-background">
      <img src="/assets/img/testimonials-bg.jpg" className="testimonials-bg" alt="" />

      <SectionTitle kicker={t("testimonials.kicker")} title={t("testimonials.title")} />

      <div className="container">
        <Reveal>
          <Swiper
            loop
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={2}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="swiper"
            breakpoints={{
              992: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {testimonials.map((x) => (
              <SwiperSlide key={x.id}>
                <div className="testimonial-item">
                  <div className="d-flex align-items-center">
                    <img
                      src={x.image}
                      className="testimonial-img flex-shrink-0"
                      alt=""
                      style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", marginRight: "20px" }}
                    />
                    <div className="text-start">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        <span>{t(x.quoteKey)}</span>
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3><b>{t(x.nameKey)}</b></h3>
                      <h4>{t(x.roleKey)}</h4>
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
