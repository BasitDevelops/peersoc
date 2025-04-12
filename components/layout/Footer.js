import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/assets/img/bg/footer_bg.jpg"
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">About Us</h2>
                    <div className="footer-content">
                      <p>
                        At PeerSOC, we provide cutting-edge Security Operations
                        Center (SOC) services to protect your business from
                        evolving cyber threats.
                      </p>
                      <div className="footer-newsletter">
                        <h4 className="title">Subscribe to Our Newsletter</h4>
                        <form action="#">
                          <input type="text" placeholder="Enter your email" />
                          <button type="submit" className="btn btn-two">
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Our Services</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Security Information & Event Management - SIEM
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Identity Access Management - IDAM
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Disaster Recovery Automation - DRA
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Moving Target Defence - MTD
                          </Link>
                        </li>
                        <li>
                          <Link href="/project">
                            <i className="fas fa-angle-double-right" />
                            Deception Technology - DT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Quick Links</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Terms & Conditions
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Refund Policy
                          </Link>
                        </li>

                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Our Processes
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Instagram Posts</h2>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/#">
                            <img
                              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <img
                              src="https://images.unsplash.com/photo-1681569685377-dd0dba4b0414?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <img
                              src="https://images.unsplash.com/photo-1585900464046-f713a61424dd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt=""
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-logo-area">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="logo">
                      <Link href="/index">
                        <img src="/assets/img/logo/w_logo.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-contact">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <span>Phone No</span>
                        <Link href="/tel:0123456789">+000 (123) 456 88</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="footer-social">
                      <h2 className="title">Follow Us:</h2>
                      <ul className="list-wrap">
                        <li>
                          <Link href="/#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>
                      © Copyright {new Date().getFullYear()}. All Right Reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-bootom-menu">
                    <ul className="list-wrap">
                      <li>
                        <Link href="/contact">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/contact">Terms Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
