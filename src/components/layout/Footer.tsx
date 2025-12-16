// src/components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/#hero" className="logo d-flex align-items-center">
              <span className="sitename">{t("site.name")}</span>
            </Link>

            <div className="footer-contact pt-3">
              <p>{t("footer.addressLine1")}</p>
              <p>{t("footer.addressLine2")}</p>
              <p className="mt-3">
                <strong>{t("footer.phoneLabel")}</strong> <span>{t("topbar.phone")}</span>
              </p>
              <p>
                <strong>{t("footer.emailLabel")}</strong> <span>{t("topbar.email")}</span>
              </p>
            </div>

            <div className="social-links d-flex mt-4">
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

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>{t("footer.usefulLinks")}</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <Link href="/#hero">{t("nav.home")}</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <Link href="/#about">{t("nav.about")}</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <Link href="/#menu">{t("nav.menu")}</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <Link href="/#contact">{t("nav.contact")}</Link>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <Link href="/starter-page">{t("footer.starterPage")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>{t("footer.servicesTitle")}</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#" onClick={(e) => e.preventDefault()}>{t("footer.service1")}</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#" onClick={(e) => e.preventDefault()}>{t("footer.service2")}</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#" onClick={(e) => e.preventDefault()}>{t("footer.service3")}</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#" onClick={(e) => e.preventDefault()}>{t("footer.service4")}</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#" onClick={(e) => e.preventDefault()}>{t("footer.service5")}</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>{t("footer.newsletterTitle")}</h4>
            <p>{t("footer.newsletterDesc")}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(t("footer.newsletterSuccess"));
              }}
              className="php-email-form"
            >
              <div className="newsletter-form">
                <input type="email" name="email" placeholder={t("footer.newsletterPlaceholder")} required />
                <input type="submit" value={t("footer.subscribe")} />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>{t("footer.copyright")}</span>{" "}
          <strong className="px-1 sitename">{t("site.name")}</strong>{" "}
          <span>{t("footer.rights")}</span>
        </p>
        <div className="credits">{t("footer.credits")}</div>
      </div>
    </footer>
  );
}
