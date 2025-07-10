import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";

import styles from "./styles.module.scss";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </main>
    </div>
  );
}
