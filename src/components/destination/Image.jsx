import styles from "./styles.module.scss";

export default function Image({ src, alt }) {
  return (
    <div
      style={{
        flexShrink: 0,
      }}
      className={`flex items-center justify-center ${styles.planetImageContainer}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-150 h-150 md:w-300 md:h-300 lg:w-480 lg:h-480"
      />
    </div>
  );
}
