import Link from "next/link";

export default function About2() {
  return (
    <>
      <section
        className="about-area-two parallax about-bg"
        data-background="/assets/img/bg/about_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-0 order-lg-2">
              <div className="about-img-wrap-two">
                <ul className="list-wrap">
                  <li>
                    <div
                      className="year-experience-wrap wow fadeInDown"
                      data-wow-delay=".2s"
                    >
                      <div className="icon">
                        <img
                          src="/assets/img/icon/h2_about_icon03.svg"
                          alt=""
                        />
                      </div>
                      <h2 className="title">
                        07 Years <span>Experience</span>
                      </h2>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://images.unsplash.com/photo-1538688273852-e29027c0c176?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="wow fadeInLeft"
                      data-wow-delay=".4s"
                    />
                  </li>
                </ul>
                <ul className="list-wrap">
                  <li>
                    <img
                      src="https://images.unsplash.com/photo-1529421308418-eab98863cee4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="wow fadeInRight"
                      data-wow-delay=".2s"
                    />
                  </li>
                  <li>
                    <img
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="wow fadeInUp"
                      data-wow-delay=".4s"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-two">
                <div className="section-title mb-30">
                  <span className="sub-title">About Our Company</span>
                  <h2 className="title">
                    Comprehensive SOC Solutions for Modern Cybersecurity
                    Challenges
                  </h2>
                </div>
                <p>
                  PeerSOC specializes in advanced Security Operations Center
                  (SOC) solutions, addressing complex cybersecurity needs across
                  various industries. Our team of experts delivers a tailored
                  approach to protect, detect, and respond to cybersecurity
                  threats.
                </p>
                <div className="about-list-two">
                  <ul className="list-wrap">
                    <li className="list-item">
                      <div className="icon">
                        <img
                          src="/assets/img/icon/h2_about_icon01.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h5 className="title">Custom-Tailored Solutions</h5>
                      </div>
                    </li>
                    <li className="list-item">
                      <div className="icon">
                        <img
                          src="/assets/img/icon/h2_about_icon02.svg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h5 className="title">24/7 Security Monitoring</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link href="/about" className="btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
