import Counter from "./Counter";

const CounterSection = ({ color = "color" }) => {
  const counterData = [
    { end: 8240, text: "Hours of Works" },
    { end: 315, text: "Projects Done" },
    { end: 250, text: "Satisfied Customers" },
    { end: 32, text: "Awards Winning" },
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
            </h3>
            <div className="fs-15">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;
