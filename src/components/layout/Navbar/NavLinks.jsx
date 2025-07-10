import { Link, useLocation } from "react-router-dom";
import { LINKS } from "../../../constants";

import styles from "./styles.module.scss";

export default function NavLinks() {
  const location = useLocation();

  return (
    <ul
      className={`justify-end gap-24 text-white hidden md:flex pe-20 lg:pe-32 ${styles.linksList}`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(80px)",
      }}
    >
      {LINKS.map((link, index) => (
        <li
          key={link.label}
          className={`desktop-text-preset-8 uppercase flex items-center justify-center h-96 gap-6 ${
            location.pathname === link.href ? styles.selected : ""
          } ${styles.link}`}
        >
          <span
            className={`font-bold`}
            style={{
              marginInlineEnd: "-0.388px",
            }}
          >
            {index.toString().padStart(2, "0")}
          </span>
          <Link to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
