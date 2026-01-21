import { FaUserCircle } from "react-icons/fa";

const ClientReviews = () => {
    const reviews = [
        {
            name: "Socle RH Team",
            role: "HR Solutions Company",
            image: "/socleh2.png",
            quote:
                "Shristi delivered an exceptional HR platform design that perfectly captures our brand identity. The user experience is intuitive and our clients love navigating through the site.",
        },
        {
            name: "NeuroLinq Team",
            role: "Healthcare & ADHD Support",
            image: "/neurolinq2.png",
            quote:
                "Working with Shristi was a fantastic experience. The healthcare platform design is clean, accessible, and patient-friendly. It has significantly improved our user engagement.",
        },
        {
            name: "Bloomvest Team",
            role: "Financial Education Platform",
            image: "/Frame3.png",
            quote:
                "The financial education platform Shristi designed for us is visually stunning and incredibly user-friendly. Our users find it easy to navigate and learn about investments.",
        },
        {
            name: "Jia Organic Team",
            role: "Eco Resort",
            image: "/frame2.png",
            quote:
                "Shristi created a beautiful, nature-inspired design for our eco resort website. The visual appeal perfectly represents our brand and has helped attract more guests.",
        },
        {
            name: "Newspace Team",
            role: "Aerospace & Defense",
            image: "/Frame4.png",
            quote:
                "The design work for our aerospace company was outstanding. Shristi understood our technical requirements and delivered a professional, cutting-edge website.",
        },
    ];

    return (
        <section className="no-top">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-2">
                        <h3
                            className="fw-bold text-uppercase italic"
                            style={{ fontSize: "13px", letterSpacing: "1px" }}
                        >
                            What They Say
                        </h3>
                    </div>
                    <div className="col-lg-10">
                        <div className="row g-4">
                            {reviews.map((review, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div
                                        className="review-card p-4 h-100"
                                        style={{
                                            backgroundColor: "#0a0a0a",
                                            border: "1px solid #222",
                                        }}
                                    >
                                        <div className="d-flex align-items-center mb-3">
                                            <FaUserCircle size={50} className="me-3" style={{ color: "#666" }} />
                                            <div>
                                                <h6 className="mb-0 fw-bold text-white">
                                                    {review.name}
                                                </h6>
                                                <small className="text-muted">{review.role}</small>
                                            </div>
                                        </div>
                                        <p
                                            className="mb-0 text-white"
                                            style={{ fontSize: "14px", lineHeight: "1.7", opacity: 0.8 }}
                                        >
                                            "{review.quote}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
