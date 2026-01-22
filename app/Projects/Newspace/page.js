"use client";

import React, { useState, useEffect, useRef } from "react";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { Shield } from "lucide-react";

// CountUp component for animated number counting
const CountUp = ({ end, duration = 2000, suffix = "%" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};


const NewspacePortfolio = () => {
  const pageStyles = {
    "--primary-color": "#ffffff",
    "--primary-color-rgb": "255, 255, 255",
    "--secondary-color": "#ffffff",
    "--secondary-color-rgb": "255, 255, 255",
  };

  const contributions = [
    {
      title: "Mission Dashboards",
      desc: "Interactive visualization tools for real-time telemetry and flight data monitoring.",
    },
    {
      title: "End-to-End Redesign",
      desc: "Architected a new interface framework that increased operational speed by 30%.",
    },
    {
      title: "Scalable Design Systems",
      desc: "Built a component library specifically for ruggedized hardware displays.",
    },
    {
      title: "High-Contrast UI",
      desc: "Dark-mode optimization for low-light command center environments.",
    },
  ];

  const features = [
    {
      title: "Global Impact",
      desc: "Systems supporting international operations.",
    },
    { title: "Defense Grade", desc: "Strict adherence to security protocols." },
    { title: "Real-time", desc: "Low-latency data visualization." },
    { title: "Operator-Centric", desc: "Ergonomic UI for long-shift focus." },
  ];

  const processSteps = [
    "Conducted stakeholder interviews and user research to understand workflows",
    "Created wireframes and prototypes to test usability before implementation",
    "Designed data-driven dashboards that emphasized speed and clarity",
    "Developed scalable design systems to support multiple platforms and use cases",
    "Collaborated closely with engineers and domain experts to ensure feasibility",
  ];

  const solutions = [
    {
      title: "UI Redesign",
      desc: "Improved usability, leading to a 30% increase in user engagement",
    },
    {
      title: "Mission Dashboards",
      desc: "Designed interactive visualizations for real-time decision-making",
    },
    {
      title: "Dark-Mode UI",
      desc: "Crafted accessible dark-mode layouts optimized for long operational shifts",
    },
    {
      title: "Design Systems",
      desc: "Introduced component libraries that reduced design-to-development time by 15%",
    },
  ];

  return (
    <NathanLayout rootElements={pageStyles}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />

        {/* Hero Section */}
        <section className="no-top">
          <div className="text-fit-wrapper">
            <h1
              style={{
                fontSize: "clamp(4rem, 15vw, 12rem)",
                fontWeight: "900",
                margin: 0,
              }}
            >
              NEWSPACE
            </h1>
            <Header />
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="no-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Overview
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className="d-flex align-items-center gap-2 mb-4 wow fadeInUp"
                  style={{
                    color: "#ffc107",
                    letterSpacing: "1px",
                    fontWeight: "500",
                  }}
                >
                  <span className="d-flex align-items-center justify-content-center">
                    <Shield size={18} strokeWidth={2.5} />
                  </span>
                  <span style={{ fontSize: "1rem", textTransform: "none" }}>
                    NDA Protected
                  </span>
                </div>

                <h2 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                  Human-Centered Aerospace Interface Design
                </h2>
                <div className="row g-4 mt-0 wow fadeInUp" data-wow-delay=".5s">
                  <div className="col-sm-12">
                    <p>
                      Designing mission-critical interfaces for high-stakes
                      aerospace environments with a focus on precision, speed,
                      and cognitive load management. By distilling complex
                      telemetry into intuitive visualizations, I enable
                      operators to process vast data streams during
                      time-sensitive maneuvers. These systems are architected to
                      meet rigorous defense-grade standards, ensuring absolute
                      reliability and enhanced situational awareness where every
                      second counts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mission Section */}
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  The Mission
                </div>
              </div>
              <div className="col-lg-10">
                <h2 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                  At Newspace, I designed interfaces where speed and reliability
                  are not features, but requirements.
                </h2>
                <div className="row g-4 mt-4 wow fadeInUp" data-wow-delay=".5s">
                  <div className="col-sm-6">
                    <p>
                      Every pixel was optimized for rapid decision-making in
                      complex operational contexts. The challenge was to
                      simplify massive data streams into actionable intelligence
                      without losing critical technical nuances.
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p>
                      Working with aerospace operators and engineers, I
                      developed systems that support international operations
                      with defense-grade security and real-time responsiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 wow fadeInRight" data-wow-delay=".3s">
                <div className="p-3 h-100 text-light jarallax">
                  <img
                    src="/Project4.png"
                    className="jarallax-img"
                    alt="Newspace Interface"
                  />
                  <h3 className="abs-centered m-0">Key Features</h3>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-sm-6 wow fadeInRight"
                      data-wow-delay={`.${index + 4}s`}
                    >
                      <div className="relative">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contributions Section */}
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Contributions
                </div>
              </div>

              <div className="col-lg-10">
                <h2
                  className="lh-1 wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{ marginBottom: "60px" }}
                >
                  Impact-driven design solutions for mission-critical
                  operations.
                </h2>

                <div className="row g-4">
                  {contributions.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-sm-6 wow fadeInRight"
                      data-wow-delay={`.${index + 4}s`}
                    >
                      <div className="relative">
                        <h4
                          style={{
                            textTransform: "uppercase",
                            fontSize: "1.25rem",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  The Challenge
                </div>
              </div>
              <div className="col-lg-10">
                <h2 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                  Designing for aerospace and defence meant working in
                  mission-critical environments where interfaces needed to be
                  clear, reliable, and efficient.
                </h2>
                <div className="row g-4 mt-4 wow fadeInUp" data-wow-delay=".5s">
                  <div className="col-sm-12">
                    <p style={{ opacity: 0.85 }}>
                      The challenge was to simplify complex data systems while
                      ensuring accuracy, usability, and trust for operators and
                      engineers. In an industry where cognitive overload can
                      have direct consequences on mission success, every design
                      choice had to balance technical precision with high-speed
                      human performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology: Process & Solutions Section */}
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Methodology
                </div>
              </div>

              <div className="col-lg-10">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "3rem",
                  }}
                >
                  {/* Process Steps Column */}
                  <div style={{ minWidth: 0 }}>
                    <h2
                      className="lh-1 wow fadeInUp"
                      data-wow-delay=".4s"
                      style={{ marginBottom: "40px" }}
                    >
                      Process
                    </h2>

                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "16px",
                          top: "10px",
                          bottom: "10px",
                          width: "1px",
                          background: "rgba(255,255,255,0.1)",
                          zIndex: 0,
                        }}
                      />

                      {processSteps.map((step, index) => (
                        <div
                          key={index}
                          className="wow fadeInUp"
                          data-wow-delay={`.${index + 5}s`}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "1rem",
                            marginBottom: "1.5rem",
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              minWidth: "32px",
                              border: "1px solid rgba(255,255,255,0.4)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.75rem",
                              fontWeight: "bold",
                              flexShrink: 0,
                              background: "#000",
                            }}
                          >
                            {index + 1}
                          </div>
                          <p
                            style={{
                              margin: 0,
                              paddingTop: "4px",
                              opacity: 0.85,
                              lineHeight: 1.6,
                            }}
                          >
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions Column */}
                  <div style={{ minWidth: 0 }}>
                    <h2
                      className="lh-1 wow fadeInUp"
                      data-wow-delay=".4s"
                      style={{ marginBottom: "40px" }}
                    >
                      Solutions
                    </h2>

                    <div>
                      {solutions.map((item, index) => (
                        <div
                          key={index}
                          className="wow fadeInUp"
                          data-wow-delay={`.${index + 5}s`}
                          style={{
                            borderLeft: "1px solid rgba(255,255,255,0.2)",
                            paddingLeft: "20px",
                            marginBottom: "1.5rem",
                          }}
                        >
                          <h4
                            style={{
                              fontSize: "1.1rem",
                              textTransform: "uppercase",
                              fontWeight: "700",
                              margin: "0 0 5px 0",
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              fontSize: "0.95rem",
                              opacity: 0.7,
                              lineHeight: "1.5",
                              margin: 0,
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Results Section */}
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Impact
                </div>
              </div>

              <div className="col-lg-10">
                <h2
                  className="lh-1 wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{ marginBottom: "50px" }}
                >
                  Impact & Results
                </h2>

                <div className="row g-4">
                  {/* Stat Card 1 */}
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <div
                      style={{
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "16px",
                        padding: "2.5rem 2rem",
                        textAlign: "center",
                        background: "rgba(255,255,255,0.02)",
                        height: "100%",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "3.5rem",
                          fontWeight: "800",
                          margin: "0 0 0.5rem 0",
                          letterSpacing: "-2px",
                        }}
                      >
                        <CountUp end={20} />
                      </h3>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          margin: "0 0 1rem 0",
                          textTransform: "none",
                        }}
                      >
                        Operational Efficiency Increase
                      </h4>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          opacity: 0.6,
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        Through Streamlined Workflows And Intuitive Layouts
                      </p>
                    </div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div
                      style={{
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "16px",
                        padding: "2.5rem 2rem",
                        textAlign: "center",
                        background: "rgba(255,255,255,0.02)",
                        height: "100%",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "3.5rem",
                          fontWeight: "800",
                          margin: "0 0 0.5rem 0",
                          letterSpacing: "-2px",
                        }}
                      >
                        <CountUp end={30} />
                      </h3>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          margin: "0 0 1rem 0",
                          textTransform: "none",
                        }}
                      >
                        User Engagement Boost
                      </h4>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          opacity: 0.6,
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        Delivered User-Centered Design Solutions That Balanced Precision With Usability
                      </p>
                    </div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                    <div
                      style={{
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "16px",
                        padding: "2.5rem 2rem",
                        textAlign: "center",
                        background: "rgba(255,255,255,0.02)",
                        height: "100%",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "3.5rem",
                          fontWeight: "800",
                          margin: "0 0 0.5rem 0",
                          letterSpacing: "-2px",
                        }}
                      >
                        <CountUp end={15} />
                      </h3>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          margin: "0 0 1rem 0",
                          textTransform: "none",
                        }}
                      >
                        Faster Development
                      </h4>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          opacity: 0.6,
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        Strengthened Design Culture By Introducing Scalable Systems And Establishing Design Principles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="spacer-double" />
      </div>
    </NathanLayout>
  );
};

export default NewspacePortfolio;
