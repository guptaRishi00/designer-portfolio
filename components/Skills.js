import React from "react";
import { TbBrandFigma } from "react-icons/tb";
import { SiAdobephotoshop, SiBlender, SiAdobeaftereffects, SiAdobexd } from "react-icons/si";
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

  // UPDATED: Added brand colors to the icons via the style prop
  const tools = [
    { name: "Figma", icon: <TbBrandFigma size={35} style={{ color: '#A259FF' }} /> }, // Figma Purple
    { name: "Photoshop", icon: <SiAdobephotoshop size={35} style={{ color: '#31A8FF' }} /> }, // Photoshop Blue
    { name: "Sketch", icon: <PiSketchLogo size={35} style={{ color: '#FDC900' }} /> }, // Sketch Orange/Yellow
    { name: "Adobe XD", icon: <SiAdobexd size={35} style={{ color: '#FF61F6' }} /> }, // XD Magenta
    { name: "Blender", icon: <SiBlender size={35} style={{ color: '#E87D0D' }} /> }, // Blender Orange
    { name: "After Effects", icon: <SiAdobeaftereffects size={35} style={{ color: '#D291FF' }} /> }, // AE Light Purple
  ];

  return (
    <section className="bg-black text-white py-5">
      <div className="container">
        {/* --- SECTION 1: PROGRESS BARS (Unchanged) --- */}
        <div className="row mb-5 pb-5">
          <div className="col-lg-12">
            <h3 className="mb-5 fs-20 fw-bold text-uppercase italic">Design Skills</h3>
            <div className="row">
              {designSkills.map((skill, index) => (
                <div key={index} className="col-md-6 mb-5">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fs-14 fw-bold text-uppercase">{skill.name}</span>
                  </div>
                  <div style={{ position: 'relative', width: '100%', height: '2px', backgroundColor: '#222' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${skill.level}%`, backgroundColor: '#fff' }}>
                      <div style={{
                        position: 'absolute', right: '-20px', top: '-35px',
                        backgroundColor: '#111', color: '#fff', padding: '4px 8px',
                        fontSize: '11px', fontWeight: 'bold', border: '1px solid #333'
                      }}>
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

        {/* --- SECTION 2: MINIMALIST TOOLS LAYOUT WITH COLORED LOGOS --- */}
        <div className="row align-items-start pt-4">
          {/* Left Title */}
          <div className="col-md-2">
            <h6 className="fw-bold text-uppercase m-0" style={{ letterSpacing: '1px', fontSize: '13px' }}>
              My Skills
            </h6>
          </div>

          {/* Icons Grid */}
          <div className="col-md-10">
            <div className="row g-4">
              {tools.map((tool, index) => (
                <div key={index} className="col-6 col-sm-4 col-md-2 text-center">
                  {/* Icon Box - kept dark background for contrast */}
                  <div className="d-flex justify-content-center align-items-center mb-3 mx-auto"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#0a0a0a',
                      borderRadius: '4px'
                    }}>
                    {tool.icon}
                  </div>
                  {/* Label */}
                  <p className="fw-bold text-uppercase mb-0" style={{ fontSize: '12px', letterSpacing: '1px' }}>
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