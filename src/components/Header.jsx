import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`${isDarkMode ? "header header--dark" : "header"} `}>
      <button className="header__button" onClick={toggleTheme}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
