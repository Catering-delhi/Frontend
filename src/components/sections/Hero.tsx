// src/components/sections/Hero.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
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
                <Link className="cta-btn" href="/menu">
                  {t("hero.ctaMenu")}
                </Link>
              </div>
            </Reveal>
          </div>

          
        </div>
      </div>

      
    </section>
  );
}
