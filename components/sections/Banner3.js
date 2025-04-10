import Link from "next/link";

export default function Banner3() {
  return (
    <>
      <section
        className="banner-area-three banner-two"
        data-background="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="banner-content-three">
                <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                  PeerSOC - Security Operations Center Services
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  PeerSOC offers security monitoring to protect your business.
                  We watch, detect, and respond to cyber threats to keep you
                  safe.
                </p>
                <Link
                  href="/services"
                  className="btn wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
