import Link from "next/link";
import CounterSection from "./CounterSection";
import Image from "next/image";

const AvailableForWork = ({ variant = "default" }) => {
  const isVariant2 = variant === "variant2";

  const content = {
    default: {
      subtitle: "Available for Work",
      title: "UI/UX Designer from Bangalore",
      description:
        "Results-driven UI/UX Designer with a passion for delivering seamless, user-centered digital experiences. Proficient in translating complex ideas into intuitive designs.",
      aboutLink: "/about",
      imageSrc: "/Profile.jpeg",
      counterColor: "color",
    },
    variant2: {
      subtitle: "Available for Work",
      title: (
        <>
          <span className="color-1">Hair</span> and{" "}
          <span className="color-1">Makeup</span> Artist from New York
        </>
      ),
      description:
        "Hi, I'm Selena, a passionate makeup artist based in the heart of New York City. With over 12 years of experience in the beauty industry, I've had the privilege of working with a diverse clientele.",
      aboutLink: "/03_about",
      imageSrc: "03_images/profile_pic_1.jpg",
      counterColor: "color-1",
    },
  };

  const selectedContent = isVariant2 ? content.variant2 : content.default;

  return (
    <div className="container">
      <div className="spacer-double d-lg-none d-sm-block" />
      <div className="row align-items-center g-4 gx-5">
        <div className="col-lg-6">
          <div className="relative">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {selectedContent.subtitle}
            </div>
            <h1 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
              {selectedContent.title}
            </h1>
          </div>
          <p className="lead wow fadeInUp" data-wow-delay=".5s">
            {selectedContent.description}
          </p>
          <div className="spacer-10" />
          <a
            className="w-150px btn-line wow fadeIn"
            data-wow-delay=".6s"
            href="https://drive.google.com/file/d/1B6uIL_r8pMvxZyL53F80j77yCFE5CJQi/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src={selectedContent.imageSrc}
            className="w-75 d-block mx-auto wow fadeInUp"
            data-wow-delay=".6s"
            alt="image"
          />
        </div>
      </div>
      {/* <CounterSection color={selectedContent.counterColor} /> */}
    </div>
  );
};

export default AvailableForWork;
