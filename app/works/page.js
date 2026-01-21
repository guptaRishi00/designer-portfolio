import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import Link from "next/link";

const works = [
  {
    image: "/socleh2.png",
    title: "Socle RH",
    description: "HR SOLUTIONS", // Using this for the category slot
    year: "FREELANCE",
    link: "https://www.soclerh.fr/fr",
  },
  {
    image: "/neurolinq2.png",
    title: "NeuroLinq",
    description: "HEALTHCARE & ADHD SUPPORT",
    year: "FREELANCE",
    link: "https://neurolinq-2.vercel.app/",
  },
  {
    image: "/betting.png",
    title: "BettinGator",
    description: "SPORTS BETTING INSIGHTS",
    year: "FREELANCE",
    link: "https://www.behance.net/gallery/228485313/UIUX-Case-Study-Bettingator",
  },
  {
    image: "/frame2.png",
    title: "Jia Organic Eco Resort",
    description: "ECO RESORT",
    year: "FREELANCE",
    link: "https://www.jiaorganicecoresort.com/",
  },
  {
    image: "/Frame3.png",
    title: "Bloomvest",
    description: "FINANCIAL EDUCATION PLATFORM",
    year: "FREELANCE",
    link: "https://www.bloomvest.io/",
  },
  {
    image: "/Frame4.png",
    title: "Newspace Research & Technologies",
    description: "AEROSPACE & DEFENSE",
    year: "2023-PRESENT",
    link: "/Projects/Newspace",
  },
];

const WorkItem = ({ title, image, description, year, link }) => (
  <div className="col-lg-4">
    <Link
      href={link || "/work-single"}
      target={link && link.startsWith("http") ? "_blank" : "_self"}
      className="work-card-link"
    >
      <div className="work-card">
        <div
          className="work-card-bg"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="work-card-overlay" />
        <div className="work-card-content">
          <h2 className="work-card-title">{title}</h2>
          <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
            <div className="d-tag-s2">{description}</div>
            <div className="fw-bold">{year}</div>
          </div>
        </div>
      </div>
    </Link>
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

// These styles are copied exactly from your homepage Works component
const styles = `
  .work-card-link {
    text-decoration: none;
    display: block;
  }
  .work-card {
    position: relative;
    height: 350px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  .work-card:hover {
    transform: scale(1.02);
  }
  .work-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.4s ease;
  }
  .work-card:hover .work-card-bg {
    transform: scale(1.1);
  }
  .work-card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
  .work-card-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    color: #fff;
  }
  .work-card-title {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 0;
    word-wrap: break-word;
    text-align: left;
  }
`;

export default function PageWrapper() {
  return (
    <>
      <style>{styles}</style>
      {page()}
    </>
  );
}