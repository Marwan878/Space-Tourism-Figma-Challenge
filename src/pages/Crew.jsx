import { useState } from "react";
import { CREW } from "../constants";
import SmallPagination from "../components/pagination/SmallPagination";
import PageTitle from "../components/PageTitle/PageTitle";
import Page from "../components/Page/Page";
import Description from "../components/Description/Description";
import Image from "../components/crew/Image";

import styles from "./styles.module.scss";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(CREW[0]);

  return (
    <Page className="crew md:pb-0 lg:pb-24">
      <PageTitle index="02" title="Meet your crew" />
      <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-16">
        <div className="md:px-44 lg:px-0 lg:flex-basis-1/2 lg:flex lg:flex-col lg:justify-center">
          <div
            className="lg:flex lg:flex-col lg:justify-center"
            style={{ marginBlock: "auto" }}
          >
            <div
              className="mt-20 mobile-text-preset-4 md:tablet-text-preset-4 lg:desktop-text-preset-4 uppercase mb-4 md:mb-8"
              style={{
                color: "hsl(var(--color-white) / 0.5)",
              }}
            >
              {selectedCrew.role}
            </div>
            <h1 className="mobile-text-preset-3 md:tablet-text-preset-3 lg:desktop-text-preset-3 uppercase mb-12">
              {selectedCrew.name}
            </h1>
            <Description
              description={selectedCrew.bio}
              className={styles.crewDescription}
            />
          </div>
          <div className="flex gap-8 lg:gap-20 justify-center lg:mb-24 lg:self-start">
            {CREW.map((crew, index) => (
              <SmallPagination
                key={crew.name}
                isSelected={selectedCrew.name === crew.name}
                index={index}
                onClick={() => setSelectedCrew(crew)}
              />
            ))}
          </div>
        </div>
        <Image src={selectedCrew.images.webp} alt={selectedCrew.name} />
      </div>
    </Page>
  );
}
