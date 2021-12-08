import Assembly from "../components/Assembly";
import Footer from "../components/Footer";
import Graph from "../components/Graph";
import Graph3 from "../components/Graph3";
// import Graph2 from '../components/Graph2';
import Lok from "../components/Lok";
import MenuBar from "../components/MenuBar";
import NavBar from "../components/NavBar";
import News from "../components/News";
import Parties from "../components/Parties";
import Popular from "../components/Popular";
import SearchBar from "../components/SearchBar";
import Social from "../components/Social";

// import MenuBar1 from '../components/MenuBar1';

export default function Home() {
  return (
    <div>
      <NavBar />

      {/* <MenuBar1 /> */}
      <MenuBar />
      <SearchBar />
      <Social />

      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between  mx-4 pl-10 pr-10">
        <News />
        {/* <Card /> */}

        <div className="flex-column justify-between m-4">
          <Assembly />
          &nbsp;
          <Lok />
        </div>
        <div pr-10>
          <Graph />
          &nbsp;
          <Graph3 />
        </div>
      </div>
      <div className="flex flex-row  ">
        <div className="flex flex-col justify-between m-4 pl-10 pr-10">
          <Popular />

          <Parties />
        </div>
      </div>

      <Footer />
    </div>
  );
}
