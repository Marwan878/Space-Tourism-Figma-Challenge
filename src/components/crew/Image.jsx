import styles from "./styles.module.scss";

export default function Image({ src, alt }) {
  return (
    <div
      style={{ overflow: "hidden", flexShrink: 0, flexGrow: 1 }}
      className={styles.imageContainer}
    >
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: "contain",
          maskImage:
            "linear-gradient(to bottom, rgba(217, 217, 217, 1) 77%,  rgba(217, 217, 217, 0) 100%)",
          maskRepeat: "no-repeat",
        }}
        className={`h-340 w-272 md:w-447 md:h-560 lg:h-676 lg:w-539 ${styles.image}`}
      />
    </div>
  );
}
