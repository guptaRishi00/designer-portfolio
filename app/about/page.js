import About from "@/components/About";

import CounterSection from "@/components/CounterSection";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import FitParentTitle from "@/components/FitParentTitle";
import Skills from "@/components/Skills";
import ClientReviews from "@/components/ClientReviews";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
const page = () => {
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
    }
  `;

  return (
    <NathanLayout>
      <style dangerouslySetInnerHTML={{ __html: mobileStyles }} />
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top no-bottom">
          <div className="text-fit-wrapper">
            <FitParentTitle title="About Me" innitialFontSize={380} />
            <Header activePage="2" />
          </div>
        </section>
        <div className="spacer-section" />
        <About aboutTitle="Who I Am" />
        <div className="spacer-section" />
        <Skills />
        <div className="spacer-section" />
        <Experiences />
        <div className="spacer-section" />
        <Education />
        <div className="spacer-section" />
        <ClientReviews />
      </div>
    </NathanLayout>
  );
};
export default page;
