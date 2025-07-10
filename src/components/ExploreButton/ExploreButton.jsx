import styles from "./styles.module.scss";

export default function ExploreButton() {
  return (
    <button
      className={`w-144 h-144 rounded-full text-blue-900 bg-white md:w-272 md:h-272 uppercase relative mobile-text-preset-4 md:desktop-text-preset-4 ${styles.exploreButton}`}
    >
      explore
    </button>
  );
}
