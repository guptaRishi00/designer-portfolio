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
      icon: <TbBrandFigma size={35} style={{ color: "#A259FF" }} />,
    },
    {
      name: "Photoshop",
      icon: <SiAdobephotoshop size={35} style={{ color: "#31A8FF" }} />,
    },
    {
      name: "Sketch",
      icon: <PiSketchLogo size={35} style={{ color: "#FDC900" }} />,
    },
    {
      name: "Adobe XD",
      icon: <SiAdobexd size={35} style={{ color: "#FF61F6" }} />,
    },
    {
      name: "Blender",
      icon: <SiBlender size={35} style={{ color: "#E87D0D" }} />,
    },
    {
      name: "After Effects",
      icon: <SiAdobeaftereffects size={35} style={{ color: "#D291FF" }} />,
    },
  ];

  return (
    <section className="bg-black text-white py-5">
      <div className="container">
        {/* --- SECTION 1: DESIGN SKILLS (Updated Layout) --- */}
        <div className="row mb-5 pb-5">
          {/* Left Title */}
          <div className="col-md-2">
            <h3
              className="fw-bold text-uppercase italic"
              style={{ fontSize: "13px", letterSpacing: "1px" }}
            >
              Design Skills
            </h3>
          </div>

          {/* Right Content: Progress Bars */}
          <div className="col-md-10">
            <div className="row">
              {designSkills.map((skill, index) => (
                <div key={index} className="col-md-6 mb-5">
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

        <hr className="opacity-10 mb-5" />

        {/* --- SECTION 2: TOOLS LAYOUT --- */}
        <div className="row align-items-start pt-4">
          {/* Left Title */}
          <div className="col-md-2">
            <h6
              className="fw-bold text-uppercase m-0"
              style={{ letterSpacing: "1px", fontSize: "13px" }}
            >
              My Tools
            </h6>
          </div>

          {/* Right Content: Icons Grid */}
          <div className="col-md-10">
            <div className="row g-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="col-6 col-sm-4 col-md-2 text-center"
                >
                  <div
                    className="d-flex justify-content-center align-items-center mb-3 mx-auto"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#0a0a0a",
                      borderRadius: "4px",
                    }}
                  >
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
