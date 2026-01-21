const Footer = ({ footerShape = false }) => {
  // Define custom styles for footer text elements
  const footerStyles = `
    .d-menu-1 a {
      font-size: 1.5rem !important; /* Increases Linkedin/Behance links */
      margin-right: 30px;
      font-weight: 500;
      text-decoration: none;
      transition: opacity 0.3s;
    }
    .d-menu-1 a:hover {
      opacity: 0.6;
    }
    .d-menu-1 p {
      font-size: 1.1rem !important; /* Increases copyright text */
      margin-top: 15px;
    }
    /* Optional: Ensure "Let's Talk" stays responsive but large */
    footer h2 {
      font-size: clamp(3.5rem, 8vw, 6.5rem) !important; 
    }
  `;

  return (
    <footer>
      {/* Replace the existing <style> tag in your Footer component with this */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .d-menu-1 a {
      font-size: 1.5rem !important; /* Increases Linkedin/Behance links */
      margin-right: 30px;
      font-weight: 500;
      text-decoration: none;
      transition: opacity 0.3s;
    }
    .d-menu-1 a:hover {
      opacity: 0.6;
    }
    .d-menu-1 p {
      font-size: 1.1rem !important; /* Increases copyright text */
      margin-top: 15px;
    }
    /* The quotes in the comment below were causing the error */
    /* Optional: Ensure "Let's Talk" stays responsive but large */
    footer h2 {
      font-size: clamp(3.5rem, 8vw, 6.5rem) !important; 
    }
`,
        }}
      />
      {footerShape && (
        <img
          src="images/misc/scratches-3.webp"
          className="w-20 me-5 abs bottom-0 abs-center"
          alt=""
        />
      )}
      <div className="container-fluid">
        <div className="px-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="d-menu-1" data-wow-delay=".3s">
                <a
                  href="https://www.linkedin.com/in/shristi-mittal26/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>

                <a
                  href="https://www.behance.net/shristimittal1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>

                <p className="no-bottom">
                  © {new Date().getFullYear()} Shristi Mittal
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a href="contact.html">
                <h2
                  className="fs-84 fw-800 pe-3 shuffle wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  Let's Talk
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
