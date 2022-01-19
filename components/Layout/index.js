import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Social from "./components/Social";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <MenuBar />
      <SearchBar />
      <Social />
      <main>{children}</main>
      <Footer />
    </>
  );
}
