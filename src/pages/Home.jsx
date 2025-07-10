import ExploreButton from "../components/ExploreButton/ExploreButton";
import Description from "../components/Description/Description";

export default function Home() {
  return (
    <div
      className={`md:py-64 container lg:px-0 lg:flex lg:items-end lg:flex-grow-1 home`}
    >
      <div className="text-center lg:text-start lg:flex lg:items-center lg:justify-between">
        <div className="md:px-44 lg:px-0 lg:flex-basis-1/2">
          <p className="mobile-text-preset-6 md:desktop-text-preset-5 text-blue-300 mb-12 uppercase">
            so, you want to travel to
          </p>
          <h1 className="mobile-text-preset-1 md:desktop-text-preset-1 uppercase text-white h-92 md:h-165">
            space
          </h1>
          <Description
            description={
              "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
            }
            className="mt-12"
          />
        </div>
        <div className="h-382 md:h-272 md:mt-33 lg:mt-0 flex justify-center items-center">
          <ExploreButton />
        </div>
      </div>
    </div>
  );
}
