// src/components/layout/Header.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const { theme, toggle } = useTheme();
  const { locale, setLocale } = useLocale(i18n);
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Determine active route based on pathname
  const active = pathname === "/" ? "home" : pathname.slice(1);

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

  return (
    <header id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">

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
              <li style={{ textAlign: "left" }}>
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
          <Link className="logo d-flex align-items-center me-auto me-xl-0" href="/" onClick={closeMobile}>
            <img
              src="/assets/img/logo.png"
              className="logo-img"
              alt={`${t("site.name")} logo`}
              style={{ maxWidth: "50px", maxHeight: "50px", width: "auto", height: "auto" }}
            />
            <h1 className="sitename visually-hidden">{t("site.name")}</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link className={active === "home" ? "active" : ""} href="/" onClick={closeMobile}>
                  {t("nav.home")}
                  <br />
                </Link>
              </li>
              <li>
                <Link className={active === "about" ? "active" : ""} href="/about" onClick={closeMobile}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link className={active === "menu" ? "active" : ""} href="/menu" onClick={closeMobile}>
                  {t("nav.menu")}
                </Link>
              </li>
              <li>
                <Link className={active === "gallery" ? "active" : ""} href="/gallery" onClick={closeMobile}>
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link className={active === "contact" ? "active" : ""} href="/contact" onClick={closeMobile}>
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
        </div>
      </div>
    </header>
  );
}
