import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";

const page = () => {
  const services = [
    {
      title: "Custom Website Design",
      description:
        "Tailored websites to match your brand's unique identity and goals.",
    },
    {
      title: "E-commerce Website",
      description:
        "Creating user-friendly online stores with secure payment gateways.",
    },
    {
      title: "Landing Page Design",
      description:
        "High-conversion landing pages for specific marketing campaigns.",
    },
    {
      title: "Front-end Development",
      description:
        "Implementing designs with clean and efficient code using HTML, CSS, JS.",
    },
    {
      title: "Back-end Development",
      description:
        "Building robust back-end systems using technologies like PHP and databases.",
    },
    {
      title: "Content Management System",
      description:
        "Integrating and customizing CMS platforms for easy content management.",
    },
    {
      title: "Website Optimization",
      description:
        "Enhancing website performance, speed, and search engine optimisation.",
    },
    {
      title: "Website Audits",
      description:
        "Conducting audits to identify areas for improvement in design and performance.",
    },
    {
      title: "Content Strategy & Creation",
      description:
        "Developing effective content strategies and providing copywriting services.",
    },
    {
      title: "Social Media Integration",
      description: "Integrating social media platforms to enhance engagement.",
    },
  ];

  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />

        {/* --- HERO SECTION --- */}
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="What I Do" innitialFontSize={300} />
            <Header activePage="3" />
          </div>
        </section>

        {/* --- SERVICES SECTION (Split Layout) --- */}
        <section className="no-top pt-5">
          <div className="container">
            <div className="row">
              {/* LEFT COLUMN: Section Title */}
              <div className="col-md-3">
                <h3
                  className="fw-bold text-uppercase italic mb-5"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "2px",
                    borderLeft: "2px solid #fff",
                    paddingLeft: "15px",
                  }}
                >
                  What I Do
                </h3>
              </div>

              {/* RIGHT COLUMN: Content Grid */}
              <div className="col-md-9">
                <div className="row g-5">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-sm-6 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="relative pb-4">
                        {/* Service Item Title - Also Left Aligned */}
                        <h4 className="fs-20 fw-bold mb-3 text-white">
                          {service.title}
                        </h4>
                        <p className="opacity-60 fs-15 lh-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};

export default page;
