"use client";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import { FaRegDotCircle } from "react-icons/fa";
import { complete_services_data } from "@/data/complete_services_data";
import { usePathname } from "next/navigation";

export default function ServiceDetails() {
  const pathname = usePathname();

  const service = complete_services_data?.find(
    (service) => service?.path === pathname
  ) || {
    path: "/services/peersoc-XDR",
    service_title: "Extended Detection and Response (XDR)",
    main_img:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title_1: "Extended Detection and Response (XDR)",
    desc_1:
      "In cybersecurity, this refers to a security solution that integrates multiple security products into a cohesive system to provide broader and deeper threat detection and response capabilities. It goes beyond traditional endpoint detection and response (EDR) by including data from endpoints, networks, servers, and more.",
    process_img_1:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    process_img_2:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    service_process: [
      {
        title: "Data Collection & Correlation",
        desc: "XDR gathers telemetry and event data",
      },
      {
        title: "Threat Detection & Analysis",
        desc: "XDR uses AI/ML, behavioral analytics",
      },
      {
        title: "Automated Response & Remediation",
        desc: "Based on detected threats lorem lorem",
      },
    ],
    title_2: "Extended Detection and Response (XDR)",
    desc_2:
      "In cybersecurity, this refers to a security solution that integrates multiple security products into a cohesive system to provide broader and deeper threat detection and response capabilities. It goes beyond traditional endpoint detection and response (EDR) by including data from endpoints, networks, servers, and more.",
    benefit_desc:
      "XDR correlates data across endpoints, networks, cloud, and more, enabling better detection of advanced threats.",
    benefits: [
      "Improved Threat Detection",
      "Faster Response Times",
      "Proactive Threat Hunting",
    ],
    otherServices: [
      { label: "Peersoc XDR", href: "/services/peersoc-XDR" },
      { label: "Peersoc XDR+", href: "/services/peersoc-XDR+" },
      { label: "Peersoc OXDR", href: "/services/peersoc-OXDR" },
      { label: "Peersoc GSOS", href: "/services/peersoc-GSOS" },
      { label: "Peersoc MDR", href: "/services/peersoc-MDR" },
      { label: "Peersoc MDR+", href: "/services/peersoc-MDR+" },
      { label: "Peersoc OMDR", href: "/services/peersoc-OMDR" },
    ],
  };

  return (
    <>
      <Layout
        breadcrumbTitle={service?.service_title}
        headerCls={"menu-area-three non-transparent-header"}
      >
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <img src={service?.main_img} alt="" />
                    </div>
                    <div className="services-details-content">
                      <h2 className="title">{service?.title_1}</h2>
                      <p>{service?.desc_1}</p>
                      <div className="services-process-wrap">
                        <div className="row justify-content-center">
                          <div className="col-lg-6 col-md-8">
                            <div className="services-process-img">
                              <img src={service?.process_img_1} alt="" />
                              <div>
                                <img src={service?.process_img_2} alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="services-process-content">
                              <h2 className="title">Service Process</h2>
                              <ul className="list-wrap">
                                {service?.service_process?.map(
                                  (process, index) => (
                                    <li key={index}>
                                      <div className="services-process-item">
                                        <div className="icon">
                                          <FaRegDotCircle />
                                        </div>
                                        <div className="content">
                                          <h4 className="title">
                                            {process?.title}
                                          </h4>
                                          <p>{process?.desc}</p>
                                        </div>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="title-two">{service?.title_2}</h2>
                      <p>{service?.desc_2}</p>
                      <div className="service-benefits-wrap">
                        <div className="row">
                          <div className="col-lg-7 order-0 order-lg-2">
                            <div className="benefits-img">
                              <img src={service?.main_img} alt="" />
                              <img src={service?.main_img} alt="" />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="benefits-content">
                              <h2 className="title">Service Benefits</h2>
                              <p>{service?.benefit_desc}</p>
                              <ul className="list-wrap">
                                {service?.benefits.map((benefit) => (
                                  <li>
                                    <i className="fas fa-check-circle" />
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <aside className="services-sidebar">
                    <div className="services-widget">
                      <h4 className="widget-title">All Services</h4>
                      <div className="our-services-list">
                        <ul className="list-wrap">
                          {service?.otherServices?.map((service, index) => (
                            <li key={index}>
                              <Link href={service?.href}>
                                {service?.label}
                                <i className="fas fa-arrow-right" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      className="services-widget widget-bg"
                      data-background="/assets/img/services/sw_bg.jpg"
                    >
                      <h4 className="widget-title">Get a free quote</h4>
                      <form action="#" className="sidebar-form">
                        <div className="form-grp">
                          <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="email"
                            type="text"
                            placeholder="Your Email Address"
                          />
                        </div>
                        <div className="form-grp">
                          <textarea id="message" placeholder="Your Message" />
                        </div>
                        <button type="submit" className="btn btn-two">
                          Contact Us
                        </button>
                      </form>
                    </div>
                    <div className="services-widget">
                      <h4 className="widget-title">Our Brochures Download</h4>
                      <div className="download-wrap">
                        <Link
                          href="assets/img/services/services_details01.jpg"
                          download
                          target="_blank"
                        >
                          <i className="fas fa-cloud-download-alt" />
                          Service Details.pdf 65 KB
                        </Link>
                        <Link
                          href="assets/img/services/services_details01.jpg"
                          download
                          target="_blank"
                        >
                          <i className="fas fa-file-pdf" />
                          Service Models.doc 48 KB
                        </Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
          {/* brand-area */}
          {/* <Brand3 /> */}
        </div>
      </Layout>
    </>
  );
}
