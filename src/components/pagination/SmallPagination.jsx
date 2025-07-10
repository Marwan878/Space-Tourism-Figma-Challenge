import styles from "./styles.module.scss";

export default function SmallPagination({ isSelected, index, onClick }) {
  return (
    <button
      className={`rounded-full w-10 h-10 lg:w-15 lg:h-15 ${
        styles.smallPagination
      } ${isSelected ? styles.selected : ""}`}
      aria-label={`Go to page ${index + 1}`}
      onClick={onClick}
    />
  );
}
