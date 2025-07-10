import { useState } from "react";

import { DESTINATIONS } from "../constants";

import Description from "../components/Description/Description";
import DescriptionStats from "../components/destination/DescriptionStats";
import Heading from "../components/destination/Heading";
import HorizontalRule from "../components/destination/HorizontalRule";
import Image from "../components/destination/Image";
import Page from "../components/Page/Page";
import PageTitle from "../components/PageTitle/PageTitle";
import Tabs from "../components/Tabs/Tabs";

import styles from "./styles.module.scss";

export default function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(
    DESTINATIONS[0]
  );

  return (
    <Page className="destination">
      <PageTitle index="01" title="Pick your destination" />
      <div
        className="flex flex-col items-center lg:flex-row lg:gap-16"
        style={{ flexGrow: 1 }}
      >
        <Image
          src={selectedDestination.images.webp}
          alt={selectedDestination.name}
        />
        <div className={`md:px-44 lg:py-66 ${styles.textAndTabsContainer}`}>
          <Tabs
            selectedDestination={selectedDestination}
            setSelectedDestination={setSelectedDestination}
          />

          <Heading name={selectedDestination.name} />
          <Description
            description={selectedDestination.description}
            className="mb-12 lg:mb-20"
          />

          <HorizontalRule />

          <DescriptionStats
            distance={selectedDestination.distance}
            travel={selectedDestination.travel}
          />
        </div>
      </div>
    </Page>
  );
}
