// src/components/sections/PageTitle.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface PageTitleProps {
  title: string;
  description?: string;
  breadcrumbLabel: string;
}

export default function PageTitle({ title, description, breadcrumbLabel }: PageTitleProps) {
  const { t } = useTranslation("common");

  return (
    <div
      className="page-title position-relative"
      style={{ backgroundImage: "url(/assets/img/page-title-bg.webp)" }}
    >
      <div className="container position-relative">
        <h1>
          {title}
          <br />
        </h1>
        {description && <p>{description}</p>}

        <nav className="breadcrumbs">
          <ol>
            <li>
              <Link href="/">{t("nav.home")}</Link>
            </li>
            <li className="current">{breadcrumbLabel}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
