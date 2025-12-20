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
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-5 col-md-6 footer-about">
            <div className="d-flex align-items-start gap-4">
              <Link href="/" className="logo d-flex align-items-center">
                <img
                  src="/assets/img/logo.png"
                  className="logo-img"
                  alt={`${t("site.name")} logo`}
                  style={{ maxWidth: "180px", maxHeight: "180px", width: "100%", height: "auto", objectFit: "contain" }}
                />
                <span className="sitename visually-hidden">{t("site.name")}</span>
              </Link>
              <div>
                <div className="footer-contact" style={{ fontSize: "1.1rem" }}>
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
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4 style={{ fontSize: "1.3rem" }}>{t("footer.usefulLinks")}</h4>
            <ul style={{ fontSize: "1.05rem" }}>
              <li>
                <Link href="/">{t("nav.home")}</Link>
              </li>
              <li>
                <Link href="/about">{t("nav.about")}</Link>
              </li>
              <li>
                <Link href="/menu">{t("nav.menu")}</Link>
              </li>
              <li>
                <Link href="/events">{t("nav.events")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4 style={{ fontSize: "1.3rem" }}>{t("footer.servicesTitle")}</h4>
            <ul style={{ fontSize: "1.05rem" }}>
              <li>
                <Link href="/book-a-table">{t("nav.book")}</Link>
              </li>
              <li>
                <Link href="/events">{t("nav.events")}</Link>
              </li>
              <li>
                <Link href="/menu">{t("nav.menu")}</Link>
              </li>
              <li>
                <Link href="/gallery">{t("nav.gallery")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p style={{ fontSize: "1.05rem" }}>
          © <span>{t("footer.copyright")}</span>{" "}
          <strong className="px-1 sitename">{t("site.name")}</strong> <span>{t("footer.rights")}</span>
        </p>
        <div className="credits" style={{ fontSize: "0.95rem" }}>
          Designed by{" "}
          <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">
            BootstrapMade
          </a>{" "}
          Distributed by{" "}
          <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">
            ThemeWagon
          </a>
        </div>
      </div>
    </footer>
  );
}
