import styles from "./styles.module.scss";

export default function DescriptionStats({ distance, travel }) {
  return (
    <dl
      className={`uppercase text-center md:flex md:gap-12 lg:text-start ${styles.descriptionStats}`}
    >
      <DescriptionStatsItem
        label="Avg. distance"
        value={distance}
        className="mb-12 md:mb-0"
      />

      <DescriptionStatsItem label="Est. travel time" value={travel} />
    </dl>
  );
}

function DescriptionStatsItem({ label, value, className = "" }) {
  return (
    <div style={{ flexGrow: 1 }} className={className}>
      <dt className="desktop-text-preset-7 text-blue-300 mb-6">{label}</dt>
      <dd className="desktop-text-preset-6">{value}</dd>
    </div>
  );
}
