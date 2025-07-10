import styles from "./styles.module.scss";

export default function LargePagination({ isSelected, index, onClick }) {
  return (
    <button
      className={`w-56 h-56 rounded-full text-preset-4 lg:w-80 lg:h-80 mobile-text-preset-4 ${
        styles.largePagination
      } ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {index + 1}
    </button>
  );
}
