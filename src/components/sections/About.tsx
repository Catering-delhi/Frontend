// src/components/sections/About.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2">
            <Reveal>
              <img src="/assets/img/about.jpg" className="img-fluid about-img" alt="" />
            </Reveal>
          </div>

          <div className="col-lg-6 order-2 order-lg-1 content">
            <Reveal>
              <h3>{t("about.title")}</h3>
              <p className="fst-italic">{t("about.italic")}</p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" /> <span>{t("about.bullets.1")}</span>
                </li>
                <li>
                  <i className="bi bi-check2-all" /> <span>{t("about.bullets.2")}</span>
                </li>
                <li>
                  <i className="bi bi-check2-all" /> <span>{t("about.bullets.3")}</span>
                </li>
              </ul>
              <p>{t("about.desc")}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
