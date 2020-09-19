import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/NavBar.css";

function NavBar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default NavBar;