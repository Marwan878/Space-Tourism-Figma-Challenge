import styles from "./styles.module.scss";

export default function Image({ images, alt }) {
  return (
    <div
      className={`h-258 md:h-357 lg:h-600 lg:w-608 relative ${styles.imageContainer}`}
      style={{ flexShrink: 0, overflow: "hidden" }}
    >
      <img
        src={images.portrait}
        alt={alt}
        className={`absolute ${styles.image}`}
        style={{ width: "100%" }}
      />
    </div>
  );
}
