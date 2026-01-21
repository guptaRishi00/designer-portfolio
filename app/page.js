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
    .spacer-section { height: 70px; }
    @media (max-width: 768px) {
      h1 { font-size: 1.8rem !important; }
      h2 { font-size: 1.4rem !important; }
      h4 { font-size: 1rem !important; }
      p, .lead { font-size: 0.9rem !important; }
      .subtitle { font-size: 0.7rem !important; }
      .spacer-double { height: 40px !important; }
      .spacer-single { height: 20px !important; }
      .spacer-section { height: 40px !important; }
      .de_count h3 { font-size: 2rem !important; }
      .container { padding-left: 15px !important; padding-right: 15px !important; }
      section { padding-top: 20px !important; padding-bottom: 20px !important; }
      section.no-top { padding-top: 0 !important; }
      section.no-bottom { padding-bottom: 0 !important; }
      .work-card { height: 250px !important; }
      .work-card-title { font-size: 1.2rem !important; }
    }
  `;

  return (
    <NathanLayout rootElements={pageStyles}>
      {/* FIX: Use dangerouslySetInnerHTML to prevent hydration errors */}
      <style dangerouslySetInnerHTML={{ __html: mobileStyles }} />

      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top no-bottom">
          <div className="text-fit-wrapper">
            <FitParentTitle title={"SHRISTI"} />
            <Header activePage="1" />
          </div>
          <div className="spacer-double" />
          <AvailableForWork />
        </section>
        <div className="spacer-section" />
        <MarqueeNathan />
        <div className="spacer-section" />
        <About />
        <div className="spacer-section" />
        <Services />
        <div className="spacer-section" />
        <section className="no-top no-bottom">
          <div className="container">
            <CounterSection />
          </div>
        </section>
        <div className="spacer-section" />
        <Works />
      </div>
    </NathanLayout>
  );
};

export default page;
