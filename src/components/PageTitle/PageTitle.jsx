import styles from "./styles.module.scss";

export default function PageTitle({ index, title, className }) {
  return (
    <p
      className={`uppercase mb-12 text-center md:text-left md:self-start text-white ${className}`}
    >
      <span className={styles.pageIndex}>{index}</span>
      <span className="mobile-text-preset-6 md:tablet-text-preset-5 lg:desktop-text-preset-5">
        {title}
      </span>
    </p>
  );
}
