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
      name: "Adobe XD",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" alt="Figma" style={{ width: 50, height: 50 }} />
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

        {/* --- SECTION 2: TOOLS LAYOUT --- */}
        <div className="row align-items-start" style={{ marginTop: '25px' }}>
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
