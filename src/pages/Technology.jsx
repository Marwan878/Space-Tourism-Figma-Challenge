import { useState } from "react";
import { TECHNOLOGY } from "../constants";

import Page from "../components/Page/Page";
import PageTitle from "../components/PageTitle/PageTitle";
import Image from "../components/technology/Image";
import Pagination from "../components/technology/Pagination";
import Description from "../components/Description/Description";

import styles from "./styles.module.scss";

export default function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(TECHNOLOGY[0]);

  return (
    <>
      <PageTitle
        index="03"
        title="Space launch 101"
        className={`mt-12 md:mt-20 lg:mt-24 ${styles.technologyPageTitle}`}
      />
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-16">
        <Image
          images={selectedTechnology.images}
          alt={selectedTechnology.name}
        />
        <Page
          className={`technology pb-24 md:pb-20 lg:py-0 ${styles.technologyContainer}`}
        >
          <div className="mt-4 md:w-512 lg:mt-0 lg:w-unset lg:flex lg:gap-32">
            <Pagination
              selectedTechnology={selectedTechnology}
              setSelectedTechnology={setSelectedTechnology}
            />
            <div>
              <h2
                className="mobile-text-preset-4 md:tablet-text-preset-4 lg:desktop-text-preset-4 uppercase mb-8 mt-20 lg:mt-0"
                style={{
                  color: "hsl(var(--color-white) / 0.542)",
                }}
              >
                The terminology...
              </h2>
              <h1 className="mobile-text-preset-3 md:tablet-text-preset-3 lg:desktop-text-preset-3 uppercase my-8 lg:mb-12">
                {selectedTechnology.name}
              </h1>
              <Description description={selectedTechnology.description} />
            </div>
          </div>
        </Page>
      </div>
    </>
  );
}
