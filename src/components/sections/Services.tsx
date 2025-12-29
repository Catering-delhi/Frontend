// src/components/sections/Services.tsx
"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "bi-gift-fill",
    title: "Birthday Catering",
    description:
      "Bespoke CUISINE creates birthday menus with starters, mains, desserts, mocktails, optional live counters, themed setup, and professional catering services.",
  },
  {
    icon: "bi-cake2-fill",
    title: "Wedding Catering",
    description:
      "Bespoke Cuisine curates premium wedding feasts with customised menus, ritual-based service flow, trained staff, and live food stations.",
  },
  {
    icon: "bi-music-note-beamed",
    title: "Party Catering",
    description:
      "Bespoke Cuisine delivers party catering with crowd-favourite starters, mains, desserts, and optional bar snacks prepared fresh.",
  },
  {
    icon: "bi-calendar-event",
    title: "Corporate & Office Events",
    description:
      "Delivering refined catering solutions that elevate corporate events with precision, consistency, taste, and professional execution.",
  },
  {
    icon: "bi-person-badge",
    title: "Custom Menu Options",
    description:
      "Customised menus designed to match corporate preferences, dietary requirements, event formats, and professional dining standards.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Catering On Demand",
    description:
      "Quick-turnaround catering for small gatherings with efficient setup, focused menus, and quality-controlled execution.",
  },
];

export default function Services() {
  return (
    <section className="service_area section">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title mb-60 text-center">
              <Reveal>
                <h3>Our Services</h3>
                <p>
                  <span style={{ color: "#cda45e" }}>BESPOKE CUISINE </span>
                  delivers premium catering for birthdays, weddings, private
                  parties, and corporate events.
                  <br className="d-none d-md-block" />
                  Choose from multi-cuisine menus, live counters, and tailored
                  packages built around your guests, budget, and expectations.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="col-xl-4 col-md-6 mb-4 d-flex"
            >
              <Reveal delay={idx * 0.1}>
                <div
                  className="single_service text-center flex-fill"
                  style={{
                    border: "1px solid rgba(205, 164, 94, 0.35)",
                    borderRadius: "12px",
                    padding: "28px 22px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="service_icon mb-3">
                    <i
                      className={service.icon}
                      style={{ fontSize: "3rem", color: "#cda45e" }}
                    />
                  </div>

                  <h4 className="mb-3">{service.title}</h4>

                  <p>{service.description}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
