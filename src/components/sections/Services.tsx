// src/components/sections/Services.tsx
"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";
import { color } from "framer-motion";

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
    <>
      <section className="service_area section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title mb-60 text-center">
                <Reveal>
                  <h3>Our Services</h3>
                  <p style={{fontFamily:"Georgia, serif"}}>
                    <span style={{ color: "#cda45e" }}>Bespoke Cuisine </span>
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
              <div key={idx} className="col-xl-4 col-md-6 mb-4 d-flex">
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
                      fontFamily:"Georgia, serif",
                      fontSize:"1.1rem"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(6, 5, 5, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="service_icon mb-3">
                      <i
                        className={service.icon}
                        style={{ fontSize: "3.2rem", color: "#cda45e" }}
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
      <section
        id="about"
        className="about section"
        style={{
          background:
            "linear-gradient(135deg, rgba(205,164,94,0.08), rgba(0,0,0,0.05))",
          border: "1px solid rgba(205, 164, 94, 0.35)",
          borderRadius: "18px",
          padding: "60px 0",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div
            className="row gy-4 align-items-center"
            style={{
              background: "rgba(15, 13, 13, 0.65)",
              backdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            {/* Image */}
            <div className="col-lg-6 order-2 order-lg-1 content">
              <Reveal>
                <img
                  src="/assets/img/homeab.jpg"
                  className="img-fluid about-img"
                  alt="Restaurant dining room"
                  style={{
                    maxWidth: "470px",
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "14px",
                    boxShadow: "0 12px 35px rgba(205,164,94,0.25)",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== "/assets/img/about.jpg") {
                      target.src = "/assets/img/about.jpg";
                    }
                  }}
                />
              </Reveal>
            </div>

            {/* Content */}
            <div
              className="col-lg-6 order-1 order-lg-2 text-center"
              style={{ padding: "20px 30px" }}
            >
              <Reveal>
                <h2
                  style={{
                    color: "#cda45e",
                    fontFamily: "Georgia, serif",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    marginBottom: "20px",
                    position: "relative",
                    borderBottom: "5px solid rgba(230, 167, 58, 0.35)"
                  }}
                >
                  Signature Bites, Unforgettable Nights
                </h2>

                <p
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: "1.9",
                    color: "#f4efefff",
                    marginTop: "25px",
                    fontFamily: "italic",
                    textAlign:"left"
                  }}
                >
                 <span style={{color:"#cda45e"}}> Bespoke Cuisine</span> is a premium culinary brand focused on
                  creating personalized and authentic dining experiences. We
                  believe every dish should reflect quality, creativity, and the
                  unique preferences of our clients. Our menus are thoughtfully
                  curated, combining India’s rich regional flavors with select
                  international cuisines, all prepared using premium ingredients
                  and authentic techniques. With a strong emphasis on vegetarian
                  cuisine, hygiene, and presentation, our professional chefs
                  deliver consistency and excellence in every plate. From
                  corporate catering to private events and custom menu planning,
                  Bespoke Cuisine is dedicated to serving food that is crafted
                  with passion and precision.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
