const About = () => {
  return (
    <div>
      {" "}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Kenrick
            <span className="text-primary">Betah</span>
          </h1>
          <div className="subheading mb-5">
            <a href="mailto:name@email.com">S2200451@student.unklab.ac.id</a>
          </div>
          <p className="lead mb-5">
            Experienced Technical Lead with a demonstrated history of working in
            the logistics and e-commerce industry. Skilled in Angular, ReactJS,
            MongoDB, Node.js and Express.js. To seek a challenging position in a
            company offering a motivating and vibrant work environment, on the
            basis of my knowledge, fast learning and creative skills.
          </p>
          <div className="social-icons">
            <a className="social-icon" href="#!">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-github"></i>
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="social-icon" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default About;
