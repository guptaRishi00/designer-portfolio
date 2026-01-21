"use client";

import React from "react";
import Link from "next/link";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";

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
        { title: "Global Impact", desc: "Systems supporting international operations." },
        { title: "Defense Grade", desc: "Strict adherence to security protocols." },
        { title: "Real-time", desc: "Low-latency data visualization." },
        { title: "Operator-Centric", desc: "Ergonomic UI for long-shift focus." },
    ];

    const processSteps = [
        "Stakeholder technical discovery",
        "Cognitive task analysis",
        "Rapid low-fidelity prototyping",
        "Usability testing with domain experts",
        "Engineer-aligned handoff systems",
    ];

    return (
        <NathanLayout rootElements={pageStyles}>
            <div className="section-dark no-bottom no-top" id="content">
                <div id="top" />

                {/* Hero Section */}
                <section className="no-top">
                    <div className="text-fit-wrapper">
                        <FitParentTitle title={"NEWSPACE"} />
                        <Header />
                    </div>
                    <div className="spacer-double" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <Link href="/" className="d-flex align-items-center gap-2 text-white text-decoration-none mb-4">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                    Back
                                </Link>
                            </div>
                            <div className="col-lg-10">
                                <div className="d-inline-block px-3 py-2 mb-4" style={{
                                    background: 'rgba(255, 193, 7, 0.1)',
                                    border: '1px solid rgba(255, 193, 7, 0.3)',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    color: '#ffc107'
                                }}>
                                    NDA Protected
                                </div>
                                <h2 className="lh-1 wow fadeInUp">
                                    Designing mission-critical interfaces for high-stakes aerospace environments.
                                    Focused on precision, speed, and cognitive load management for operators.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Image */}
                <section className="no-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img
                                    src="/Frame4.png"
                                    alt="Newspace Project"
                                    className="img-fluid w-100 wow fadeInUp"
                                    style={{ borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Mission */}
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
                                    At Newspace, I designed interfaces where speed and reliability are not features, but requirements.
                                </h2>
                                <div className="row g-4 mt-4 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-sm-6">
                                        <p>
                                            Every pixel was optimized for rapid decision-making in complex operational contexts.
                                            The challenge was to simplify massive data streams into actionable intelligence
                                            without losing critical technical nuances.
                                        </p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p>
                                            Working with aerospace operators and engineers, I developed systems that support
                                            international operations with defense-grade security and real-time responsiveness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
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

                {/* Contributions */}
                <section className="no-top">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-2">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                                    Contributions
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <h2 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                                    Impact-driven design solutions for mission-critical operations.
                                </h2>
                            </div>
                        </div>
                        <div className="spacer-single" />
                        <div className="row g-4">
                            {contributions.map((item, index) => (
                                <div
                                    key={index}
                                    className="col-lg-6 col-sm-6 wow fadeInRight"
                                    data-wow-delay={`.${index + 4}s`}
                                >
                                    <div className="relative">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="no-top">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-2">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                                    Process
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <h2 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                                    Strategic approach to complex design challenges.
                                </h2>
                                <div className="spacer-single" />
                                {processSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        className="d-flex align-items-center gap-3 mb-3 wow fadeInUp"
                                        data-wow-delay={`.${index + 5}s`}
                                    >
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.85rem',
                                            flexShrink: 0
                                        }}>
                                            {index + 1}
                                        </div>
                                        <p className="mb-0">{step}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="col-lg-5">
                                <h2 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                                    Measurable Results
                                </h2>
                                <div className="spacer-single" />
                                <div className="row g-4">
                                    {[
                                        { num: "20%", label: "Operational Efficiency" },
                                        { num: "30%", label: "User Engagement" },
                                        { num: "15%", label: "Faster Dev Cycle" },
                                    ].map((stat, i) => (
                                        <div key={i} className="col-md-4 wow fadeInUp" data-wow-delay={`.${i + 5}s`}>
                                            <h2 className="fs-48 mb-1">{stat.num}</h2>
                                            <p className="fs-14">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to Projects */}
                <section className="no-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <Link
                                    href="/"
                                    className="btn-line wow fadeInUp"
                                >
                                    Back to All Projects
                                </Link>
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