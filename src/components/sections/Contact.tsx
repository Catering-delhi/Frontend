"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const { t } = useTranslation("common");

  // Change this image to whatever you want (must exist in /public/assets/img/...)
  const imageSrc = "/assets/img/about.jpg";

  return (
    <section id="contact" className="contact section">
      <SectionTitle kicker={t("contact.kicker")} title={t("contact.title")} />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center">
          {/* Image (TOP on mobile, RIGHT on desktop) */}
          <div className="col-lg-6 order-1 order-lg-2">
            <Reveal>
              <img
                src={imageSrc}
                className="img-fluid about-img"
                alt={t("contact.title")}
                loading="lazy"
              />
            </Reveal>
          </div>

          {/* Address/Info (BELOW image on mobile, LEFT on desktop) */}
          <div className="col-lg-6 order-2 order-lg-1">
            <Reveal>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>{t("contact.locationTitle")}</h3>
                  <p>{t("contact.locationValue")}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-clock flex-shrink-0" />
                <div>
                  <h3>{t("contact.hoursTitle")}</h3>
                  <p>
                    {t("contact.hoursLine1")}
                    <br />
                    {t("contact.hoursLine2")}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>{t("contact.callTitle")}</h3>
                  <p>
                    <a className="text-reset" href={`tel:${t("topbar.phone")}`} style={{ textDecoration: "none" }}>
                      {t("topbar.phone")}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>{t("contact.emailTitle")}</h3>
                  <p>
                    <a className="text-reset" href={`mailto:${t("topbar.email")}`} style={{ textDecoration: "none" }}>
                      {t("topbar.email")}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
