// src/components/sections/Contact.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const { t } = useTranslation("common");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  return (
    <section id="contact" className="contact section">
      <SectionTitle kicker={t("contact.kicker")} title={t("contact.title")} />

      <div className="container">
        <Reveal>
          <div className="mb-4">
            <iframe
              title="map"
              style={{ border: 0, width: "100%", height: 270 }}
              src="https://www.google.com/maps?q=New%20York%20NY%20535022&output=embed"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="row gy-4">
          <div className="col-lg-4">
            <Reveal>
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>{t("contact.locationTitle")}</h3>
                  <p>{t("contact.locationValue")}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="info-item d-flex">
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
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>{t("contact.emailTitle")}</h3>
                  <p>{t("topbar.email")}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0" />
                <div>
                  <h3>{t("contact.callTitle")}</h3>
                  <p>{t("topbar.phone")}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-lg-8">
            <Reveal>
              <form
                className="php-email-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus("loading");
                  window.setTimeout(() => setStatus("success"), 600);
                }}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input className="form-control" type="text" name="name" placeholder={t("contact.form.name")} required />
                  </div>

                  <div className="col-md-6">
                    <input className="form-control" type="email" name="email" placeholder={t("contact.form.email")} required />
                  </div>

                  <div className="col-md-12">
                    <input className="form-control" type="text" name="subject" placeholder={t("contact.form.subject")} required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows={6} placeholder={t("contact.form.message")} required />
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading" style={{ display: status === "loading" ? "block" : "none" }}>
                      {t("contact.form.loading")}
                    </div>
                    <div className="sent-message" style={{ display: status === "success" ? "block" : "none" }}>
                      {t("contact.form.success")}
                    </div>

                    <button type="submit" disabled={status === "loading"}>
                      {t("contact.form.submit")}
                    </button>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
