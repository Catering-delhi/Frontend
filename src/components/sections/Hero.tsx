// src/components/sections/Hero.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/ui/Reveal";
import Modal from "@/components/ui/Modal";

export default function Hero() {
  const { t } = useTranslation("common");
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/assets/img/hero-bg.jpg" alt="" />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
            <Reveal delay={0.05}>
              <h2>
                {t("hero.welcome")} <span>{t("site.name")}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p>{t("hero.subtitle")}</p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="d-flex mt-4">
                <a className="cta-btn" href="/#menu">
                  {t("hero.ctaMenu")}
                </a>
                <a className="cta-btn" href="/#book-a-table">
                  {t("hero.ctaBook")}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
            <button
              type="button"
              className="glightbox pulsating-play-btn"
              aria-label={t("hero.playVideo")}
              onClick={() => setVideoOpen(true)}
              style={{ border: 0, background: "transparent" }}
            />
          </div>
        </div>
      </div>

      <Modal open={videoOpen} onClose={() => setVideoOpen(false)} title={t("hero.playVideo")}>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            title="Video"
            src="https://www.youtube.com/embed/Y7f98aduVJ8?autoplay=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        </div>
      </Modal>
    </section>
  );
}
