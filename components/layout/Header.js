import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { FaAngleDown, FaAngleRight, FaDotCircle } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import {
  MdOutlineSecurity,
  MdOutlineCloud,
  MdArrowOutward,
} from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { servicesMenuData } from "@/data/services_menu_data";

const menuItems = [
  { label: "About Us", href: "/about", hasChildren: false },
  {
    label: "Invisense",
    href: "/invisense",
    hasChildren: true,
    children: [
      {
        icon: <GrTechnology />,
        label: "Invisense",
        href: "/invisense",
        desc: "Seamless, invisible technology enhancing environments without disrupting aesthetics or function",
        links: [
          { label: "Invisense XDR", href: "/invisense-XDR" },
          { label: "Invisense XDR+", href: "/invisense-XDR+" },
          { label: "Invisense OXDR", href: "/invisense-OXDR" },
          { label: "Invisense GSOS", href: "/invisense-GSOS" },
          { label: "Invisense MDR", href: "/invisense-MDR" },
          { label: "Invisense MDR+", href: "/invisense-MDR+" },
          { label: "Invisense OMDR", href: "/invisense-OMDR" },
        ],
      },
      {
        icon: <MdOutlineSecurity />,
        label: "Managed security services on AWS",
        href: "/managed-security-services-on-AWS",
        desc: "Managed security services on AWS offer continuous monitoring, threat detection, and compliance using native tools—protecting workloads, ensuring data integrity, and minimizing risks so businesses can focus on growth.",
      },
      {
        icon: <MdOutlineCloud />,
        label: "Invinsense Cloud",
        href: "/invisense-cloud",
        desc: "Invinsense Cloud is a secure, scalable platform that simplifies deployment, management, and growth of applications—powered by automation, built-in security, and high-performance infrastructure for modern digital experiences.",
      },
      {
        icon: <LiaIndustrySolid />,
        label: "Invinsense OT",
        href: "/invisense-OT",
        desc: "Invinsense OT secures industrial systems with real-time visibility, threat detection, and compliance—ensuring safety, reliability, and resilience across operational technology environments in manufacturing, energy, and critical infrastructure.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    hasChildren: true,
    children: [
      {
        id: "S_M_W",
        icon: <GrTechnology />,
        label: "Managed Services",
        href: "#",
      },
      {
        id: "S_M_W_2",
        icon: <GrTechnology />,
        label: "Business Automation & IoT",
        href: "#",
      },
    ],
  },
  { label: "Contact Us", href: "/contact", hasChildren: false },
];

// const menuItems = [
//   { label: "About Us", href: "/about", hasChildren: false },
//   {
//     label: "Invisense",
//     href: "/invisense",
//     hasChildren: true,
//     children: [
//       {
//         icon: <GrTechnology />,
//         label: "Invisense",
//         href: "/invisense",
//         desc: "Seamless, invisible technology enhancing environments without disrupting aesthetics or function",
//         links: [
//           { label: "Invisense XDR", href: "/invisense-XDR" },
//           { label: "Invisense XDR+", href: "/invisense-XDR+" },
//           { label: "Invisense OXDR", href: "/invisense-OXDR" },
//           { label: "Invisense GSOS", href: "/invisense-GSOS" },
//           { label: "Invisense MDR", href: "/invisense-MDR" },
//           { label: "Invisense MDR+", href: "/invisense-MDR+" },
//           { label: "Invisense OMDR", href: "/invisense-OMDR" },
//         ],
//       },
//       {
//         icon: <MdOutlineSecurity />,
//         label: "Managed security services on AWS",
//         href: "/managed-security-services-on-AWS",
//         desc: "Managed security services on AWS offer continuous monitoring, threat detection, and compliance using native tools—protecting workloads, ensuring data integrity, and minimizing risks so businesses can focus on growth.",
//       },
//       {
//         icon: <MdOutlineCloud />,
//         label: "Invinsense Cloud",
//         href: "/invisense-cloud",
//         desc: "Invinsense Cloud is a secure, scalable platform that simplifies deployment, management, and growth of applications—powered by automation, built-in security, and high-performance infrastructure for modern digital experiences.",
//       },
//       {
//         icon: <LiaIndustrySolid />,
//         label: "Invinsense OT",
//         href: "/invisense-OT",
//         desc: "Invinsense OT secures industrial systems with real-time visibility, threat detection, and compliance—ensuring safety, reliability, and resilience across operational technology environments in manufacturing, energy, and critical infrastructure.",
//       },
//     ],
//   },
//   {
//     label: "Services",
//     href: "/services",
//     hasChildren: true,
//     children: [
//       {
//         id: "siem",
//         icon: <GrTechnology />,
//         label: "Security Information & Event Management - SIEM",
//         href: "#",
//       },
//       {
//         id: "idam",
//         icon: <GrTechnology />,
//         label: "Identity Access Management - IDAM",
//         href: "#",
//       },
//       {
//         id: "dra",
//         icon: <GrTechnology />,
//         label: "Disaster Recovery Automation - DRA",
//         href: "#",
//       },
//       {
//         id: "soar",
//         icon: <GrTechnology />,
//         label: "Security Orchestration Automation & Response - SOAR",
//         href: "#",
//       },
//       {
//         id: "mtd",
//         icon: <GrTechnology />,
//         label: "Moving Target Defence - MTD",
//         href: "#",
//       },
//       {
//         id: "dt",
//         icon: <GrTechnology />,
//         label: "Deception Technology - DT",
//         href: "#",
//       },
//       {
//         id: "edr",
//         icon: <GrTechnology />,
//         label: "Endpoint Detection and Response - EDR",
//         href: "#",
//       },
//     ],
//   },
//   { label: "Contact Us", href: "/contact", hasChildren: false },
// ];

export default function Header({ headerCls, headerTop }) {
  const [scroll, setScroll] = useState(0);

  const [isToggled, setToggled] = useState(false);
  const handleToggled = () => {
    setToggled(!isToggled);
    !isToggled
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  // START
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [activeServiceSubMenuId, setActiveServiceSubMenuId] = useState("S_M_W");
  const [activeServiceSubMenu, setActiveServiceSubMenu] = useState({});

  const handleSubMenu = (value) => {
    setActiveSubMenu(value);
  };

  const handleServiceSubMenu = (value) => {
    setActiveServiceSubMenuId(value);
    const subMenu = servicesMenuData.find(
      (serviceDetails) => serviceDetails?.id === value
    );
    setActiveServiceSubMenu(subMenu);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    handleServiceSubMenu(activeServiceSubMenuId);
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveSubMenu("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // STOP

  return (
    <>
      {headerTop && (
        <div className="header-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>Welcome to Roofx Construction</li>
                    <li>
                      <i className="fas fa-phone-alt" />
                      <Link href="tel:0123456789">+88 ( 5548 ) 6548</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:infoyour@gmail.com">
                        infoyour@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <div className="header-top-right">
                  <div className="header-lang">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="assets/img/icon/united-states.jpg" alt="" />{" "}
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/russia.jpg" alt="" />
                          Russia
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/india.jpg" alt="" />
                          India
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/bangladesh.jpg" alt="" />
                          Bangla
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
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
      )}
      <header ref={menuRef}>
        <div
          id="sticky-header"
          className={`menu-area  ${scroll ? "sticky-menu" : ""} ${
            headerCls ? headerCls : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleToggled}>
                  <i className="fas fa-bars" />
                </div>
                {/* START */}
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo different-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="logo d-none">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {menuItems?.map((menuItem, index) => (
                          <div key={index}>
                            <li
                              onClick={() =>
                                handleSubMenu(
                                  (menuItem?.hasChildren && !activeSubMenu) ||
                                    menuItem?.label !== activeSubMenu
                                    ? menuItem?.label
                                    : ""
                                )
                              }
                            >
                              <Link
                                href={
                                  !menuItem?.hasChildren ? menuItem?.href : ""
                                }
                                role={menuItem?.hasChildren && "button"}
                              >
                                {menuItem?.label}
                              </Link>
                              <i>{menuItem?.hasChildren && <FaAngleDown />}</i>
                            </li>
                            {menuItem?.hasChildren &&
                              menuItem?.label === activeSubMenu &&
                              activeSubMenu === "Invisense" && (
                                <div className="invisense-dropdown-menu">
                                  {menuItem?.children.map(
                                    (subMenuItem, index) => (
                                      <div key={index}>
                                        <div>
                                          <i>{subMenuItem?.icon}</i>
                                          <Link href={subMenuItem?.href}>
                                            {subMenuItem?.label}
                                          </Link>
                                        </div>
                                        <p>{subMenuItem?.desc}</p>
                                        <ul>
                                          {subMenuItem?.links?.map(
                                            (item, index) => (
                                              <li key={index}>
                                                <i>
                                                  <FaDotCircle />
                                                </i>
                                                <Link href={item?.href}>
                                                  {item?.label}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                        <button>
                                          <p>Learn More</p>
                                          <i>
                                            <MdArrowOutward />
                                          </i>
                                        </button>
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            {menuItem?.hasChildren &&
                              menuItem?.label === activeSubMenu &&
                              activeSubMenu === "Services" && (
                                <div className="services-dropdown-menu">
                                  <div className="first-container">
                                    {menuItem?.children?.map(
                                      (subMenuItem, index) => (
                                        <button
                                          className={`${
                                            subMenuItem?.id ===
                                              activeServiceSubMenuId &&
                                            "active-service-submenu"
                                          }`}
                                          key={index}
                                          onClick={() => {
                                            handleServiceSubMenu(
                                              subMenuItem?.id
                                            );
                                          }}
                                        >
                                          <div>
                                            <i
                                              className={`${
                                                subMenuItem?.id ===
                                                  activeServiceSubMenuId &&
                                                "active-service-submenu"
                                              }`}
                                            >
                                              {subMenuItem?.icon}
                                            </i>
                                            <p
                                              className={`${
                                                subMenuItem?.id ===
                                                  activeServiceSubMenuId &&
                                                "active-service-submenu"
                                              }`}
                                            >
                                              {subMenuItem?.label}
                                            </p>
                                          </div>
                                          <i
                                            className={`${
                                              subMenuItem?.id ===
                                                activeServiceSubMenuId &&
                                              "active-service-submenu"
                                            }`}
                                          >
                                            <FaAngleRight />
                                          </i>
                                        </button>
                                      )
                                    )}
                                  </div>
                                  <div className="second-container">
                                    <div key={activeServiceSubMenu?.label}>
                                      <Link href={activeServiceSubMenu?.href}>
                                        {activeServiceSubMenu?.label}
                                      </Link>
                                      <p>{activeServiceSubMenu?.desc}</p>
                                      <button>
                                        <p>Learn More</p>
                                        <i>
                                          <MdArrowOutward />
                                        </i>
                                      </button>
                                      <ul>
                                        {activeServiceSubMenu?.links?.map(
                                          (link) => (
                                            <li key={link?.label}>
                                              <Link href={link?.href}>
                                                <div>
                                                  <p>{link?.label}</p>
                                                  <i>
                                                    <MdArrowOutward />
                                                  </i>
                                                </div>
                                                <p>{link?.desc}</p>
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <Link href="/contact" className="btn">
                            Get a Quoute
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* END */}
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleToggled}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar menuItems={menuItems} />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
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
                            <i className="fab fa-instagram" />
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
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
