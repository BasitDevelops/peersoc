export default function Newsletter1() {
  return (
    <>
      <section
        className="newsletter-area jarallax newsletter-bg"
        data-background="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="newsletter-content">
                <div className="section-title white-title-two tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    Need Expert Cybersecurity Protection?
                  </span>
                  <h2 className="title tg-element-title">
                    Contact Our SOC Services Today!
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="newsletter-form">
                <form action="#">
                  <div className="form-grp">
                    <input type="text" placeholder="Name*" />
                  </div>
                  <div className="form-grp">
                    <input type="text" placeholder="Phone*" />
                  </div>
                  <button type="submit" className="btn btn-two">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
