export default function Description({ description, className = "", style }) {
  return (
    <p
      className={`mobile-text-preset-9 md:tablet-text-preset-9 lg:desktop-text-preset-9 text-blue-300 ${className}`}
      style={style}
    >
      {description}
    </p>
  );
}
