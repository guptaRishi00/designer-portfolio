import { TbBrandFigma } from "react-icons/tb";
import { SiAdobephotoshop, SiBlender, SiAdobeaftereffects } from "react-icons/si";
import { PiSketchLogo } from "react-icons/pi";

const Skills = ({ dark }) => {


  return (
    <section className="no-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="text-center wow fadeInUp" data-wow-delay=".3s">
              <h2>My Skills</h2>
            </div>
          </div>

          <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
            <h3 className="mb-4">Design Skills & Methodologies</h3>
            <div className="d-flex flex-wrap gap-3 mb-5">
              {[
                "User-Centered Design (UCD)",
                "Design Thinking",
                "User Research",
                "Wireframing",
                "Prototyping",
                "Usability Testing",
                "Interaction Design",
                "Visual Design",
                "Agile",
                "Lean UX",
              ].map((skill, index) => (
                <span key={index} className="d-tag-s2 p-3 fs-16">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
            <h3 className="mb-4">Software & Tools</h3>
            <div className="row g-4 gx-5 mb-5 justify-content-center">
              {[
                { name: "Figma", icon: <TbBrandFigma size={50} /> },
                { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={50} /> },
                { name: "Sketchbook", icon: <PiSketchLogo size={50} /> },

                { name: "Blender", icon: <SiBlender size={50} /> },
                { name: "Adobe After Effects", icon: <SiAdobeaftereffects size={50} /> },
              ].map((skill, index) => (
                <div key={index} className="col-sm-2 col-4 text-center">
                  <div className="mb-3 d-flex justify-content-center align-items-center" style={{ height: "60px" }}>
                    {skill.icon ? (
                      skill.icon
                    ) : (
                      <img
                        src={skill.image}
                        style={{ width: "50px", height: "auto" }}
                        alt={skill.name}
                      />
                    )}
                  </div>
                  <h5>{skill.name}</h5>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-12 wow fadeInUp" data-wow-delay=".6s">
            <h3 className="mb-4">Soft Skills</h3>
            <div className="d-flex flex-wrap gap-3">
              {[
                "Collaboration",
                "Communication",
                "Problem-Solving",
                "Critical Thinking",
              ].map((skill, index) => (
                <span key={index} className="d-tag-s2 p-3 fs-16">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
