// src/components/sections/Gallery.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Modal from "@/components/ui/Modal";
import { galleryCategories } from "@/data/gallery";

export default function Gallery() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="gallery section">
      <SectionTitle kicker={t("gallery")} title={t("Our Culinary Gallery")} />

      <div className="container-fluid">
        {Object.entries(galleryCategories).map(([category, images]) => (
          <div key={category} className="mb-5">
            <h3 className="text-center mb-4" style={{ color: "#d9b35a", textTransform: "capitalize" }}>
              {category}
            </h3>
            <div className="row g-0">
              {images.map((src, idx) => (
                <div key={src} className="col-lg-3 col-md-4">
                  <Reveal delay={idx * 0.02}>
                    <div className="gallery-item">
                      <button
                        type="button"
                        onClick={() => setOpen(src)}
                        style={{ border: 0, padding: 0, background: "transparent", width: "100%" }}
                        aria-label={t("gallery.open")}
                      >
                        <img src={src} alt="" className="img-fluid" />
                      </button>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} title={t("gallery.open")}>
        {open ? <img src={open} alt="" style={{ width: "100%", height: "auto", display: "block" }} /> : null}
      </Modal>
    </section>
  );
}
