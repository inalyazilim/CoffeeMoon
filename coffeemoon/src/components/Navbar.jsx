import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <href className="title">
        <div className="text-w">
          <div className="animated-text">
            <span>
              <a href="/Menü">
                <img src="./tabela.png" width={200} />
              </a>{" "}
            </span>
          </div>
        </div>
      </href>

      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/Menü">Menü</a>
        </li>
        <li>
          <a href="/Hizmetlerimiz">Hizmetlerimiz</a>
        </li>
        <li>
          <a href="İletişim">İletişim</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
