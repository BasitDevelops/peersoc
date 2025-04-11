import Image from "next/image";
import Link from "next/link";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { SiCyberdefenders } from "react-icons/si";
import { GiMonoWheelRobot } from "react-icons/gi";

export default function Features3() {
  const features = [
    {
      icon: <HiOutlineBuildingOffice2 />,
      img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Secure Modern Workplace",
      desc: "We provide comprehensive managed services to help you get the most out of your business. Our team of professionals has extensive knowledge and expertise in various technologies.",
    },
    {
      icon: <SiCyberdefenders />,
      img: "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?q=80&w=1609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cyber Security",
      desc: "Our cyber security solutions are designed to protect your data and keep it secure, as well as meet Australian regulatory requirements. Our solutions are always aligned with the current legal landscape.",
    },
    {
      icon: <GiMonoWheelRobot />,
      img: "https://images.unsplash.com/photo-1713857297379-6fc26e70f581?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Business Automation & IoT",
      desc: "We partner with leading global technology vendors to provide automated business processes and increase efficiency across your organisation.",
    },
  ];
  return (
    <>
      <section
        className="features-area-three features-bg-two"
        data-background="/assets/img/bg/features_bg02.jpg"
      >
        <div className="container">
          <div className="features-item-wrap">
            <div className="row justify-content-center">
              <div className="features-container">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="fetures-item-three wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="fetures-thumb-three">
                      <Link href="/services-details">
                        <Image
                          src={feature?.img}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="fetures-content-three">
                      <div className="fetures-icon-three">{feature?.icon}</div>
                      <h4 className="title">
                        <Link href="/services-details">{feature?.title}</Link>
                      </h4>
                      <p>{feature?.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
