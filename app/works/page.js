import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import Link from "next/link";

const works = [
  {
    image: "/socleh2.png",
    title: "Socle RH",
    description:
      "Built a polished HR site that reinforces expertise through intuitive UX and a confident visual system.",
    link: "https://www.soclerh.fr/fr",
  },
  {
    image: "/neurolinq2.png",
    title: "NeuroLinq",
    description:
      "Seamlessly connects individuals with nurse-led ADHD assessments and workplace support via an accessible UI that instills professional trust.",
    link: "https://neurolinq-2.vercel.app/",
  },
  {
    image: "/betting.png",
    title: "BettinGator",
    description:
      "A clean, operable UI for esport and AI-hosted fights using card layouts, fluid indicators, and clear visual hierarchy to enhance readability and user engagement.",
    link: "https://www.behance.net/gallery/228485313/UIUX-Case-Study-Bettingator",
  },
  {
    image: "/frame2.png",
    title: "Jia Organic Eco Resort",
    description:
      "Elegant sustainable aesthetics with clean layouts to reflect the resort's eco ethos, blending a nature environment on storytelling to highlight wellness and relaxation.",
    link: "https://www.jiaorganicecoresort.com/",
  },
  {
    image: "/Frame3.png",
    title: "Bloomvest",
    description:
      "Simplified complex financial services into an intuitive, credibility-focused experience. Used data visualization techniques for CA to improve user understanding and trust.",
    link: "https://www.bloomvest.io/",
  },
  {
    image: "/Frame4.png",
    title: "Newspace Research & Technologies",
    description:
      "Designed mission-critical control interfaces for UAV operations with a focus on real-time data accuracy and system reliability to enhance performance.",
    link: "/Projects/Newspace",
  },
];

const WorkItem = ({ title, image, description, link }) => (
  <div className="col-lg-4">
    <div className="hover relative overflow-hidden text-light">
      <Link href={link || "/work-single"} target={link && link.startsWith("http") ? "_blank" : "_self"} className="overflow-hidden d-block relative">
        <img
          src={image.includes("/") ? image : image.includes(".png") ? image : `images/works/${image}`}
          className="img-fluid hover-scale-1-2 img-fixed-height"
          alt="image"
        />
        <div className="absolute w-100 h-100 top-0 start-0 hover-op-1 transition-all-3">
          <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="fs-40 text-white">{title}</h2>
          </div>
          <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
            <div className="d-tag-s2">{description}</div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

const page = () => {
  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="My Works" innitialFontSize={300} />
            <Header activePage="4" />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-4 wow fadeInUp" data-wow-delay=".3s">
              {works.map((work, index) => (
                <WorkItem key={index} {...work} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};

const styles = `
  .hover-op-1 {
    opacity: 0;
    background: rgba(0,0,0,0.5);
  }
  .hover:hover .hover-op-1 {
    opacity: 1;
  }
  .transition-all-3 {
    transition: all 0.3s ease;
  }
  .img-fixed-height {
    height: 350px;
    width: 100%;
    object-fit: cover;
  }
`;

export default function PageWrapper() { // cleaner approach
  return (
    <>
      <style>{styles}</style>
      {page()}
    </>
  )
}
