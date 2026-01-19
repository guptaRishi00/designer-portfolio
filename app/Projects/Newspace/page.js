"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import {
    ArrowLeft,
    Shield,
    Globe,
    Zap,
    Users,
    ArrowRight,
    PenTool,
    Layout,
    Moon,
    Layers,
    Target,
    Activity
} from "lucide-react";

// Animation Variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

const FeatureCard = ({ icon, title, description, color }) => (
    <div className="col-md-6 mb-4">
        <div className="d-flex align-items-start gap-3 p-3 transition-all hover-translate-y">
            <div className={`feature-icon-wrapper ${color}`}>{icon}</div>
            <div>
                <h5 className="fw-bold mb-1 text-white">{title}</h5>
                <p className="small text-white-50 mb-0">{description}</p>
            </div>
        </div>
    </div>
);

const NewspacePortfolio = () => {
    const heroBackgroundImage = "/Project4.png";

    return (
        <NathanLayout>
            <div className="newspace-page">
                <style jsx global>{`
                    .newspace-page {
                        background-color: #050505;
                        color: #ffffff;
                        font-family: 'Inter', sans-serif;
                    }
                    /* Technical Grid Background */
                    .grid-bg {
                        background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
                        background-size: 40px 40px;
                    }
                    .hero-section {
                        position: relative;
                        height: 80vh;
                        display: flex;
                        align-items: center;
                        overflow: hidden;
                    }
                    .hero-overlay {
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, #050505 100%);
                        z-index: 1;
                    }
                    .nda-badge {
                        background: rgba(255, 193, 7, 0.1);
                        border: 1px solid rgba(255, 193, 7, 0.3);
                        padding: 6px 16px;
                        border-radius: 100px;
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 0.8rem;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                    .contribution-card {
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        backdrop-filter: blur(10px);
                        border-radius: 12px;
                        padding: 2rem;
                        height: 100%;
                        transition: all 0.3s ease;
                    }
                    .contribution-card:hover {
                        background: rgba(255, 255, 255, 0.06);
                        border-color: rgba(255, 255, 255, 0.2);
                        transform: translateY(-5px);
                    }
                    .feature-icon-wrapper {
                        padding: 10px;
                        background: rgba(255,255,255,0.05);
                        border-radius: 8px;
                    }
                    .step-number {
                        width: 32px;
                        height: 32px;
                        border: 1px solid rgba(255,255,255,0.2);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 0.8rem;
                        color: #60a5fa;
                    }
                    .result-card {
                        background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
                        border: 1px solid rgba(255,255,255,0.1);
                        padding: 3rem 2rem;
                        border-radius: 16px;
                        text-align: center;
                    }
                    .result-num {
                        font-size: 3.5rem;
                        font-weight: 800;
                        background: linear-gradient(to bottom, #fff, #666);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        line-height: 1;
                        margin-bottom: 0.5rem;
                    }
                    .section-line {
                        width: 50px;
                        height: 2px;
                        background: #60a5fa;
                        margin-bottom: 1.5rem;
                    }
                `}</style>

                <Header />

                {/* Hero Section */}
                <section className="hero-section">
                    <Image
                        src={heroBackgroundImage}
                        alt="Aerospace Interface"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="hero-overlay"></div>
                    <div className="container position-relative z-index-2">
                        <motion.div {...fadeInUp}>
                            <Link href="/works" className="text-decoration-none">
                                <button className="btn btn-link text-white-50 p-0 mb-4 d-flex align-items-center gap-2 border-0">
                                    <ArrowLeft size={18} /> Back to Projects
                                </button>
                            </Link>
                            <div className="nda-badge text-warning mb-3">
                                <Shield size={14} /> NDA Protected Sector
                            </div>
                            <h1 className="display-3 fw-bold mb-4">
                                Newspace Research <br />
                                <span className="text-white-50">& Technologies</span>
                            </h1>
                            <p className="lead text-white-50 mb-0" style={{ maxWidth: "600px" }}>
                                Design for high-stakes mission-critical environments.
                                Interfaces focused on precision, speed, and cognitive load management
                                for aerospace operators.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="grid-bg">
                    {/* Project Overview */}
                    <section className="py-5 mt-5">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-6">
                                    <div className="section-line"></div>
                                    <h2 className="display-6 fw-bold mb-4">The Mission</h2>
                                    <p className="text-white-50 mb-4 fs-5">
                                        At Newspace, I designed interfaces where speed and reliability
                                        are not features, but requirements. Every pixel was optimized
                                        for rapid decision-making in complex operational contexts.
                                    </p>
                                    <div className="challenge-box p-4 border-start border-primary border-3 bg-white-5 bg-opacity-10">
                                        <p className="m-0 italic text-white-75">
                                            "The challenge was to simplify massive data streams into
                                            actionable intelligence without losing critical technical nuances."
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <FeatureCard icon={<Globe size={22} />} title="Global Impact" description="Systems supporting international operations." color="text-blue-400" />
                                        <FeatureCard icon={<Shield size={22} />} title="Defense Grade" description="Strict adherence to security protocols." color="text-green-400" />
                                        <FeatureCard icon={<Zap size={22} />} title="Real-time" description="Low-latency data visualization." color="text-yellow-400" />
                                        <FeatureCard icon={<Users size={22} />} title="Operator-Centric" description="Ergonomic UI for long-shift focus." color="text-purple-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contributions Grid */}
                    <section className="py-5">
                        <div className="container">
                            <div className="text-center mb-5">
                                <h2 className="fw-bold h1">Key Contributions</h2>
                                <p className="text-white-50">Impact-driven design solutions</p>
                            </div>
                            <div className="row g-4">
                                {[
                                    { icon: <Layout />, title: "Mission Dashboards", desc: "Interactive visualization tools for real-time telemetry and flight data." },
                                    { icon: <Target />, title: "End-to-End Redesign", desc: "Architected a new interface framework that increased operational speed by 30%." },
                                    { icon: <Layers />, title: "Scalable Design Systems", desc: "Built a component library specifically for ruggedized hardware displays." },
                                    { icon: <Moon />, title: "High-Contrast UI", desc: "Dark-mode optimization for low-light command center environments." }
                                ].map((item, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <motion.div className="contribution-card" {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                                            <div className="mb-3 text-primary">{item.icon}</div>
                                            <h4 className="fw-bold mb-3">{item.title}</h4>
                                            <p className="text-white-50 mb-0">{item.desc}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Process & Impact Combined */}
                    <section className="py-5 mb-5">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-5">
                                    <h2 className="fw-bold mb-4">Strategic Process</h2>
                                    {[
                                        "Stakeholder technical discovery",
                                        "Cognitive task analysis",
                                        "Rapid low-fidelity prototyping",
                                        "Usability testing with domain experts",
                                        "Engineer-aligned handoff systems"
                                    ].map((step, i) => (
                                        <div key={i} className="d-flex gap-3 mb-4">
                                            <div className="step-number">{i + 1}</div>
                                            <p className="text-white-75 mb-0">{step}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-7">
                                    <div className="row g-4">
                                        {[
                                            { num: "20%", label: "Operational Efficiency", detail: "Streamlined workflows" },
                                            { num: "30%", label: "User Engagement", detail: "Precision UI solutions" },
                                            { num: "15%", label: "Faster Dev Cycle", detail: "Component standardization" }
                                        ].map((stat, i) => (
                                            <div key={i} className="col-md-4">
                                                <div className="result-card">
                                                    <div className="result-num">{stat.num}</div>
                                                    <div className="fw-bold small text-uppercase letter-spacing-1">{stat.label}</div>
                                                    <div className="text-white-50 tiny mt-2" style={{ fontSize: '0.7rem' }}>{stat.detail}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </NathanLayout>
    );
};

export default NewspacePortfolio;