// src/components/sections/About.tsx
"use client";

import React from "react";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6 order-1 order-lg-2">
              <Reveal>
                <img 
                  src="/assets/img/aboutus.webp" 
                  className="img-fluid about-img" 
                  alt="Restaurant dining room" 
                  style={{ maxWidth: "470px", width: "100%", height: "auto", objectFit: "cover" }}
                  onError={(e) => {
                    // Fallback to existing about image if aboutus.webp doesn't exist
                    const target = e.target as HTMLImageElement;
                    if (target.src !== "/assets/img/about.jpg") {
                      target.src = "/assets/img/about.jpg";
                    }
                  }}
                />
              </Reveal>
            </div>
            <div className="col-lg-6 order-2 order-lg-1 content">
              <Reveal>
                <h3>Voluptatem dignissimos provident</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>{" "}
                    <span>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                    </span>
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-5 team-section" style={{ border: "1px solid #cda45e" }}>
        <div className="container">
          {/* Section Heading */}
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <Reveal>
                <span className="text-warning">Our Team</span>
                <h2 className="display-5 fw-bold">Meet the Team</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta harum ipsum venenatis metus sem veniam.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="row g-4">
            {/* Member 1 */}
            <div className="col-lg-6">
              <Reveal delay={0.1}>
                <div className="card border-0 h-100">
                  <div className="row g-0 align-items-center bg-light">
                    <div className="col-sm-5">
                      <img
                        src="/assets/img/owner.JPG"
                        className="img-fluid w-100"
                        alt="Owner"
                        style={{ objectFit: "cover", height: "100%", minHeight: "200px" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== "/assets/img/chefs/chefs-1.jpg") {
                            target.src = "/assets/img/chefs/chefs-1.jpg";
                          }
                        }}
                      />
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h5 className="fw-bold" style={{ color: "#cda45e" }}>
                          John Doe
                        </h5>
                        <div className="text-muted mb-3">Programmer</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className="d-flex gap-2">
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="Facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="Twitter"
                          >
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="LinkedIn"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Member 2 */}
            <div className="col-lg-6">
              <Reveal delay={0.2}>
                <div className="card border-0 h-100">
                  <div className="row g-0 align-items-center bg-light">
                    <div className="col-sm-5">
                      <img
                        src="/assets/img/chefs/chefs-2.jpg"
                        className="img-fluid w-100"
                        alt="Team Member"
                        style={{ objectFit: "cover", height: "100%", minHeight: "200px" }}
                      />
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h5 className="fw-bold" style={{ color: "#cda45e" }}>
                          John Doe
                        </h5>
                        <div className="text-muted mb-3">Graphic Designer</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className="d-flex gap-2">
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="Facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="Twitter"
                          >
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="LinkedIn"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Member 3 (Centered) */}
            <div className="col-lg-6 mx-auto">
              <Reveal delay={0.3}>
                <div className="card border-0 h-100">
                  <div className="row g-0 align-items-center bg-light">
                    <div className="col-sm-5">
                      <img
                        src="/assets/img/chefs/chefs-3.jpg"
                        className="img-fluid w-100"
                        alt="Team Member"
                        style={{ objectFit: "cover", height: "100%", minHeight: "200px" }}
                      />
                    </div>
                    <div className="col-sm-7">
                      <div className="card-body">
                        <h5 className="fw-bold" style={{ color: "#cda45e" }}>
                          John Doe
                        </h5>
                        <div className="text-muted mb-3">UI Designer</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className="d-flex gap-2">
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="Facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="Twitter"
                          >
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a
                            className="btn btn-sm btn-outline-dark"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            aria-label="LinkedIn"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Restaurant */}
      <section id="why-us" className="why-us section">
        <div className="container section-title" data-aos="fade-up">
          <h2>WHY US</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <Reveal delay={0.1}>
                <div className="card-item">
                  <span>01</span>
                  <h4>
                    <a href="#" className="stretched-link" onClick={(e) => e.preventDefault()}>
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <Reveal delay={0.2}>
                <div className="card-item">
                  <span>02</span>
                  <h4>
                    <a href="#" className="stretched-link" onClick={(e) => e.preventDefault()}>
                      Repellat Nihil
                    </a>
                  </h4>
                  <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <Reveal delay={0.3}>
                <div className="card-item">
                  <span>03</span>
                  <h4>
                    <a href="#" className="stretched-link" onClick={(e) => e.preventDefault()}>
                      Ad ad velit qui
                    </a>
                  </h4>
                  <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
