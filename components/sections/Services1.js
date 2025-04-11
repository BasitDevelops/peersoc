import Link from "next/link";
import { useState } from "react";
import { FaInfinity } from "react-icons/fa6";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { TbReport } from "react-icons/tb";
import { IoCloudDoneOutline } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

export default function Services1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  const services = [
    {
      id: 1,
      background:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaInfinity />,
      title: "Continuous Threat Detection and Response",
      desc: "Our SOC team provides real-time monitoring and response to detect and mitigate security threats as they emerge.",
    },
    {
      id: 2,
      background:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <GrTechnology />,
      title: "Incident Response Preparedness",
      desc: "Be prepared for cyber incidents with our SOC-led response plans, ensuring swift action to minimize impact.",
    },
    {
      id: 3,
      background:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZXxlbnwwfHwwfHx8Mg%3D%3D",
      icon: <AiOutlineSecurityScan />,
      title: "Free Security Posture Evaluations",
      desc: "Get a complimentary assessment of your security posture to identify gaps and enhance overall resilience.",
    },
    {
      id: 4,
      background:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <TbReport />,
      title: "Compliance and Regulatory Reporting",
      desc: "PeerSOC assists with compliance audits and reports, keeping your organization aligned with regulatory standards.",
    },
    {
      id: 5,
      background:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <IoCloudDoneOutline />,
      title: "Cloud Security Assurance",
      desc: "Our SOC performs in-depth cloud security assessments to secure your cloud infrastructure against vulnerabilities.",
    },
    {
      id: 6,
      background:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <MdManageSearch />,
      title: "Vulnerability Management and Penetration Testing",
      desc: "We provide thorough vulnerability assessments and penetration testing to identify and remediate potential security weaknesses.",
    },
  ];
  return (
    <>
      <section className="services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">What We Do</span>
                <h2 className="title tg-element-title">Our Services Areas</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="services-item-container">
              {services?.map((service) => (
                <div
                  className="services-item wow fadeInUp"
                  data-wow-delay=".2s"
                  data-background={service?.background}
                  onMouseEnter={() => handleToggle(service?.id)}
                  onMouseLeave={() => handleToggle(service?.id)}
                >
                  <div
                    className="services-icon"
                    style={{
                      display: `${
                        isActive.key == service?.id ? "none" : "flex"
                      }`,
                    }}
                  >
                    {service?.icon}
                    {/* <img src={service?.icon} alt="" /> */}
                  </div>
                  <div className="services-content">
                    <h2
                      className="title"
                      style={{
                        display: `${
                          isActive.key == service?.id ? "none" : "block"
                        }`,
                      }}
                    >
                      <Link href="/services-details">{service?.title}</Link>
                    </h2>
                    <h2 className="number">0{service?.id}</h2>
                  </div>
                  <div
                    className="services-overlay-content"
                    style={{
                      display: `${
                        isActive.key == service?.id ? "block" : "none"
                      }`,
                    }}
                  >
                    <h2 className="title">
                      <Link href="/services-details">{service?.title}</Link>
                    </h2>
                    <p>{service?.desc}</p>
                    <Link href="/services-details" className="read-more">
                      Read More <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
