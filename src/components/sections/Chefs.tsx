// src/components/sections/Chefs.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { chefs } from "@/data/chefs";

export default function Chefs() {
  const { t } = useTranslation("common");

  return (
    <section id="chefs" className="chefs section">
      <SectionTitle kicker={t("chefs.kicker")} title={t("chefs.title")} />

      <div className="container">
        <div className="row gy-4">
          {chefs.map((c, idx) => (
            <div key={c.id} className="col-lg-4 col-md-6">
              <Reveal delay={idx * 0.05}>
                <div className="member">
                  <img src={c.image} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>{t(c.nameKey)}</h4>
                      <span>{t(c.roleKey)}</span>
                    </div>
                    <div className="social">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
