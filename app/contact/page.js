import ContactForm from "@/components/ContactForm";
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
            <FitParentTitle title="Hire Me" innitialFontSize={300} />
            <Header activePage="6" />
          </div>
        </section>
        <ContactForm />
      </div>
    </NathanLayout>
  );
};
export default page;
