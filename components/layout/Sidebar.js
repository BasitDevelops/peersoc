import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ menuItems }) {
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
  return (
    <>
      <ul className="navigation">
        {menuItems?.map((menuItem, index) => (
          <li
            key={index}
            className={menuItem?.hasChildren && "menu-item-has-children"}
          >
            <Link href={menuItem?.href}>{menuItem?.label}</Link>
            {menuItem?.hasChildren && (
              <>
                <ul
                  className="sub-menu"
                  style={{
                    display: `${isActive.key == index ? "block" : "none"}`,
                  }}
                >
                  {menuItem?.children?.map((subMenuItem, index) => (
                    <li key={index}>
                      <Link href={subMenuItem?.href}>{subMenuItem?.label}</Link>
                    </li>
                  ))}
                </ul>
                <div
                  className="dropdown-btn"
                  onClick={() => handleToggle(index)}
                >
                  <span className="fas fa-angle-down" />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
