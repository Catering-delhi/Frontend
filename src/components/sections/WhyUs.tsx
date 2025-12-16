// src/components/sections/WhyUs.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { whyCards } from "@/data/whyUs";

export default function WhyUs() {
  const { t } = useTranslation("common");

  return (
    <section id="why-us" className="why-us section">
      <SectionTitle kicker={t("why.kicker")} title={t("why.title")} />

      <div className="container">
        <div className="row gy-4">
          {whyCards.map((c, idx) => (
            <div key={c.number} className="col-lg-4">
              <Reveal delay={idx * 0.06}>
                <div className="card-item">
                  <span>{c.number}</span>
                  <h4>{t(c.titleKey)}</h4>
                  <p>{t(c.descKey)}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
