// src/components/layout/Header.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";

const SECTION_IDS = ["hero", "about", "menu", "specials", "events", "chefs", "gallery", "contact", "book-a-table"];

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const { theme, toggle } = useTheme();
  const { locale, setLocale } = useLocale(i18n);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("hero");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);

  const closeMobile = useMemo(
    () => () => {
      setMobileOpen(false);
      document.body.classList.remove("mobile-nav-active");
    },
    []
  );

  const toggleMobile = () => {
    setMobileOpen((v) => {
      const next = !v;
      document.body.classList.toggle("mobile-nav-active", next);
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.2, 0.3] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href={`mailto:${t("topbar.email")}`}>{t("topbar.email")}</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>{t("topbar.phone")}</span>
            </i>
          </div>

          <div className="languages d-none d-md-flex align-items-center">
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  style={{ background: "transparent", border: 0, padding: 0, color: "inherit" }}
                >
                  {locale === "en" ? <strong>EN</strong> : "EN"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLocale("hi")}
                  style={{ background: "transparent", border: 0, padding: 0, color: "inherit" }}
                >
                  {locale === "hi" ? <strong>HI</strong> : "HI"}
                </button>
              </li>
              <li className="ms-3">
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={toggle}>
                  {theme === "dark" ? <i className="bi bi-moon-stars" /> : <i className="bi bi-sun" />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-cente">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link className="logo d-flex align-items-center me-auto me-xl-0" href="/#hero" onClick={closeMobile}>
            <h1 className="sitename">{t("site.name")}</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link className={active === "hero" ? "active" : ""} href="/#hero" onClick={closeMobile}>
                  {t("nav.home")}
                  <br />
                </Link>
              </li>
              <li>
                <Link className={active === "about" ? "active" : ""} href="/#about" onClick={closeMobile}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link className={active === "menu" ? "active" : ""} href="/#menu" onClick={closeMobile}>
                  {t("nav.menu")}
                </Link>
              </li>
              <li>
                <Link className={active === "specials" ? "active" : ""} href="/#specials" onClick={closeMobile}>
                  {t("nav.specials")}
                </Link>
              </li>
              <li>
                <Link className={active === "events" ? "active" : ""} href="/#events" onClick={closeMobile}>
                  {t("nav.events")}
                </Link>
              </li>
              <li>
                <Link className={active === "chefs" ? "active" : ""} href="/#chefs" onClick={closeMobile}>
                  {t("nav.chefs")}
                </Link>
              </li>
              <li>
                <Link className={active === "gallery" ? "active" : ""} href="/#gallery" onClick={closeMobile}>
                  {t("nav.gallery")}
                </Link>
              </li>

              {/* Keep template dropdown (optional) */}
              <li className={`dropdown ${dropdownOpen ? "dropdown-active" : ""}`}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen((v) => !v);
                  }}
                >
                  <span>{t("nav.dropdown")}</span> <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {t("nav.dropdown1")}
                    </a>
                  </li>

                  <li className={`dropdown ${deepDropdownOpen ? "dropdown-active" : ""}`}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setDeepDropdownOpen((v) => !v);
                      }}
                    >
                      <span>{t("nav.deepDropdown")}</span> <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          {t("nav.deep1")}
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          {t("nav.deep2")}
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          {t("nav.deep3")}
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          {t("nav.deep4")}
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          {t("nav.deep5")}
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {t("nav.dropdown2")}
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {t("nav.dropdown3")}
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {t("nav.dropdown4")}
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <Link className={active === "contact" ? "active" : ""} href="/#contact" onClick={closeMobile}>
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>

            <i
              className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? "bi-x" : "bi-list"}`}
              onClick={toggleMobile}
              role="button"
              aria-label="Toggle navigation"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleMobile();
              }}
            />
          </nav>

          <Link className="btn-book-a-table d-none d-xl-block" href="/#book-a-table">
            {t("nav.book")}
          </Link>
        </div>
      </div>
    </header>
  );
}
