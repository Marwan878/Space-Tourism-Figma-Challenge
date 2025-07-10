import { DESTINATIONS } from "../../constants";
import styles from "./styles.module.scss";

export default function Tabs({ selectedDestination, setSelectedDestination }) {
  return (
    <div className="mb-12 lg:mb-20 flex gap-16 justify-center lg:justify-start">
      {DESTINATIONS.map((destination) => (
        <button
          key={destination.name}
          onClick={() => setSelectedDestination(destination)}
          className={`uppercase mobile-text-preset-8 md:desktop-text-preset-8 text-blue-300 h-32 flex items-start ${
            styles.link
          } ${
            destination.name === selectedDestination.name ? styles.selected : ""
          }`}
        >
          {destination.name}
        </button>
      ))}
    </div>
  );
}
