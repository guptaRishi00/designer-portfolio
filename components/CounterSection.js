import Counter from "./Counter";

const CounterSection = ({ color = "color" }) => {
  const counterData = [
    { end: 5240, suffix: "+", text: "Hours of Works" },
    { end: 3, suffix: "+", text: "Years of Experience" },
    { end: 420, suffix: "+", text: "Screens Designed" },
    { end: 16, suffix: "%", text: "Bussiness Impact" },
  ];

  return (
    <div className="row g-4">
      {counterData.map((item, index) => (
        <div key={index} className="col-md-3 col-6 mb-sm-30">
          <div
            className={`de_count text-center fs-15 wow fadeInRight`}
            data-wow-delay={`${index * 0.2}s`}
          >
            <h3 className={`fs-48 mb-1 ${color}`}>
              <Counter end={item.end} />
              {item.suffix && <span>{item.suffix}</span>}
            </h3>
            <div className="fs-15">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;

