import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuBar = () => {
  const [isMobile, setIsMobile] = useState();
  const router = useRouter();
  const currentState = router.asPath.split("/")[1];

  return (
    <nav className="navbar pt-4">
      <h3 className="logo">Logo</h3>

      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links-normal mt-8"}
        onClick={(e) => setIsMobile(false)}
      >
        <Link href="/" className="home">
          <li className="home-bar">Home</li>
        </Link>
        <Link href="/" className="news">
          <li>News</li>
        </Link>
        <Link href={`/${currentState}/parties`} className="parties">
          <li>Parties</li>
        </Link>
        <Link href={`/${currentState}/politicians`} className="politician">
          <li>Politicians</li>
        </Link>
        <Link href={`/${currentState}/constituencies`} className="constituency">
          <li>Constituencies</li>
        </Link>
        <Link href="/" className="compare">
          <li>Politicians</li>
        </Link>
        <Link href="/" className="election">
          <li>Election</li>
        </Link>
        <Link href="/" className="allElections">
          <li>AllElections</li>
        </Link>
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={(e) => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default MenuBar;
