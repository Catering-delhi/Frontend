// src/components/sections/Menu.tsx
"use client";

import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { menuItems, type MenuCategory } from "@/data/menu";

export default function Menu() {
  const { t } = useTranslation("common");
  const [active, setActive] = useState<MenuCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return menuItems;
    return menuItems.filter((i) => i.category === active);
  }, [active]);

  const setFilter = (cat: MenuCategory) => setActive(cat);

  return (
    <section id="menu" className="menu section">
      <SectionTitle kicker={t("menu.kicker")} title={t("menu.title")} />

      <div className="container">
        <Reveal>
          <ul className="menu-filters isotope-filters">
            <li
              className={active === "all" ? "filter-active" : ""}
              role="button"
              tabIndex={0}
              onClick={() => setFilter("all")}
              onKeyDown={(e) => (e.key === "Enter" ? setFilter("all") : null)}
            >
              {t("menu.filters.all")}
            </li>
            <li
              className={active === "starters" ? "filter-active" : ""}
              role="button"
              tabIndex={0}
              onClick={() => setFilter("starters")}
              onKeyDown={(e) => (e.key === "Enter" ? setFilter("starters") : null)}
            >
              {t("menu.filters.starters")}
            </li>
            <li
              className={active === "salads" ? "filter-active" : ""}
              role="button"
              tabIndex={0}
              onClick={() => setFilter("salads")}
              onKeyDown={(e) => (e.key === "Enter" ? setFilter("salads") : null)}
            >
              {t("menu.filters.salads")}
            </li>
            <li
              className={active === "specialty" ? "filter-active" : ""}
              role="button"
              tabIndex={0}
              onClick={() => setFilter("specialty")}
              onKeyDown={(e) => (e.key === "Enter" ? setFilter("specialty") : null)}
            >
              {t("menu.filters.specialty")}
            </li>
          </ul>
        </Reveal>

        <div className="row isotope-container">
          {filtered.map((item, idx) => (
            <div key={item.id} className="col-lg-6 menu-item">
              <Reveal delay={idx * 0.03}>
                <img src={item.image} className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {t(item.nameKey)}
                  </a>
                  <span>{item.price}</span>
                </div>
                <div className="menu-ingredients">{t(item.descKey)}</div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
