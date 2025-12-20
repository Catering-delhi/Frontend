// src/app/chefs/page.tsx
"use client";

import PageTitle from "@/components/sections/PageTitle";
import Chefs from "@/components/sections/Chefs";
import { useTranslation } from "react-i18next";

export default function ChefsPage() {
  const { t } = useTranslation("common");
  
  return (
    <>
      <PageTitle 
        title={t("chefs.title")} 
        description={t("chefs.kicker")}
        breadcrumbLabel={t("nav.chefs")} 
      />
      <Chefs />
    </>
  );
}

