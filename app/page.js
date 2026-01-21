import About from "@/components/About";
import AvailableForWork from "@/components/AvailableForWork";
import CounterSection from "@/components/CounterSection";
import FitParentTitle from "@/components/FitParentTitle";
import MarqueeNathan from "@/components/MarqueeNathan";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";

const page = () => {
  const pageStyles = {
    "--primary-color": "#ffffff",
    "--primary-color-rgb": "255, 255, 255",
    "--secondary-color": "#ffffff",
    "--secondary-color-rgb": "255, 255, 255",
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      h1 {
        font-size: 1.8rem !important;
      }
      h2 {
        font-size: 1.4rem !important;
      }
      h4 {
        font-size: 1rem !important;
      }
      p, .lead {
        font-size: 0.9rem !important;
      }
      .subtitle {
        font-size: 0.7rem !important;
      }
      .spacer-double {
        height: 40px !important;
      }
      .spacer-single {
        height: 20px !important;
      }
      .de_count h3 {
        font-size: 2rem !important;
      }
      .container {
        padding-left: 15px !important;
        padding-right: 15px !important;
      }
      section {
        padding-top: 30px !important;
        padding-bottom: 30px !important;
      }
      section.no-top {
        padding-top: 0 !important;
      }
      .work-card {
        height: 250px !important;
      }
      .work-card-title {
        font-size: 1.2rem !important;
      }
    }
  `;

  return (
    <NathanLayout rootElements={pageStyles}>
      <style>{mobileStyles}</style>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title={"SHRISTI"} />
            <Header activePage="1" />
          </div>
          <div className="spacer-double" />
          <AvailableForWork />
        </section>
        <MarqueeNathan />
        <About />
        <Services />
        <section className="no-top">
          <div className="container">
            <CounterSection />
          </div>
        </section>
        <Works />
        {/* <MarqueeNathan /> */}
      </div>
    </NathanLayout>
  );
};
export default page;
