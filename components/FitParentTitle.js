"use client";
import { Fragment, useEffect, useRef, useState } from "react";

const FitParentTitle = ({
  title,
  innitialFontSize = 480.8,
  subtitle,
  subtitleClasses = "abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn",
}) => {
  const titleRef = useRef(null);
  const [fontSize, setFontSize] = useState(innitialFontSize);

  useEffect(() => {
    const fitText = () => {
      if (!titleRef.current) return;
      const calculatedSize = innitialFontSize * (window.innerWidth / 1920);
      // Use bigger fixed size on mobile for better visibility
      if (window.innerWidth < 768) {
        setFontSize(120);
      } else {
        setFontSize(calculatedSize);
      }
    };
    fitText();
    window.addEventListener("resize", fitText);
    return () => window.removeEventListener("resize", fitText);
  }, [innitialFontSize]);

  return (
    <Fragment>
      <style>{`
        @media (max-width: 768px) {
          .text-fit {
            font-size: 4.5rem !important;
          }
        }
      `}</style>
      <h1
        ref={titleRef}
        className="text-fit wow fadeInDown fit_to_parent animated"
        style={{ margin: 0, padding: 0, fontSize: `${fontSize}px` }}
      >
        {title}
      </h1>
      {subtitle && (
        <div className={subtitleClasses} data-wow-delay=".5s">
          {subtitle}
        </div>
      )}
    </Fragment>
  );
};

export default FitParentTitle;
