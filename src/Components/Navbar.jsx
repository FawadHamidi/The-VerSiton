import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      if (scrollPosition === 0) {
        setActiveNav("#");
        return;
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const id = section.getAttribute("id");
          setActiveNav(`#${id}`);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#features"
            onClick={() => setActiveNav("#features")}
            className={activeNav === "#features" ? "active" : ""}
          >
            Features
          </a>
        </li> 
        <li>
          <a
            href="#news"
            onClick={() => setActiveNav("#news")}
            className={activeNav === "#news" ? "active" : ""}
          >
            Blogs
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
