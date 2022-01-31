import PopularPoliticiansCard from "../PopularPoliticiansCard";
import Assembly from "./components/Assembly";
import Graph from "./components/Graph";
import Graph3 from "./components/Graph3";
import Lok from "./components/Lok";
import News from "./components/News";
import Parties from "./components/Parties";
import Popular from "./components/Popular";

export default function Home() {
  return (
    <div>
      <div className="  container px-4 p-4 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <News />

        <div className="flex-column  m-3 ">
          <Assembly />

          <Lok />
        </div>
        <div className="mt-3">
          <Graph />

          <Graph3 />
        </div>
      </div>
      <div className="container px-4 p-4 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  ">
        <div className="flex flex-col   ">
          <Popular />
          {/* <PopularPoliticiansCard /> */}
          <Parties />
        </div>
      </div>
    </div>
  );
}
