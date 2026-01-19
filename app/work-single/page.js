import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
const page = () => {
  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title={"BETTINGATOR"} innitialFontSize={498.2} />
            <Header activePage="works" />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Project Details
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="row g-4 gx-5 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="col-sm-6">
                        <h4>Overview</h4>
                        <p className="no-bottom">
                          Bettingator is a sports prediction platform featuring AI-driven tips and tipster analytics. The project involved designing a modern, data-rich web UI with a focus on clarity, trust, and real-time engagement.
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h4>Objectives</h4>
                        <ul className="ul-style-2">
                          <li>Create a clean dark-mode design</li>
                          <li>Develop scalable UI patterns</li>
                          <li>Implement micro-interactions for usability</li>
                          <li>Deliver responsive, component-based layouts</li>
                        </ul>
                      </div>
                    </div>
                    <div className="spacer-double" />
                    <div
                      className="row g-4 gx-5 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <div className="col-lg-3 col-sm-2">
                        <h6>Category</h6>
                        Sports Betting Insights
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Tools</h6>
                        Figma, AI
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Client</h6>
                        Bettingator
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Year</h6>
                        2024
                      </div>
                    </div>
                    <div className="spacer-double" />
                    <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
                      <div className="col-lg-6">
                        <div className="hover relative overflow-hidden text-light">
                          <a
                            href="images/work-single/1.webp"
                            className="image-popup overflow-hidden d-block relative"
                          >
                            <img
                              src="betting.png"
                              className="img-fluid hover-scale-1-2"
                              alt="image"
                            />
                            <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
                              <div className="d-tag-s2">
                                UI/UX Design
                              </div>
                              <div className="fw-bold text-uppercase">
                                Bettingator
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="hover relative overflow-hidden text-light">
                          <a
                            href="images/work-single/2.webp"
                            className="image-popup overflow-hidden d-block relative"
                          >
                            <img
                              src="images/work-single/2.webp"
                              className="img-fluid hover-scale-1-2"
                              alt="image"
                            />
                            <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
                              <div className="d-tag-s2">
                                Mobile Responsive
                              </div>
                              <div className="fw-bold text-uppercase">
                                Bettingator
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Result
                </div>
              </div>
              <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
                <h2 className="lh-1">
                  Delivered a high-trust, engaging interface that simplifies complex sports analytics for users.
                </h2>
                <p>Bettingator Team</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
