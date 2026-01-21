const Experiences = ({
  variant = 1,
  color = "color-1",
  experiencesData = [
    {
      period: "2023 – Present",
      title: "Design Engineer 1",
      company: "Newspace Research & Technology",
    },
    {
      period: "May 2023 - July 2023",
      title: "UI/UX Designer",
      company: "Beanpole LLP",
    },
  ],
}) => {
  return (
    <section className="no-top no-bottom">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              Experiences
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row g-4">
              {experiencesData.map((exp, index) => (
                <div
                  key={index}
                  className="col-md-4 wow fadeInRight"
                  data-wow-delay={`.${index + 4}s`}
                >
                  {variant == 1 ? (
                    <h6>{exp.period}</h6>
                  ) : (
                    <div className={`fw-600 fs-14 ${color} mb-2`}>
                      {exp.period}
                    </div>
                  )}

                  <h3>{exp.title}</h3>
                  <p>{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
