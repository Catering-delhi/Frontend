// src/components/sections/PageTitle.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function PageTitle() {
  const { t } = useTranslation("common");

  return (
    <div
      className="page-title position-relative"
      style={{ backgroundImage: "url(/assets/img/page-title-bg.webp)" }}
    >
      <div className="container position-relative">
        <h1>
          {t("starter.pageTitle")}
          <br />
        </h1>
        <p>{t("starter.pageDesc")}</p>

        <nav className="breadcrumbs">
          <ol>
            <li>
              <Link href="/#hero">{t("nav.home")}</Link>
            </li>
            <li className="current">{t("starter.pageTitle")}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
