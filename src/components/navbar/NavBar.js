import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <nav className="flex align-center justify-between primary-color">
        <div className="logo">
          <h3>ItsChavan</h3>
        </div>

        <div className="navMenu">
          <ul className="flex">
            <li>
              <a> Home </a>
            </li>
            <li>
              <a> About </a>
            </li>
            <li>
              <a> Skills </a>
            </li>
            <li>
              <a> Projects </a>
            </li>
            <li>
              <a> Contact </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
