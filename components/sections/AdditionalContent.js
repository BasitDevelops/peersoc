import Link from "next/link";

const AdditionalContent = () => {
  const additionalContent = [
    {
      img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
      title: "24/7 Security Monitoring",
      desc: "Our Security Operations Center (SOC) provides comprehensive, around-the-clock surveillance of your entire digital environment. By continuously monitoring network activity, system logs, and user behavior, we’re able to detect potential threats in real-time. Our expert analysts rapidly analyze and respond to suspicious activity before it can escalate into a serious breach—minimizing risk, ensuring compliance, and protecting your business from costly downtime or data loss around the clock.",
    },
    {
      img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Incident Response",
      desc: "Minimize damage and disruption with rapid, coordinated responses to security incidents led by our team of experienced analysts and intelligent automation tools. Our SOC swiftly identifies, contains, and neutralizes threats before they spread, reducing the impact on your business operations. Through predefined playbooks and real-time decision-making, we ensure every incident is handled efficiently—preserving system integrity, maintaining compliance, and restoring normalcy with minimal downtime.",
    },
    {
      img: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Threat Intelligence",
      desc: "Harness the power of real-time threat intelligence and advanced behavioral analytics to proactively defend against cybercriminals and constantly evolving attack methods. Our SOC integrates global threat feeds, machine learning, and anomaly detection to identify malicious patterns before they cause harm. By analyzing user behavior and correlating it with known threat indicators, we deliver actionable insights that keep your systems resilient, your data secure, and your security posture one step ahead.",
    },
  ];
  return (
    <>
      <section className="wrapper additional-content">
        {additionalContent?.map((content, index) => (
          <div key={index} className="content">
            <div>
              <h2>{content?.title}</h2>
              <p>{content?.desc}</p>
              <Link href="/services" className="btn">
                Learn More
              </Link>
            </div>
            <img
              src={content?.img}
              alt={content?.title}
              className="wow fadeInUp"
              data-wow-delay=".2s"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default AdditionalContent;
