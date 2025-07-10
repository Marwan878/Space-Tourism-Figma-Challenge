import { TECHNOLOGY } from "../../constants";
import LargePagination from "../pagination/LargePagination";

import styles from "./styles.module.scss";

export default function Pagination({
  selectedTechnology,
  setSelectedTechnology,
}) {
  return (
    <div
      className={`flex justify-center gap-8 lg:flex-col lg:gap-16 ${styles.pagination}`}
    >
      {TECHNOLOGY.map((technology, index) => (
        <LargePagination
          key={technology.name}
          index={index}
          isSelected={technology.name === selectedTechnology.name}
          onClick={() => setSelectedTechnology(technology)}
        />
      ))}
    </div>
  );
}
