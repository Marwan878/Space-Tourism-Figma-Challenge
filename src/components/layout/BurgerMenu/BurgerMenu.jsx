import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LINKS } from "../../../constants";

import styles from "./styles.module.scss";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="md:hidden me-12">
      <button onClick={() => setIsOpen(true)}>
        <img src="/shared/icon-hamburger.svg" alt="Open menu" />
      </button>
      {isOpen && (
        <div
          className="w-254 ps-16 fixed text-white desktop-text-preset-8 uppercase"
          style={{
            height: "100dvh",
            top: 0,
            right: 0,
            backgroundColor: "rgba(11, 13, 23, 0.15)",
            backdropFilter: "blur(80px)",
            zIndex: 100,
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute"
            style={{
              right: "calc(24 / 16 * 1rem)",
              top: "calc(32 / 16 * 1rem)",
            }}
          >
            <img src="/shared/icon-close.svg" alt="Close menu" />
          </button>

          <ul
            className="absolute w-222"
            style={{ top: "calc(133 / 16 * 1rem)", right: 0 }}
          >
            {LINKS.map((link, index) => (
              <li
                key={link.label}
                className={`mb-16 ${styles.link} ${
                  link.href === location.pathname ? styles.selected : ""
                }`}
              >
                <span className="font-bold">
                  {index.toString().padStart(2, "0")}
                </span>
                <Link to={link.href} className="ms-6">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
