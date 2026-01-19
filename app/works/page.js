import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import Link from "next/link";

const works = [
  {
    title: "Bettingator",
    image: "betting.png",
    tag: "Sports Betting Insights Platform",
    year: "2024",
  },
  {
    title: "Newspace",
    image: "Project4.png",
    tag: "Website Redesign",
    year: "2023",
  },
  {
    title: "Neurolinq",
    image: "neurolinq.png",
    tag: "Healthcare & Neuroscience Platform",
    year: "2023",
  },
];

const WorkItem = ({ title, image, tag, year }) => (
  <div className="col-lg-4">
    <div className="hover relative overflow-hidden text-light">
      <Link href="/work-single" className="overflow-hidden d-block relative">
        <img
          src={image.includes("/") ? image : image.includes(".png") ? image : `images/works/${image}`}
          className="img-fluid hover-scale-1-2"
          alt="image"
        />
        <div className="absolute w-100 h-100 top-0 start-0 hover-op-1 transition-all-3">
          <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="fs-40 text-white">{title}</h2>
          </div>
          <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
            <div className="d-tag-s2">{tag}</div>
            <div className="fw-bold">{year}</div>
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
            <FitParentTitle title="My Works" innitialFontSize={363} />
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
`;

export default function PageWrapper() { // cleaner approach
  return (
    <>
      <style>{styles}</style>
      {page()}
    </>
  )
}
