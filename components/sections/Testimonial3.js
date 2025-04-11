import Slider from "react-slick";
const settings = {
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial3() {
  return (
    <>
      <section className="testimonial-area-three parallax pt-115 pb-120 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Testimonials</span>
                <h2 className="title">Our Clients Feedback</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="testimonial-inner">
                <Slider {...settings} className="testimonial-active-two">
                  <div className="testimonial-item-two">
                    <div className="testimonial-avatar-two">
                      <img
                        src="https://images.unsplash.com/photo-1568585105565-e372998a195d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-content-two">
                      <div className="content-top">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <p>
                        What impressed me most was how proactive they are. We
                        get weekly reports, but most of the time, they’ve
                        already neutralized threats before we even see them.
                        Their threat intelligence capabilities are no joke—this
                        is true enterprise-grade protection.
                      </p>
                      <div className="content-bottom">
                        <h4 className="title">Darrell Steward</h4>
                        <span>Operations Manager, NovaTech Systems</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two">
                    <div className="testimonial-avatar-two">
                      <img
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-content-two">
                      <div className="content-top">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <p>
                        During a recent malware incident, their SOC acted
                        instantly. Within minutes, we had a clear action plan,
                        and within hours, the threat was contained. Their
                        incident response was seamless, and the post-event
                        analysis helped us strengthen our defenses. Absolutely
                        top-tier service.
                      </p>
                      <div className="content-bottom">
                        <h4 className="title">Robert C. Simmons</h4>
                        <span>CTO, MedSecure Solutions</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two">
                    <div className="testimonial-avatar-two">
                      <img
                        src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-content-two">
                      <div className="content-top">
                        <div className="icon">
                          <i className="fas fa-quote-left" />
                        </div>
                        <div className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <p>
                        We've worked with several security providers, but none
                        have matched the responsiveness and expertise of this
                        team. Their SOC caught a phishing attempt before it
                        reached our employees and handled it without disrupting
                        our operations. It feels like we’ve got an elite
                        cybersecurity team on standby 24/7.
                      </p>
                      <div className="content-bottom">
                        <h4 className="title">Karikoka Ahli</h4>
                        <span>Executive Manager</span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
