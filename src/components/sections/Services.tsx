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
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bi-cake2-fill",
    title: "Wedding Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bi-music-note-beamed",
    title: "Party Catering",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bi-calendar-event",
    title: "Event Catering",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bi-person-badge",
    title: "Corporate Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Catering On Demand",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
                  inappropriate behavior is often laughed off as "boys will be boys," women face higher conduct standards{" "}
                  <br className="d-none d-md-block" />
                  especially in the workplace. That's why it's crucial that, as women.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-xl-4 col-md-6 mb-4">
              <Reveal delay={idx * 0.1}>
                <div className="single_service text-center h-100">
                  <div className="service_icon mb-3">
                    <i className={`${service.icon}`} style={{ fontSize: "3rem", color: "#cda45e" }}></i>
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

