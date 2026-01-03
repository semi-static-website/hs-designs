export default function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="../img/about.jpg" className="img-responsive" alt="About" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>We are dedicated professionals passionate about bringing your home improvement dreams to life. With a commitment to quality craftsmanship and personalized service, we transform spaces to meet your unique needs and style.</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Years of Experience</li>
                    <li>Fully Insured</li>
                    <li>Cost Control Experts</li>
                    <li>100% Satisfaction Guarantee</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Satisfied Customers</li>
                    <li>Project Management</li>
                    <li>Affordable Pricing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
