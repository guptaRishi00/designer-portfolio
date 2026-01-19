import Marquee from "react-fast-marquee";

const MarqueeNathan = ({
  textColor = "light",
  variant = "default",
  marqueeData = [
    { id: 1, text: "USER RESEARCH", stroke: false },
    { id: 2, text: "WIREFRAMING", stroke: true },
    { id: 3, text: "PROTOTYPING", stroke: false },
    { id: 4, text: "VISUAL DESIGN", stroke: true },
    { id: 5, text: "DESIGN THINKING", stroke: false },
    { id: 6, text: "AGILE", stroke: true },
    { id: 7, text: "FIGMA", stroke: false },
    { id: 8, text: "ADOBE SUITE", stroke: true },
  ],
}) => {
  const isVariant2 = variant === "variant2";
  // If marqueeData is passed as simple array from parent, handle it? 
  // But usually it relies on default.
  // Let's assume default is used.

  return (
    <section className={`text-${isVariant2 ? "dark" : textColor} no-top`}>
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <Marquee
            className=""
            speed={200}
            loop={0}
            play={true}
            autoFill={true}
          >
            {marqueeData.map((item) => (
              <span
                key={item.id}
                className={`d-item-txt ${item.stroke ? "stroke-text" : ""}`}
              >
                {item.text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueeNathan;

export const MarqueeNathan2 = () => {
  return (
    <section className="bg-color text-dark no-top no-bottom">
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <Marquee
            className=""
            speed={200}
            loop={0}
            play={true}
            autoFill={true}
          >
            {[
              "Strength",
              "Confidence",
              "Transformation",
              "Empower",
              "Motivate",
              "Achieve",
              "Fit",
              "Focused",
              "Unstoppable",
            ].map((text, index) => (
              <span key={index} className="d-item-txt">
                {text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export const MarqueeNathan3 = () => {
  return (
    <div className="wow fadeInRight d-flex mt-20">
      <div className="de-marquee-list wow bg-color pt-2 pb-10 lh-1 text-dark text-uppercase fs-60 fw-600 xs-hide">
        <Marquee
          speed={200}
          loop={0}
          play={true}
          autoFill={true}
          className="d-item"
        >
          {[
            "Masterpiece",
            "Savor",
            "Artisan",
            "Crafted",
            "Delicious",
            "Gourmet",
            "Essence",
            "Exquisite",
            "Fusion",
            "Temptation",
          ].map((word, index) => (
            <span key={index} className="mx-3">
              {word}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
