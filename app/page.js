import About from "@/components/About";
import AvailableForWork from "@/components/AvailableForWork";
import Blog from "@/components/Blog";
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
  return (
    <NathanLayout rootElements={pageStyles}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title={"NATHAN"} />
            <Header activePage="1" />
          </div>
          <div className="spacer-double" />
          <AvailableForWork />
        </section>
        <About />
        <Services />
        <Works />
        <MarqueeNathan />
        <Blog />
      </div>
    </NathanLayout>
  );
};
export default page;
