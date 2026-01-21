const Education = ({
  variant = 1,
  color = "color-1",
  educationData = [
    {
      year: "2019 - 2023",
      degree: "Bachelor of Visual Arts in Product Design",
      school: "Bangalore Central University",
    },
    {
      year: "2016 - 2018",
      degree: "Higher Secondary School",
      school: "The Jain International School, Bilaspur C.G",
    },
  ],
}) => {
  return (
    <section className="no-top no-bottom">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              Education
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row g-4">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="col-md-4 wow fadeInRight"
                  data-wow-delay={`.${index + 4}s`}
                >
                  {variant == 1 ? (
                    <h6>{item.year}</h6>
                  ) : (
                    <div className={`fw-600 fs-14 ${color} mb-2`}>
                      {item.year}
                    </div>
                  )}
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
