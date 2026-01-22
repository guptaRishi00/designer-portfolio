import React from "react";
import { TbBrandFigma } from "react-icons/tb";
import {
  SiAdobephotoshop,
  SiBlender,
  SiAdobeaftereffects,
  SiAdobexd,
} from "react-icons/si";
import { PiSketchLogo } from "react-icons/pi";

const Skills = () => {
  const designSkills = [
    { name: "User-Centered Design (UCD)", level: 90 },
    { name: "Design Thinking", level: 85 },
    { name: "User Research", level: 80 },
    { name: "Wireframing", level: 95 },
    { name: "Prototyping", level: 90 },
    { name: "Usability Testing", level: 75 },
    { name: "Interaction Design", level: 85 },
    { name: "Visual Design", level: 80 },
  ];



  const tools = [
    {
      name: "Figma",
      icon: <img src="/figma.png" alt="Figma" style={{ width: 50, height: 50 }} />,


    },
    {
      name: "Photoshop",
      icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-photoshop-icon.png" alt="Figma" style={{ width: 50, height: 50 }} />
    },

    {
      name: "Solid Works",
      icon: <img src="https://1000marcas.net/wp-content/uploads/2020/11/SolidWorks-logo-600x315.png" alt="Figma" style={{ width: 60, height: 50 }} />
    },
    {
      name: "Blender",
      icon: <img src="https://www.pngmart.com/files/23/Blender-Logo-PNG-Picture.png" alt="Figma" style={{ width: 68, height: 50 }} />
    },
    {
      name: "After Effects",
      icon: <img src="https://1000logos.net/wp-content/uploads/2020/07/After-Effects-Logo-500x315.png" alt="Figma" style={{ width: 80, height: 50 }} />
    },
  ];

  return (
    <section className="bg-black text-white py-5 no-top no-bottom">
      <div className="container">
        {/* --- SECTION 1: DESIGN SKILLS (Updated Layout) --- */}
        <div className="row g-4 align-items-start">
          {/* Left Title */}
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              Design Skills
            </div>
          </div>

          {/* Right Content: Progress Bars */}
          <div className="col-lg-10">
            <div className="row g-4">
              {designSkills.map((skill, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fs-14 fw-bold text-uppercase">
                      {skill.name}
                    </span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#222",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: `${skill.level}%`,
                        backgroundColor: "#fff",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          right: "-20px",
                          top: "-35px",
                          backgroundColor: "#111",
                          color: "#fff",
                          padding: "4px 8px",
                          fontSize: "11px",
                          fontWeight: "bold",
                          border: "1px solid #333",
                        }}
                      >
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="spacer-section" style={{ height: "70px" }} />

        {/* --- SECTION 2: TOOLS LAYOUT --- */}
        <div className="row g-4 align-items-start">
          {/* Left Title */}
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              My Tools
            </div>
          </div>

          {/* Right Content: Icons Grid */}
          <div className="col-lg-10">
            <div style={{ display: "flex", gap: "2rem", flexWrap: "nowrap" }}>
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="wow fadeInRight"
                  data-wow-delay={`.${index + 4}s`}
                  style={{ flex: "1 1 0", minWidth: 0 }}
                >
                  <div className="mb-3">
                    {tool.icon}
                  </div>
                  <p
                    className="fw-bold text-uppercase mb-0"
                    style={{ fontSize: "12px", letterSpacing: "1px" }}
                  >
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
