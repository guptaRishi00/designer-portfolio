import About from "@/components/About";

import CounterSection from "@/components/CounterSection";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import FitParentTitle from "@/components/FitParentTitle";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
const page = () => {
  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="About Me" innitialFontSize={300} />
            <Header activePage="2" />
          </div>
        </section>
        <About aboutTitle="Who I Am" />
        <Skills />

        <Experiences />
        <Education />

      </div>
    </NathanLayout>
  );
};
export default page;
